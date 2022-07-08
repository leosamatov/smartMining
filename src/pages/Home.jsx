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

function Home() {
  const { id } = useParams();
  const [walletModalOptions, setWalletModalOptions] = useState({
    open: false,
    URL: null,
  });
  useEffect(() => {
    if (id) {
      pixelPageView(id);
    }
  }, []);

  return (
    <Template>
      <WhiteBgContainer>
        <TopBar setWalletModalOptions={setWalletModalOptions} />

        <Steps setWalletModalOptions={setWalletModalOptions} />
        <Mining setWalletModalOptions={setWalletModalOptions} />
        <Calculator setWalletModalOptions={setWalletModalOptions} />
        <CloudMiningContracts setWalletModalOptions={setWalletModalOptions} />
      </WhiteBgContainer>

      <Team setWalletModalOptions={setWalletModalOptions} />
      <ConnectWallet setWalletModalOptions={setWalletModalOptions} />
      <Footer setWalletModalOptions={setWalletModalOptions} />

      {/* Modals */}
      <WalletModal
        walletModalOptions={walletModalOptions.open}
        setWalletModalOptions={setWalletModalOptions}
        URL={walletModalOptions.URL}
      />
    </Template>
  );
}

export default Home;
