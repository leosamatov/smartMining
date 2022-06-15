import React from "react"
import PropTypes from "prop-types"
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal"

const WALLETS_OPTIONS = [
  {
    id: "metamask",
    img: "/img/MetaMask_Fox.svg.png",
    name: "Metamask"
  },
  {
    id: "walletConnect",
    img: "/img/walletconnect-logo.png",
    name: "Wallet Connect"
  }
]

function WalletModal({isWalletModalOpened = false, setIsWalletModalOpened}) {

  const onWalletSelected = async (wallet_info) => {
    // there code of wallet selection
    switch(wallet_info["id"]) {
      case "metamask":
        await window.ethereum.request({method: "eth_requestAccounts"})
        break
      case "walletConnect":
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org",  qrcodeModal: QRCodeModal,
        })
        connector.connect()
        break
    }
  }

  return (
    <div id="wallet-modal" style={{display: isWalletModalOpened ? "flex" : "none"}}>
      <div className="wallet-modal-content">
        <div className="wallet-modal-content__header">
          <h5>Connect wallet</h5>
          <div onClick={() => setIsWalletModalOpened(false)}>&times;</div>
        </div>
        <div className="wallet-modal-content__body">
          {
            WALLETS_OPTIONS.map((wallet, key) =>
              <div className="wallet-item" key={key} onClick={() => onWalletSelected(wallet)}>
                <img src={wallet.img}/>
                <h5>{wallet.name}</h5>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

WalletModal.propTypes = {
  isWalletModalOpened: PropTypes.bool,
  setIsWalletModalOpened: PropTypes.func
}

export default WalletModal
