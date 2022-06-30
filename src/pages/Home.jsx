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

function Home() {
  const [isWalletModalOpened, setIsWalletModalOpened] = useState({
    open: false,
    URL: null,
  });
  // const cont = useContext(UserContext);
  // console.log("cont", cont);
  useEffect(() => {
    // const connector = new WalletConnect({
    //   bridge: "https://bridge.walletconnect.org",  qrcodeModal: QRCodeModal,
    // })
    // connector.connect()
  }, []);

  return (
    <Template>
      <WhiteBgContainer>
        <TopBar setIsWalletModalOpened={setIsWalletModalOpened} />

        <Steps setIsWalletModalOpened={setIsWalletModalOpened} />
        <Mining setIsWalletModalOpened={setIsWalletModalOpened} />
        <Calculator setIsWalletModalOpened={setIsWalletModalOpened} />
        <CloudMiningContracts setIsWalletModalOpened={setIsWalletModalOpened} />
      </WhiteBgContainer>

      <Team setIsWalletModalOpened={setIsWalletModalOpened} />
      <ConnectWallet setIsWalletModalOpened={setIsWalletModalOpened} />
      <Footer setIsWalletModalOpened={setIsWalletModalOpened} />

      {/* Modals */}
      <WalletModal
        isWalletModalOpened={isWalletModalOpened.open}
        setIsWalletModalOpened={setIsWalletModalOpened}
        URL={isWalletModalOpened.URL}
      />
    </Template>
  );
}

export default Home;
