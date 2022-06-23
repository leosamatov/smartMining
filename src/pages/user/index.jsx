import React, {useEffect, useState} from "react"
import web3 from "web3"
import Swal from 'sweetalert2'

// Components
import {SidebarTemplate} from "../../helpers/Template"
import {isMobile} from "../../helpers/calculations"
import {TopBarWallet} from "../../components/molecules/TopBarWallet"
import AccountStatus from "../../components/organisms/AccountStatus"
import Miners from "../../components/organisms/Miners"
import BuyMiners from "../../components/organisms/BuyMiners"
import ProfitabilityStatistics from "../../components/organisms/ProfitabilityStatistics"
import CoinSelectorModal from "../../components/molecules/CoinSelectorModal"

import {executeTransaction} from "../../helpers/send-transaction"

function UserCabinet() {

  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(prevState => !prevState)

  const [isCoinSelectorModalOpened, setIsCoinSelectorModalOpened] = useState(false)
  const [value, setValue] = useState(0)
  const [coin, setCoin] = useState(null)

  useEffect(() => {
    // Coin selected
    if (coin) {
      switch(coin["id"]) {
        case "ethereum":
          if(window.ethereum.chainId != web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet"
            })
          } else {
            executeTransaction(value)
          }
          break
        case "bsc":
          if(window.ethereum.chainId != web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain"
            })
          } else {
            executeTransaction(value)
          }
          break
        case "polygon":
          if(window.ethereum.chainId != web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon"
            })
          } else {
            executeTransaction(value)
          }
          break
        case "avalanche":
          if(window.ethereum.chainId != web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche"
            })
          } else {
            executeTransaction(value)
          }
          break
      }
    }
  }, [coin])

  return (
    <SidebarTemplate activeItem="/user">
      <div className="sm:w-full">
        <nav className="border-b-2 border-gray-200 py-8 sm:hidden lg:block">
          <ul className="flex pt-4 space-x-8 align-items-center">
            <li><a href="/faq">Questions and answers</a></li>
            <li><a href="/#team">Our Team</a></li>
            <li><a href="/contact">Contacts</a></li>
            {
              !isMobile()
                ? (
                  <li className="flex-grow text-right">
                    <TopBarWallet/>
                  </li>
                )
                : null
            }
          </ul>
        </nav>

        <div className="content py-10 space-y-10">

          {
            isMobile()
              ? <TopBarWallet/>
              : null
          }

          <AccountStatus toggle={toggleModal}/>

          <Miners/>

          {/* MODAL */}
          <BuyMiners
            show={showModal}
            toggle={toggleModal}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setValue={setValue}
          />
          <CoinSelectorModal
            isCoinSelectorModalOpened={isCoinSelectorModalOpened}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setCoin={setCoin}
          />

          <ProfitabilityStatistics/>

        </div>

      </div>
    </SidebarTemplate>
  )
}

export default UserCabinet


