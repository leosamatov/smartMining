import React, {useEffect, useState} from "react"

// Helpers
import Template, {WhiteBgContainer} from "helpers/Template"
import Footer from "helpers/Footer"

// Components
import TopBar from "components/organisms/TopBar"
import Steps from "components/molecules/Steps"
import Mining from "components/molecules/Mining"
import Calculator from "components/organisms/Calculator"
import CloudMiningContracts from "components/organisms/CloudMiningContracts"
import Team from "components/molecules/Team"
import ConnectWallet from "components/molecules/ConnectWallet"
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal"
import WalletModal from "components/molecules/WalletModal"

function Home () {

  const [isWalletModalOpened, setIsWalletModalOpened] = useState(false)

  useEffect(() => {
    // const connector = new WalletConnect({
    //   bridge: "https://bridge.walletconnect.org",  qrcodeModal: QRCodeModal,
    // })
    // connector.connect()
  }, [])

  return (
    <Template>
      <WhiteBgContainer>
        <TopBar setIsWalletModalOpened={setIsWalletModalOpened}/>

        <Steps/>
        <Mining/>
        <Calculator/>
        <CloudMiningContracts/>
      </WhiteBgContainer>

      <Team/>
      <ConnectWallet/>
      <Footer/>

      {/* Modals */}
      <WalletModal isWalletModalOpened={isWalletModalOpened} setIsWalletModalOpened={setIsWalletModalOpened}/>

    </Template>
    
  )
}

export default Home
