import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { isMobile } from "../../helpers/calculations";
import { fetchData } from "../organisms/TopBar";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

const WALLETS_OPTIONS = [
  {
    id: "metamask",
    img: "/img/MetaMask_Fox.svg.png",
    name: "Metamask",
    mobile: true,
    pc: true,
  },
  // {
  //   id: "trustwalllet",
  //   img: "/img/TWT.png",
  //   name: "Trustwallet",
  //   mobile: true,
  //   pc: false,
  // },
  // {
  //   id: "walletConnect",
  //   img: "/img/walletconnect-logo.png",
  //   name: "Wallet Connect",
  //   mobile: false,
  //   pc: true,
  // },
];

//function setAddress(currentAddress) {
//  let address = document.getElementById("address")
//  address.innerText = currentAddress
//}

function WalletModal({
  walletModalOptions = false,
  setWalletModalOptions,
  URL,
}) {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();
  const onWalletSelected = async (wallet_info) => {
    switch (wallet_info["id"]) {
      case "metamask":
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setValue({ adress: window.ethereum.selectedAddress });
          if (URL) {
            navigate(URL);
          } else {
            setWalletModalOptions(false);
          }
          return;
        } else if (isMobile()) {
          window.open("https://metamask.app.link/dapp/smart-mining.io");
        }
        break;
      case "trustwalllet":
        const deepLink =
          "https://link.trustwallet.com/open_url?coin_id=60&url=https://smart-mining.io";
        window.open(deepLink);
        break;
      case "walletConnect":
        let provider = new WalletConnectProvider({
          rpc: {
            1: "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
            56: "https://bsc-dataseed1.binance.org",
            137: "https://polygon-rpc.com/",
            43114: "https://api.avax.network/ext/bc/C/rpc",
          },
          bridge: "https://bridge.walletconnect.org",
          qrcode: true,
          //qrcodeModal: QRCodeModal
        });
        provider.enable().then(() => {
          let web3 = new Web3(provider);
          web3.eth.getAccounts().then((accounts) => {
            if (accounts[0] != null) {
              console.log(2);
              setValue({ adress: accounts[0] });
              return;
            }
          });
        });
        break;
    }
  };
  // useEffect(() => {
  //   if (walletModalOptions) {
  //     if (window.ethereum) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then((accounts) => {
  //           setValue({
  //             adress: accounts[0],
  //           });
  //           if (URL) {
  //             navigate(URL);
  //           }
  //         });
  //     }
  //   }
  // }, [walletModalOptions]);

  const WalletElement = ({ key, wallet }) => (
    <div
      className="wallet-item"
      key={key}
      onClick={() => onWalletSelected(wallet)}
    >
      <img src={wallet.img} />
      <h5>{wallet.name}</h5>
    </div>
  );
  return (
    <div
      id="wallet-modal"
      style={{ display: walletModalOptions ? "flex" : "none" }}
    >
      <div className="wallet-modal-content">
        <div className="wallet-modal-content__header">
          <h5>Connect wallet</h5>
          <div onClick={() => setWalletModalOptions(false)}>&times;</div>
        </div>
        <div className="wallet-modal-content__body">
          {WALLETS_OPTIONS.map((wallet, key) =>
            isMobile() && wallet.mobile ? (
              <WalletElement wallet={wallet} key={key} />
            ) : !isMobile() && wallet.pc ? (
              <WalletElement wallet={wallet} key={key} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

WalletModal.propTypes = {
  walletModalOptions: PropTypes.bool,
  setWalletModalOptions: PropTypes.func,
};

export default WalletModal;
