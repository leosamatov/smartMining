import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

function TopBar({
  showJumbotron = true,
  isLight = false,
  isTransparent = false,
  setWalletModalOptions,
}) {
  const [showMenu, setShowMenu] = useState(true);
  const { value, setValue } = useContext(UserContext);
  const onMenuToggle = (e) => {
    e.preventDefault();
    setShowMenu((prevState) => !prevState);
  };
  const smoothScroll = (e) => {
    e.preventDefault();

    document
      .querySelector(e.target.dataset.href)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    $("#main_menu").toggle(showMenu);
  }, [showMenu]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setValue({
            adress: accounts[0],
          });
        });
    }
  }, []);

  const connectWallet = async (e) => {
    e.preventDefault();
    setWalletModalOptions({
      open: true,
      URL: null,
    });
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setValue({
          adress: accounts[0],
        });
      });
  };

  const startEarning = async (e) => {
    e.preventDefault();
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.open("user", "_self");
  };
  const DesktopInfo = () => (
    <div className="flex space-x-4 items-center">
      <div className="auth mob-hide">
        <a
          href=""
          onClick={connectWallet}
          className={`btn-border ${
            isLight ? "bg-gray-100 border-gray-400 hover:text-gray-900" : ""
          }`}
        >
          {!value.adress ? (
            <span className="pl-3">Connect wallet</span>
          ) : (
            <span className="pl-3">{value.adress}</span>
          )}
          <span className="bg-orange-500 h-10 inline-block p-2.5 rounded-xl w-10">
            <img src="img/User.svg" alt="" />
          </span>
        </a>
      </div>
      <div onClick={onMenuToggle}>
        <a
          href=""
          style={{ display: !showMenu ? "block" : "none" }}
          className="open-menu btn-orange h-12 px-3 py-2.5 lg:hidden"
        >
          <img src="img/Menu.svg" />
        </a>
        <a
          href=""
          style={{ display: showMenu ? "block" : "none" }}
          className="open-menu btn-orange h-12 px-3 py-2.5 lg:hidden"
        >
          <img src="img/Close.svg" />
        </a>
      </div>
    </div>
  );

  const MobileInfo = () => (
    <div className="md:hidden inline-block mt-20">
      <div className="auth">
        <a
          href=""
          onClick={connectWallet}
          className={`btn-border ${
            isLight ? "bg-gray-100 border-gray-400 hover:text-gray-900" : ""
          }`}
        >
          {!value.adress ? (
            <span className="pl-3">Connect wallet</span>
          ) : (
            <span className="pl-3">{value.adress}</span>
          )}
          <span className="bg-orange-500 h-10 inline-block p-2.5 rounded-xl w-10">
            <img src="img/User.svg" id="mob" alt="" />
          </span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`top ${
          isLight ? "main text-gray-700" : "main-dark-bg text-white"
        }`}
        style={isTransparent ? { background: "transparent" } : {}}
      >
        {!isLight && (
          <img src="img/Ellipse-header.svg" className="absolute top-0 left-0" />
        )}
        <div className="relative">
          <div className="border-b border-white opacity-20 w-full" />
          <div className="container mx-auto">
            <div className="header h-24 flex space-x-4 items-center relative">
              <div>
                <NavLink to="/" className="flex items-center">
                  <img className="mr-3" src="img/logo.svg" alt="SMART" />
                  <div>
                    <img
                      src={isLight ? "img/TRON_b.svg" : "img/TRON.svg"}
                      alt=""
                    />
                  </div>
                </NavLink>
              </div>
              <div className="flex-grow text-center">
                <nav
                  id="main_menu"
                  className="sm:p-8 lg:p-0 z-50 lg:inline-block sm:absolute lg:relative sm:top-24 lg:top-auto sm:w-2/3 md:w-1/3 lg:w-auto right-0 sm:text-left lg:text-center sm:bg-gray-800 lg:bg-transparent"
                >
                  <ul className="sm:flex-grow lg:flex sm:space-y-5 lg:space-y-0 lg:space-x-10 text-lg">
                    <li>
                      <a
                        href="#mining"
                        data-href="#mining"
                        onClick={smoothScroll}
                      >
                        Mining
                      </a>
                    </li>
                    <li>
                      <a
                        href="#calculator"
                        data-href="#calculator"
                        onClick={smoothScroll}
                      >
                        Calculator
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contracts"
                        data-href="#contracts"
                        onClick={smoothScroll}
                      >
                        Сontracts
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/faq">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <MobileInfo />
                </nav>
              </div>
              <DesktopInfo />
            </div>
          </div>
          <div class="border-b border-white opacity-20 w-full"></div>
          {showJumbotron && (
            <div className="container relative">
              <div className="slider flex-wrap lg:flex pt-10 lg:pt-24 pb-48 sm:-mb-48 lg:mb-0">
                <div className="w-full sm:text-center lg:text-left lg:w-1/3 sm:space-y-3 md:space-y-5 space-y-7">
                  <div className="sm:text-5xl md:text-7xl lg:text-8xl title-font">
                    SMART CLOUD MINING PLATFORM
                  </div>
                  <div className="md:px-20 lg:px-0 text-lg">
                    The largest mining company in Australia, bringing its
                    customers from 168% per annum. You rent miners - we choose
                    the most profitable mining areas!
                  </div>
                  <div className="pt-4">
                    <NavLink
                      to="/user"
                      className="btn-orange"
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();

                              setWalletModalOptions({
                                open: true,
                                URL: "/user",
                              });
                            }
                          : undefined
                      }
                    >
                      <span className="">Start earning</span>
                      <img className="inline-block" src="img/go.svg" alt="" />
                    </NavLink>
                  </div>
                </div>
                <div className="h-100 lg:-mt-20 sm:max-h-96 lg:max-h-1 lg:text-right sm:text-center w-full lg:w-2/3 lg:pl-40 lg:pr-0 sm:px-20">
                  <lottie-player
                    className="inline-block w-full h-auto"
                    src="/img/animation/lf30_9p8jufyr.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
              <img
                src="img/Coins.png"
                className="-bottom-20 -left-48 absolute"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

TopBar.propTypes = {
  showJumbotron: PropTypes.bool,
  isLight: PropTypes.bool,
  isTransparent: PropTypes.bool,
  setWalletModalOptions: PropTypes.func,
};

export default TopBar;
