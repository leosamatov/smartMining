import React from "react";
import PropTypes from "prop-types";
import WalletModal from "./WalletModal";
import web3 from "web3";
import BtcQrModal from "../../pages/user/BtcQrModal";

const COIN_SELECTOR_OPTIONS = [
  {
    id: "ethereum",
    img: "/img/eth.png",
    name: "Ethereum",
    network: 1
  },
  {
    id: "bsc",
    img: "/img/bsc.png",
    name: "BNB",
    network: 56
  },
  {
    id: "polygon",
    img: "/img/polygon.png",
    name: "Matic",
    network: 137
  },
  {
    id: "avalanche",
    img: "/img/avalanche.png",
    name: "Avalanche",
    network: 43114
  },
  {
    id: "usdt_eth",
    img: "/img/usdt.png",
    name: "USDT (ERC20)",
    network: 1
  },
  {
    id: "usdt_bsc",
    img: "/img/usdt.png",
    name: "USDT (BEP20)",
    network: 56
  },
  {
    id: "usdt_polygon",
    img: "/img/usdt.png",
    name: "USDT (Polygon)",
    network: 137
  },
  {
    id: "usdt_avax",
    img: "/img/usdt.png",
    name: "USDT (Avalanche)",
    network: 43114
  },
  {
    id: "busd",
    img: "/img/busd.png",
    name: "BUSD (BEP20)",
    network: 56
  },
  {
    id: "usdc_bsc",
    img: "/img/usdc.png",
    name: "USDC (BEP20)",
    network: 56
  },
  {
    id: "usdc_polygon",
    img: "/img/usdc.png",
    name: "USDC (Polygon)",
    network: 137
  },
  {
    id: "dai_eth",
    img: "/img/dai.png",
    name: "DAI (ERC20)",
    network: 1
  },
  {
    id: "dai_bsc",
    img: "/img/dai.png",
    name: "DAI (BEP20)",
    network: 56
  },
  {
    id: "dai_polygon",
    img: "/img/dai.png",
    name: "DAI (Polygon)",
    network: 137
  },
  {
    id: "dai_avax",
    img: "/img/dai.png",
    name: "DAI (Avalanche)",
    network: 43114
  },
  {
    id: "btc",
    img: "/img/opengraph.png",
    name: "Bitcoin",
    network: 0
  },
];
function CoinSelectorModal({
  isCoinSelectorModalOpened = false,
  setIsCoinSelectorModalOpened,
  BitcoinModalOptions,
  setCoin,
}) {
  const onCoinSelected = async (coin_info) => setCoin(coin_info);
  return (
    <div
      id="wallet-modal"
      style={{ display: isCoinSelectorModalOpened ? "flex" : "none" }}
    >
      <div>
        <BtcQrModal BitcoinModalOptions={BitcoinModalOptions} />
      </div>
      <div className="wallet-modal-content">
        <div className="wallet-modal-content__header">
          <h5>Select coin</h5>
          <div onClick={() => setIsCoinSelectorModalOpened(false)}>&times;</div>
        </div>
        <div className="wallet-modal-content__body">
          {COIN_SELECTOR_OPTIONS.map((wallet, key) => (
            <div
              className="wallet-item"
              key={key}
              onClick={() => onCoinSelected(wallet)}
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
  isCoinSelectorModalOpened: PropTypes.bool,
  setIsCoinSelectorModalOpened: PropTypes.func,
};

export default CoinSelectorModal;