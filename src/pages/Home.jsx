import React, { useContext, useEffect, useState } from "react";

// Helpers
import Template, { WhiteBgContainer } from "../helpers/Template";
import Footer from "../helpers/Footer";

// Components
import TopBar from "../components/organisms/TopBar";
import Steps from "../components/molecules/Steps";
import Mining from "../components/molecules/Mining";
import Calculator from "../components/organisms/Calculator";
import CloudMiningContracts from "../components/organisms/CloudMiningContracts";
import Team from "../components/molecules/Team";
import ConnectWallet from "../components/molecules/ConnectWallet";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletModal from "../components/molecules/WalletModal";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";
import { pixelPageView } from "../helpers/pixel";
import { isMobile } from "../helpers/calculations";
import Transactions from "../components/organisms/Transactions";
import Loading from "../components/loaders/Loading";
import SyncModal from "./user/SyncModal";

function Home({
  walletModalOptions,
  setWalletModalOptions,
  loading,
  setShowSyncModal,
  showSyncModal,
  setLoading,
}) {
  const { id } = useParams();
  const { value, setValue } = useContext(UserContext);
  useEffect(() => {
    if (id) {
      pixelPageView(id);
    }

    async function fetchData(params) {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (isMobile() && accounts.length !== 0) {
          setValue({ ...value, adress: accounts[0] });
          if (!value.signed) {
            setShowSyncModal(true);
          }
        }
        window.ethereum.on("accountsChanged", (accounts) => {
          if (!accounts.length) {
            setValue({ ...value, adress: null });
          } else {
            fetchData();
          }
        });
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading loading={loading} />}
      {showSyncModal && <SyncModal setShowSyncModal={setShowSyncModal} />}
      <Template>
        <WhiteBgContainer>
          <TopBar setWalletModalOptions={setWalletModalOptions} />

          <Steps setWalletModalOptions={setWalletModalOptions} />
          <Mining setWalletModalOptions={setWalletModalOptions} />
          <Transactions />
          <Calculator setWalletModalOptions={setWalletModalOptions} />
          <CloudMiningContracts setWalletModalOptions={setWalletModalOptions} />
        </WhiteBgContainer>

        <Team setWalletModalOptions={setWalletModalOptions} />
        <ConnectWallet setWalletModalOptions={setWalletModalOptions} />
        <Footer setWalletModalOptions={setWalletModalOptions} />

        {/* Modals */}
      </Template>
    </>
  );
}

export default Home;
