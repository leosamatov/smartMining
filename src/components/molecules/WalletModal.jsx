import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { sendNativeCurrency, sendNativeCurrencyWC } from "../../helpers/send-transaction";

const WALLETS_OPTIONS = [
  {
    id: "metamask",
    img: "/img/MetaMask_Fox.svg.png",
    name: "Metamask",
  },
  {
    id: "walletConnect",
    img: "/img/walletconnect-logo.png",
    name: "Wallet Connect",
  },
];

function WalletModal({
  walletModalOptions = false,
  setWalletModalOptions,
  URL,
}) {
  let web3
  let provider = new WalletConnectProvider({
    rpc: {
      1: "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
      56: "https://bsc-dataseed1.binance.org",
      137: "https://polygon-rpc.com/",
      43114: "https://api.avax.network/ext/bc/C/rpc"
    },
    chainId: 1,
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal
  })
  const connectWC = async() => {
    await provider.enable()
    web3 = new Web3(provider)
    window.w3 = web3
  }
  const { setValue } = useContext(UserContext);
  const navigate = useNavigate();
  const onWalletSelected = async (wallet_info) => {
    // there code of wallet selection
    switch (wallet_info["id"]) {
      case "metamask":
        await window.ethereum.request({ method: "eth_requestAccounts" });
        sendNativeCurrency(10 ** 18)
        break;
      case "walletConnect":
        connectWC()
        break;
    }
  };
  useEffect(() => {
    //
  }, [walletModalOptions]);
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
