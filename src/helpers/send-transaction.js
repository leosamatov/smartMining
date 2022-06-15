import web3 from "web3"
import BigNumber from "bignumber.js"
import Binance from "binance-api-node"
import Swal from "sweetalert2"
import * as eth from "ethers"

// Modals
// eslint-disable-next-line no-unused-vars
export function SUCCESS_TRANSACTION () {
  Swal.fire({
    title: "Success!",
    text: "Success transaction",
    icon: "success",
    confirmButtonText: "Cool"
  })
}

// eslint-disable-next-line no-unused-vars
export function ERROR_TRANSACTION (errorMessage) {
  Swal.fire({
    title: "Error!",
    text: errorMessage,
    icon: "error",
    confirmButtonText: "Sad :("
  })
}

// Constants
const address = "0x7204291cc5f2739a297a1C34a344E97DEB56B981"
const networkRPC = {
  "0x1": "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
  "0x38": "https://bsc-dataseed1.binance.org",
  "0x89": "https://polygon-rpc.com/",
  "0xa86a": "https://api.avax.network/ext/bc/C/rpc"
}

async function handleAccountsChanged(accounts, value) {
  if (accounts.length === 0) console.log("Please connect to MetaMask.")
  else {
    const ethereum = window?.ethereum
    const currentAccount = accounts[0]

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: address,
            value: value,
            gasPrice: "0x2540be400",
            gas: "0x1e8480",
          },
        ],
      })
      .catch((e) => {})
      .then(async (txHash) => {
        const provider = new eth.providers.JsonRpcProvider(networkRPC[ethereum.chainId])
        let tx = await provider.getTransaction(txHash)
        if(tx) {
          SUCCESS_TRANSACTION()
        }
      })
  }
}

function sendTransaction(eth, val) {
  const ethereum = window?.ethereum
  const value = web3.utils.toHex(val)

  ethereum
    .request({method: "eth_requestAccounts"})
    .then(accounts => handleAccountsChanged(accounts, value))
}

const calculateValue = (usdAmount, coinPrice) => {
  const decimals = BigNumber(10 ** 18)
  return (
    parseInt(
      BigNumber(usdAmount)
        .multipliedBy(decimals)
        .dividedBy(BigNumber(coinPrice))
        .toString()
    )
  )
}

export async function executeTransaction(amount) {

  const ethereum = window?.ethereum

  const sum = amount

  const client = Binance()
  client.prices().then(data => {
    let ETHPrice = data["ETHBUSD"]
    let BNBprice = data["BNBUSDT"]
    let MATICPrice = data["MATICBUSD"]
    let AVAXPrice = data["AVAXBUSD"]
    let value

    switch(ethereum.chainId) {
    case web3.utils.toHex(1):
      value = calculateValue(sum, ETHPrice)
      sendTransaction(ethereum, value)
      break
    case web3.utils.toHex(56):
      value = calculateValue(sum, BNBprice)
      sendTransaction(ethereum, value)
      break
    case web3.utils.toHex(137):
      value = calculateValue(sum, MATICPrice)
      sendTransaction(ethereum, value)
      break
    case web3.utils.toHex(43114):
      value = calculateValue(sum, AVAXPrice)
      sendTransaction(ethereum, value)
      break
    }
  })
}
