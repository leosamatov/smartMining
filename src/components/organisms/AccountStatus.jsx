import React from "react"
import PropTypes from "prop-types"

function AccountStatus({toggle}) {

  return (
    <div className="sm:flex-wrap lg:flex-nowrap flex sm:space-y-4 lg:space-y-0 lg:space-x-2 text-white">
      <div className="sm:w-full lg:w-2/3 main-dark-bg rounded-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 left-0 top-0 blick-b-r opacity-80">
          <img src="img/my_balance.svg" className="right-0 bottom-0 absolute"/>
        </div>
        <div className="lg:flex relative">
          <div className="flex sm:w-full lg:w-1/2 relative">
            <div className="w-1/2 p-3 space-y-7" style={{height: "fit-content"}}>
              <div onClick={() => window.location.href= "/deposit"} className="flex space-x-3">
                <div className="icon-bg">
                  <img src="img/Wallet.svg" alt=""/>
                </div>
                <div className="text-sm font-bold pt-3">Balance</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">$ 0.00</div>
              </div>
              <div className="flex space-x-2">
                <button className="btn-orange leading-6 px-3">Withdraw</button>
                <button className="btn-border leading-6 px-3" onClick={toggle}>Buy&nbsp;miners</button>
              </div>
            </div>
            <div className="w-1/2 p-3 space-y-7" style={{height: "fit-content"}}>
              <div className="flex space-x-3">
                <div className="icon-bg">
                  <img src="img/Miner_h.svg" alt="" style={{width: "auto !important"}}/>
                </div>
                <div className="text-sm font-bold">Mining Balance</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">$ 0</div>
              </div>
            </div>
          </div>
          <div className="flex sm:w-full lg:w-1/2 relative">
            <div className="w-1/2 p-3 space-y-7" style={{height: "fit-content"}}>
              <div className="flex space-x-3">
                <div className="icon-bg" >
                  <img src="img/Dividends.svg" alt=""/>
                </div>
                <div className="text-sm font-bold">Trading Balance</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">$ 0.00</div>
              </div>
            </div>
            <div className="w-1/2 p-3 space-y-7" style={{height: "fit-content"}}>
              <div className="flex space-x-3">
                <div className="icon-bg">
                  <img src="img/Wallet.svg" alt=""/>
                </div>
                <div className="text-sm font-bold pt-3">Total</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">$ 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:w-full lg:w-1/3 space-x-4 lg:space-x-2 ">
        <div className="w-1/2 main-dark-bg rounded-2xl h-full relative overflow-hidden">
          <div className="absolute bottom-0 right-0 left-0 top-0 blick-b-r opacity-80">
            <img src="img/my_miners.svg" className="right-0 bottom-0 absolute"/>
          </div>
          <div className="relative">
            <div className="p-3 space-y-7">
              <div className="flex space-x-3">
                <div className="icon-bg">
                  <img src="img/Miner_h.svg" alt=""/>
                </div>
                <div className="text-sm font-bold pt-3">My miners</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">0</div>
                <div>pcs.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 main-dark-bg rounded-2xl h-full relative overflow-hidden">
          <div className="absolute bottom-0 right-0 left-0 top-0 blick-b-r opacity-80">
            <img src="img/my_power.svg" className="right-0 bottom-0 absolute"/>
          </div>
          <div className="relative">
            <div className="p-3 space-y-7">
              <div className="flex space-x-3">
                <div className="icon-bg">
                  <img src="img/Power.svg" alt=""/>
                </div>
                <div className="text-sm font-bold pt-3">Total rate</div>
              </div>
              <div className="flex space-x-3">
                <div className="text-2xl font-bold">0</div>
                <div>GH/s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AccountStatus.propTypes = {
  toggle: PropTypes.func
}

export default AccountStatus
