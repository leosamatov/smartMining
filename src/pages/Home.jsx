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
  }, []);

  return (
    <>
      {/* {loading && <Loading loading={loading} />} */}
      <Template>
        <WhiteBgContainer>
          <TopBar
            setLoading={setLoading}
            setShowSyncModal={setShowSyncModal}
            setWalletModalOptions={setWalletModalOptions}
          />

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
