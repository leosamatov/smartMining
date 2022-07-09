import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { isMobile } from "../../helpers/calculations";

const WALLETS_OPTIONS = [
  {
    id: "metamask",
    img: "/img/MetaMask_Fox.svg.png",
    name: "Metamask",
  },
  // {
  //   id: "walletConnect",
  //   img: "/img/walletconnect-logo.png",
  //   name: "Wallet Connect",
  // },
];

function WalletModal({
  walletModalOptions = false,
  setWalletModalOptions,
  URL,
}) {
  const { setValue } = useContext(UserContext);
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
      case "walletConnect":
        connectWC();
        break;

      case "walletConnect":
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org",
          qrcodeModal: QRCodeModal,
        });
        connector.connect();
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
          {WALLETS_OPTIONS.map((wallet, key) => (
            <div
              className="wallet-item"
              key={key}
              onClick={() => onWalletSelected(wallet)}
            >
              <img src={wallet.img} />
              <h5>{wallet.name}</h5>
            </div>
          ))}
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
