import React from "react"
import PropTypes from "prop-types"
import WalletModal from "./WalletModal"
import web3 from "web3"

const COIN_SELECTOR_OPTIONS = [
  {
    id: "ethereum",
    img: "/img/eth.png",
    name: "Ethereum"
  },
  {
    id: "bsc",
    img: "/img/bsc.png",
    name: "Binance Smart Chain"
  },
  {
    id: "polygon",
    img: "/img/polygon.png",
    name: "Polygon"
  },
  {
    id: "avalanche",
    img: "/img/avalanche.png",
    name: "Avalanche"
  }
]

function CoinSelectorModal({
  isCoinSelectorModalOpened = false,
  setIsCoinSelectorModalOpened,
  setCoin
}) {

  const onCoinSelected = async (coin_info) => setCoin(coin_info)

  return (
    <div id="wallet-modal" style={{display: isCoinSelectorModalOpened ? "flex" : "none"}}>
      <div className="wallet-modal-content">
        <div className="wallet-modal-content__header">
          <h5>Select coin</h5>
          <div onClick={() => setIsCoinSelectorModalOpened(false)}>&times;</div>
        </div>
        <div className="wallet-modal-content__body">
          {
            COIN_SELECTOR_OPTIONS.map((wallet, key) =>
              <div className="wallet-item" key={key} onClick={() => onCoinSelected(wallet)}>
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
  isCoinSelectorModalOpened: PropTypes.bool,
  setIsCoinSelectorModalOpened: PropTypes.func
}

export default CoinSelectorModal
