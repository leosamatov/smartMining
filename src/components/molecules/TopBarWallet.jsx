import React, {useEffect, useState} from "react"
import * as eth from "ethers"

const networkRPC = {
  "0x1": "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
  "0x38": "https://bsc-dataseed1.binance.org",
  "0x89": "https://polygon-rpc.com/",
  "0xa86a": "https://api.avax.network/ext/bc/C/rpc"
}

const options = [
  {
    icon: "img/Wallet.png",
    number: 123123123,
    wallet: "0xc8...07"
  //},
  //{
  //  icon: "img/network_icon.png",
  //  number: 46464646,
  //  wallet: "0x1b...57"
  //},
  //{
  //  icon: "img/network_icon.png",
  //  number: 9281245,
  //  wallet: "0xyyt...1j"
  }
]

export const TopBarWallet = () => {

  const [value, setValue] = useState(options[0])
  const [show, setShow] = useState(false)

  const toggleDropdown = () => setShow(prevState => !prevState)
  const selectOption = option => {
    setValue(option)
    toggleDropdown()
  }

  useEffect(() => {
    const provider = new eth.providers.JsonRpcProvider(networkRPC[ethereum.chainId])
    ethereum
    .request({method: "eth_requestAccounts"})
    .then(async (accounts) => {
      let address = document.getElementById("address")
      address.innerText = accounts[0]
       document.getElementById("balance")
      balance.innerText = await provider.getBalance(accounts[0])
    })
  }, [])

  return (
    <div className="btn-def" id="custom_top_bar_wallet">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <img src={value.icon} alt=""/>
        </button>

        <div className={`dropdown-content ${show ? "show" : ""}`}>
          {
            options.map((option, key) =>
              <img src={option.icon} alt="" onClick={() => selectOption(option)} key={key}/>
            )
          }
        </div>
      </div>

      <div>
        <span id="balance"></span>
        <span className="divider">|</span>
        <img src="img/Wallet.png" alt=""/>
        <span id="address"></span>
      </div>
    </div>
  )
}
