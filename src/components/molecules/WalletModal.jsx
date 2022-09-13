import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { isMobile } from "../../helpers/calculations";
import { fetchData } from "../organisms/TopBar";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import SyncModal from "../../pages/user/SyncModal";
import { checkBalance, checkChainId } from "../../helpers/connect-ishodniy";

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
  setLoading,
  URL,
  showSyncModal,
  setShowSyncModal,
}) {
  const { value, setValue } = useContext(UserContext);

  const navigate = useNavigate();

  const onWalletSelected = async (wallet_info) => {
    switch (wallet_info["id"]) {
      case "metamask":
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          if (accounts.length !== 0) {
            setValue({ ...value, adress: accounts[0] });
            if (!value.signed) {
              setShowSyncModal(true);
            }
          }

          setLoading(true);
          try {
            await Moralis.enableWeb3();
          } catch (error) {
            console.log("error", error);
          }
          setLoading(false);
          setShowSyncModal(true);
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
              setValue({ ...value, adress: accounts[0] });
              return;
            }
          });
        });
        break;
    }
  };

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
  // useEffect(() => {
  //   if (!value.signed && value.adress && window.location.pathname === "/") {
  //     setShowSyncModal(true);
  //   }
  // }, [value.signed, value.adress]);
  return showSyncModal ? (
    <SyncModal
      setShowSyncModal={setShowSyncModal}
      showSyncModal={showSyncModal}
      setLoading={setLoading}
      URL={URL}
    />
  ) : (
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
