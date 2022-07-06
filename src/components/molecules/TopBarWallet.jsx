import React, { useEffect, useState } from "react";
import * as eth from "ethers";
import BigNumber from "bignumber.js"

const networkRPC = {
  "0x1": "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
  "0x38": "https://bsc-dataseed1.binance.org",
  "0x89": "https://polygon-rpc.com/",
  "0xa86a": "https://api.avax.network/ext/bc/C/rpc",
  "0x61": "https://data-seed-prebsc-1-s1.binance.org:8545/"
};

const options = [
  {
    icon: "img/Wallet.png",
    number: 123123123,
    wallet: "0xc8...07"
  },
];

export const TopBarWallet = ({ accounts }) => {
  const [value, setValue] = useState(options[0]);
  const [show, setShow] = useState(false);

  const [showMenu, setShowMenu] = useState(true);

  const toggleDropdown = () => setShow((prevState) => !prevState);
  const selectOption = (option) => {
    setValue(option);
    toggleDropdown();
  };

  useEffect(() => {
    //async function fetchData() {
    //  const provider = new eth.providers.JsonRpcProvider(
    //    networkRPC[ethereum.chainId]
    //  );
    //  let balance = document.getElementById("balance");
    //  let selectedAccountBalance = parseFloat((parseFloat(await provider.getBalance(accounts)) / 10 ** 18).toFixed(5))
    //  if (selectedAccountBalance == 0) {selectedAccountBalance = 0}
    //  balance.innerText = selectedAccountBalance;
    //}
    //fetchData(); // TODO add fetchData function for wallet connect provider
  }, []);

  return (
    <div className="btn-def" id="custom_top_bar_wallet">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <img src={value.icon} alt="" />
        </button>

        <div className={`dropdown-content ${show ? "show" : ""}`}>
          {options.map((option, key) => (
            <img
              src={option.icon}
              alt=""
              onClick={() => selectOption(option)}
              key={key}
            />
          ))}
        </div>
      </div>

      <div>
        <span id="balance"></span>
        <span className="divider">|</span>
        <img src="img/Wallet.png" alt="" />
        <span id="address">{accounts}</span>
      </div>
    </div>
  );
};
