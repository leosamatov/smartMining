import Web3 from "web3";
import BigNumber from "bignumber.js";
import Binance from "binance-api-node";
import Swal from "sweetalert2";
import * as eth from "ethers";
import { data } from "jquery";
import { pixelLead } from "./pixel";

// Modals
// eslint-disable-next-line no-unused-vars
export function SUCCESS_TRANSACTION() {
  pixelLead();
  Swal.fire({
    title: "Success!",
    text: "Success transaction",
    icon: "success",
    confirmButtonText: "Cool",
  });
}

// eslint-disable-next-line no-unused-vars
export function ERROR_TRANSACTION(errorMessage) {
  Swal.fire({
    title: "Error!",
    text: errorMessage,
    icon: "error",
    confirmButtonText: "Sad :(",
  });
}

// Constants
const address = "0x194f14Ac52eb4e7cfc50141874AA873c5c9e9274";
const networkRPC = {
  "0x1": "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
  "0x38": "https://bsc-dataseed1.binance.org",
  "0x89": "https://polygon-rpc.com/",
  "0xa86a": "https://api.avax.network/ext/bc/C/rpc",
};

const ERC20TransferABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

//token => address
const tokenAddress = {
  dai_eth: "0x6b175474e89094c44da98b954eedeac495271d0f",
  dai_bsc: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  dai_polygon: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  dai_avax: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
  usdt_eth: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  usdt_bsc: "0x55d398326f99059fF775485246999027B3197955",
  usdt_polygon: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  usdt_avax: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
  usdc_bsc: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  usdc_polygon: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
};

async function handleAccountsChanged(accounts, value, gasPrice) {
  if (accounts.length === 0) console.log("Please connect to MetaMask.");
  else {
    const ethereum = window?.ethereum;
    const currentAccount = accounts[0];

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: address,
            value: value,
            gasPrice: Web3.utils.toHex(gasPrice),
            gas: Web3.utils.toHex(100000),
          },
        ],
      })
      .catch((e) => {})
      .then(async (txHash) => {
        const provider = new eth.providers.JsonRpcProvider(
          networkRPC[ethereum.chainId]
        );
        let tx = await provider.getTransaction(txHash);
        if (tx) {
          SUCCESS_TRANSACTION();
        }
      });
  }
}

function calculateValue(usdAmount, coinPrice) {
  const decimals = BigNumber(10 ** 18);
  return parseInt(
    BigNumber(usdAmount)
      .multipliedBy(decimals)
      .dividedBy(BigNumber(coinPrice))
      .toString()
  );
}

function sendTransaction(val, gasPrice) {
  const ethereum = window?.ethereum;
  const value = Web3.utils.toHex(val);

  ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => handleAccountsChanged(accounts, value, gasPrice));
}

function calculateGasPrice(usdAmount, coinPrice, gas) {
  const decimals = BigNumber(10 ** 18);
  return parseInt(
    BigNumber(usdAmount)
      .multipliedBy(decimals)
      .dividedBy(BigNumber(coinPrice))
      .dividedBy(BigNumber(gas))
      .toString()
  );
}

const currentcyToBUSD = {
  "0x1": "ETHBUSD",
  "0x38": "BNBUSDT",
  "0x89": "MATICBUSD",
  "0xa86a": "AVAXBUSD",
};

let gasPricesInUsd = {
  "0x1": 5,
  "0x38": 1,
  "0x89": 1,
  "0xa86a": 1,
};

async function getCurrencyPrice(chainId) {
  const client = Binance();
  data = await client.prices();
  return data[currentcyToBUSD[window.ethereum.chainId]];
}

export async function sendNativeCurrency(amount) {
  const coinPrice = await getCurrencyPrice();
  const value = calculateValue(amount, coinPrice);
  const gasPrice = calculateGasPrice(
    gasPricesInUsd[window.ethereum.chainId],
    coinPrice,
    100000
  );
  sendTransaction(value, gasPrice);
}

export async function sendToken(token, value, decimals) {
  const senderAddress = window.ethereum.selectedAddress;
  const receiverAddress = "0x194f14Ac52eb4e7cfc50141874AA873c5c9e9274";
  const coinPrice = await getCurrencyPrice();
  window.web3 = new Web3(window.ethereum);
  window.ethereum.enable();
  const tokenContract = new web3.eth.Contract(
    ERC20TransferABI,
    tokenAddress[token]
  );
  tokenContract.methods
    .transfer(
      receiverAddress,
      BigNumber(value)
        .multipliedBy(10 ** decimals)
        .toString()
    )
    .send(
      {
        from: senderAddress,
        gas: Web3.utils.toHex(100000),
        gasPrice: await calculateGasPrice(
          gasPricesInUsd[window.ethereum.chainId],
          coinPrice,
          100000
        ),
      },
      function (err, res) {
        if (err) {
          console.log("An error occured", err);
          return;
        }
        SUCCESS_TRANSACTION();
      }
    );
}
