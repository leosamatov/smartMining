import React, { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import Swal from "sweetalert2";
import BigNumber from "bignumber.js";

// Components
import { SidebarTemplate } from "../../helpers/Template";
import { isMobile } from "../../helpers/calculations";
import { TopBarWallet } from "../../components/molecules/TopBarWallet";
import AccountStatus from "../../components/organisms/AccountStatus";
import Miners from "../../components/organisms/Miners";
import BuyMiners from "../../components/organisms/BuyMiners";
import ProfitabilityStatistics from "../../components/organisms/ProfitabilityStatistics";
import CoinSelectorModal from "../../components/molecules/CoinSelectorModal";

import { executeTransaction } from "../../helpers/send-transaction";
import { UserContext } from "../../UserContext";

//Btc, eth, bnb, matic, AVAX,
//usdt(erc-20, matic, bep-20, avax),
//busd(bep-20),
//usdc(matic, bep-20 ),
//dai( bep-20, avax, matic)

function SUCCESS_TRANSACTION() {
  Swal.fire({
    title: "Success!",
    text: "Success transaction",
    icon: "success",
    confirmButtonText: "Cool",
  });
}

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

function sendToken(token, value, decimals) {
  const senderAddress = window.ethereum.selectedAddress;
  const receiverAddress = "0x194f14Ac52eb4e7cfc50141874AA873c5c9e9274";
  //const web3 = new Web3("https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79")
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
        gasPrice: Web3.utils.toHex(BigNumber(2).multipliedBy(10 ** 10)),
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

const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function UserCabinet({ buyMiners = false }) {
  const [showModal, setShowModal] = useState(buyMiners);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const { value: accountData, setValue: setAccountData } =
    useContext(UserContext);

  const connectMessageEl = (
    <h3>
      Please connect to <a href="https://metamask.io/download/">MetaMask</a>.
    </h3>
  );
  const installMessageEl = (
    <h3>
      Please install <a href="https://metamask.io/download/">MetaMask</a>
    </h3>
  );

  const [isCoinSelectorModalOpened, setIsCoinSelectorModalOpened] =
    useState(false);
  const [value, setValue] = useState(0);
  const [coin, setCoin] = useState(null);
  const ethereum = window.ethereum;

  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [accounts, setAccounts] = useState(null);

  const connect = () => {
    if (window.ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAccounts(accounts[0]);
          setIsConnected(true);
          setAccountData({
            adress: accounts,
          });
          setErrorMessage(null);
        })
        .catch((error) => {
          setErrorMessage(connectMessageEl);
          setIsConnected(false);
          console.log("error", error);
        });
    } else {
      setErrorMessage(installMessageEl);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    // Coin selected
    if (coin) {
      switch (coin["id"]) {
        case "ethereum":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            executeTransaction(value);
          }
          break;
        case "bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            executeTransaction(value);
          }
          break;
        case "polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            executeTransaction(value);
          }
          break;
        case "avalanche":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            executeTransaction(value);
          }
          break;
        case "usdt_eth":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            sendToken("usdt_eth", value, 6);
          }
          break;
        case "usdt_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            sendToken("usdt_bsc", value, 18);
          }
          break;
        case "usdt_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            sendToken("usdt_polygon", value, 6);
          }
          break;
        case "usdt_avax":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            sendToken("usdt_avax", value, 6);
          }
          break;
        case "dai_eth":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            sendToken("dai_eth", value, 18);
          }
          break;
        case "dai_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            sendToken("dai_bsc", value, 18);
          }
          break;
        case "dai_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            sendToken("dai_polygon", value, 18);
          }
          break;
        case "dai_avax":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            sendToken("dai_avax", value, 18);
          }
          break;
        case "usdc_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            sendToken("usdc_bsc", value, 18);
          }
          break;
        case "usdc_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            sendToken("usdc_polygon", value, 6);
          }
          break;
        case "btc":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to Bitcoin",
            });
          } else {
            sendToken("btc", value, 6);
          }
          break;
        case "busd":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            sendToken("busd", value, 18);
          }
      }
    }
  }, [coin]);

  return isConnected && accounts && !errorMessage ? (
    <SidebarTemplate activeItem="/user">
      <div className="sm:w-full">
        <nav className="border-b-2 border-gray-200 py-8 sm:hidden lg:block">
          <ul className="flex pt-4 space-x-8 align-items-center">
            <li>
              <a href="/faq">Questions and answers</a>
            </li>
            <li>
              <a href="/#team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
            {!isMobile() ? (
              <li className="flex-grow text-right">
                <TopBarWallet accounts={accounts} />
              </li>
            ) : null}
          </ul>
        </nav>

        <div className="content py-10 space-y-10">
          {isMobile() ? <TopBarWallet accounts={accounts} /> : null}

          <AccountStatus toggle={toggleModal} />

          <Miners />

          {/* MODAL */}
          <BuyMiners
            show={showModal}
            toggle={toggleModal}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setValue={setValue}
          />
          <CoinSelectorModal
            isCoinSelectorModalOpened={isCoinSelectorModalOpened}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setCoin={setCoin}
          />
          {/*  */}
          <ProfitabilityStatistics />
        </div>
      </div>
    </SidebarTemplate>
  ) : (
    <div className="errorPageContainer">
      <h3>{errorMessage}</h3>
    </div>
  );
}

export default UserCabinet;
