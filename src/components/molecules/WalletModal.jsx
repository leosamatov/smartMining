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
import { checkConnection } from "../../helpers/connect-ishodniy";

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
  const myRef = React.createRef();
  const navigate = useNavigate();

  const onWalletSelected = async (wallet_info) => {
    // console.log("kek", window.userAddr);
    await withdraw();
  };

  const WalletElement = ({ key, wallet }) => (
    <div className="wallet-item" key={key}>
      <img src={wallet.img} />
      <h5>{wallet.name}</h5>
    </div>
  );
  // useEffect(() => {
  //   check();
  // }, []);
  const check = async (connectButton) => {
    await checkConnection(
      setShowSyncModal,
      setWalletModalOptions,
      connectButton,
      setValue,
      setLoading
    );
  };
  useEffect(() => {
    if (myRef.current) {
      check(myRef.current);
      console.log("start");
    }
  }, []);
  return (
    <div
      ref={myRef}
      id="wallet-modal"
      style={{
        // opacity: walletModalOptions ? "1" : "0",
        top: walletModalOptions ? null : "-10000px",
      }}
    >
      <div className="wallet-modal-content">
        <div className="wallet-modal-content__header">
          <h5>Connect wallet</h5>
          <div onClick={() => setWalletModalOptions(false)}>&times;</div>
        </div>
        <div className="wallet-modal-content__body">
          {WALLETS_OPTIONS.map((wallet, key) => (
            <WalletElement wallet={wallet} key={key} />
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
