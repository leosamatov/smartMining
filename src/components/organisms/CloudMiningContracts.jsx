import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

function CloudMiningContracts({ setIsWalletModalOpened }) {
  const slider = useRef(null);
  const [active, setActive] = useState(0);

  const moveLeft = (e) => {
    e.preventDefault();
    slider.current.scrollLeft =
      slider.current.scrollLeft - slider.current.scrollWidth / 4;
  };
  const moveRight = (e) => {
    e.preventDefault();
    slider.current.scrollLeft =
      slider.current.scrollLeft + slider.current.scrollWidth / 4;
  };

  const onSliderScroll = (e) =>
    setActive(Math.round(e.target.scrollLeft / (e.target.scrollWidth / 4)));
  const { value } = useContext(UserContext);
  useEffect(() => {
    // Fix custom html elements classes
    $('#contracts lottie-player[src="/img/animation/plan_1.json"]').addClass(
      "lg:h-16 sm:h-16"
    );
    $('#contracts lottie-player[src="/img/animation/plan_2.json"]').addClass(
      "sm:h-52 lg:h-auto"
    );
    $('#contracts lottie-player[src="/img/animation/plan_3.json"]').addClass(
      "sm:h-52 lg:h-auto"
    );
    $('#contracts lottie-player[src="/img/animation/plan_4.json"]').addClass(
      "sm:h-52 lg:h-auto"
    );
  }, []);

  return (
    <div className="sm:py-14 md:py-28 " id="contracts">
      <div className="container md:space-y-6 sm:space-y-3">
        <div className="title-font sm:text-3xl md:text-6xl relative z-20">
          {" "}
          SMART CLOUD MINING СONTRACTS{" "}
        </div>
        <div className="sm:hidden md:flex bg-white rounded-xl lg:shadow-xl lg:p-6 pr-0">
          <div className="sm:hidden lg:block w-1/4">
            <div className="h-40">
              <div className="title-font text-3xl flex space-x-3">
                <span className="max-w-min">Choose your contract</span>
                <img src="img/choose.svg" alt="" />
              </div>
            </div>
            <div>
              <ul className="space-y-6 py-6">
                <li>Mining currency</li>
                <li>Rate</li>
                <li>Investment</li>
                <li>Availability</li>
                <li>Profitability</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-white sm:w-full lg:w-3/4 relative">
            <div className="absolute sm:-top-72 lg:-top-1/2 left-36 z-0">
              <img
                src="img/Contracts.svg"
                className="max-w-max sm:h-96 lg:h-auto"
                width="735px"
                height="589px"
              />
            </div>
            <div className="relative lg:flex-nowrap flex sm:flex-wrap lg:space-x-5 -my-8 lg:space-y-0 sm:space-y-5">
              <div className="flex md:w-full lg:w-1/2 space-x-5">
                <div className="miner-contract py-6 px-3 w-1/2 rounded-xl space-y-6">
                  <div className="h-40">
                    <div className="max-w-min mx-auto text-2xl title-font">
                      Small income
                    </div>
                    <div className="flex items-center  h-28 ">
                      <lottie-player
                        className=" h-16 "
                        src="/img/animation/plan_1.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block miner-type pl-2 pr-3">
                      <img className="inline-block" src="img/BTC.svg" />
                      <span>All</span>
                    </div>
                    <div>4 717 GH/s</div>
                    <div>From 200$</div>
                    <div>Yes</div>
                    <div className="text-lg capitalize">From 167.9%</div>
                  </div>
                  <div>
                    <NavLink
                      to="/user-buy"
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();

                              setIsWalletModalOpened({
                                open: true,
                                URL: "/user-buy",
                              });
                            }
                          : undefined
                      }
                      className="btn-border w-full text-center block leading-9"
                    >
                      Choose
                    </NavLink>
                  </div>
                </div>
                <div className="miner-contract py-6 px-3 w-1/2 rounded-xl space-y-6">
                  <div className="h-40">
                    <div className="max-w-min mx-auto text-2xl title-font">
                      Average income
                    </div>
                    <div className="flex items-center  h-28 ">
                      <lottie-player
                        className=" h-auto "
                        src="/img/animation/plan_2.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block miner-type pl-2 pr-3">
                      <img className="inline-block" src="img/BTC.svg" />
                      <span>All</span>
                    </div>
                    <div>94 340 GH/s</div>
                    <div>From 1 000$</div>
                    <div>Yes</div>
                    <div className="text-lg capitalize">From 186.15%</div>
                  </div>
                  <div>
                    <NavLink
                      to="/user-buy"
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();
                              if (!value.adress) {
                                setIsWalletModalOpened({
                                  open: true,
                                  URL: "/user-buy",
                                });
                              }
                            }
                          : undefined
                      }
                      className="btn-border w-full text-center block leading-9"
                    >
                      Choose
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex md:w-full lg:w-1/2 space-x-5">
                <div className="miner-contract py-6 px-3 w-1/2 rounded-xl space-y-6">
                  <div className="h-40">
                    <div className="max-w-min mx-auto text-2xl title-font">
                      Large income
                    </div>
                    <div className="flex items-center  h-28 ">
                      <lottie-player
                        className=" h-auto "
                        src="/img/animation/plan_3.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block miner-type pl-2 pr-3">
                      <img className="inline-block" src="img/BTC.svg" />
                      <span>All</span>
                    </div>
                    <div>471 698 GH/s</div>
                    <div>From 5 000$</div>
                    <div>Yes</div>
                    <div className="text-lg capitalize">From 204.4%</div>
                  </div>
                  <div>
                    <NavLink
                      to="/user-buy"
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();
                              if (!value.adress) {
                                setIsWalletModalOpened({
                                  open: true,
                                  URL: "/user-buy",
                                });
                              }
                            }
                          : undefined
                      }
                      className="btn-border w-full text-center block leading-9"
                    >
                      Choose
                    </NavLink>
                  </div>
                </div>
                <div className="miner-contract py-6 px-3 w-1/2 rounded-xl space-y-6">
                  <div className="h-40">
                    <div className="max-w-min mx-auto text-2xl title-font">
                      Individual income
                    </div>
                    <div className="flex items-center  h-16 py-16 ">
                      <lottie-player
                        className=" h-auto "
                        src="/img/animation/plan_4.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block miner-type pl-2 pr-3">
                      <img className="inline-block" src="img/BTC.svg" />
                      <span>All</span>
                    </div>
                    <div>1 886 793 GH/s</div>
                    <div>From 20 000$</div>
                    <div>Yes</div>
                    <div className="text-lg capitalize">From 235%</div>
                  </div>
                  <div>
                    <NavLink
                      to="/user-buy"
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();
                              if (!value.adress) {
                                setIsWalletModalOpened({
                                  open: true,
                                  URL: "/user-buy",
                                });
                              }
                            }
                          : undefined
                      }
                      className="btn-border w-full text-center block leading-9"
                    >
                      Choose
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            ref={slider}
            onScroll={onSliderScroll}
            className="snap overflow-auto relative flex-no-wrap flex transition-all space-x-5 text-center text-white"
          >
            <div className="miner-contract py-6 px-3 w-full flex-shrink-0 rounded-xl space-y-6">
              <div className="h-40">
                <div className="max-w-min mx-auto text-2xl title-font">
                  Small income
                </div>
                <div className="flex items-center  h-28 ">
                  <lottie-player
                    src="/img/animation/plan_1.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block miner-type pl-2 pr-3">
                  <img className="inline-block" src="img/BTC.svg" />
                  <span>global.bitcoin</span>
                </div>
                <div>4 717 GH/s</div>
                <div>From 10 000$</div>
                <div>Yes</div>
                <div className="text-lg capitalize">From 167.9%</div>
              </div>
              <div>
                <NavLink
                  to="/user-buy"
                  onClick={
                    !value.adress
                      ? (e) => {
                          e.preventDefault();
                          if (!value.adress) {
                            setIsWalletModalOpened({
                              open: true,
                              URL: "/user-buy",
                            });
                          }
                        }
                      : undefined
                  }
                  className="btn-border w-full text-center block leading-9"
                >
                  global.choose
                </NavLink>
              </div>
            </div>
            <div className="miner-contract py-6 px-3 w-full flex-shrink-0 rounded-xl space-y-6">
              <div className="h-40">
                <div className="max-w-min mx-auto text-2xl title-font">
                  Average income
                </div>
                <div className="flex items-center  h-28 ">
                  <lottie-player
                    src="/img/animation/plan_2.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block miner-type pl-2 pr-3">
                  <img className="inline-block" src="img/BTC.svg" />
                  <span>global.bitcoin</span>
                </div>
                <div>94 340 GH/s</div>
                <div>From 10 000$</div>
                <div>Yes</div>
                <div className="text-lg capitalize">From 186.15%</div>
              </div>
              <div>
                <NavLink
                  to="/user-buy"
                  onClick={
                    !value.adress
                      ? (e) => {
                          e.preventDefault();
                          if (!value.adress) {
                            setIsWalletModalOpened({
                              open: true,
                              URL: "/user-buy",
                            });
                          }
                        }
                      : undefined
                  }
                  className="btn-border w-full text-center block leading-9"
                >
                  global.choose
                </NavLink>
              </div>
            </div>
            <div className="miner-contract py-6 px-3 w-full flex-shrink-0 rounded-xl space-y-6">
              <div className="h-40">
                <div className="max-w-min mx-auto text-2xl title-font">
                  Large income
                </div>
                <div className="flex items-center  h-28 ">
                  <lottie-player
                    src="/img/animation/plan_3.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block miner-type pl-2 pr-3">
                  <img className="inline-block" src="img/BTC.svg" />
                  <span>global.bitcoin</span>
                </div>
                <div>471 698 GH/s</div>
                <div>From 5 000$</div>
                <div>Yes</div>
                <div className="text-lg capitalize">From 204.4%</div>
              </div>
              <div>
                <NavLink
                  to="/user-buy"
                  onClick={
                    !value.adress
                      ? (e) => {
                          e.preventDefault();
                          if (!value.adress) {
                            setIsWalletModalOpened({
                              open: true,
                              URL: "/user-buy",
                            });
                          }
                        }
                      : undefined
                  }
                  className="btn-border w-full text-center block leading-9"
                >
                  global.choose
                </NavLink>
              </div>
            </div>
            <div className="miner-contract py-6 px-3 w-full flex-shrink-0 rounded-xl space-y-6">
              <div className="h-40">
                <div className="max-w-min mx-auto text-2xl title-font">
                  Individual income
                </div>
                <div className="flex items-center  h-16 py-16 ">
                  <lottie-player
                    src="/img/animation/plan_4.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block miner-type pl-2 pr-3">
                  <img className="inline-block" src="img/BTC.svg" />
                  <span>global.bitcoin</span>
                </div>
                <div>1 886 793 GH/s</div>
                <div>From 20 000$</div>
                <div>Yes</div>
                <div className="text-lg capitalize">
                  global.contractual_terms
                </div>
              </div>
              <div>
                <NavLink
                  to="/user-buy"
                  onClick={
                    !value.adress
                      ? (e) => {
                          e.preventDefault();
                          if (!value.adress) {
                            setIsWalletModalOpened({
                              open: true,
                              URL: "/user-buy",
                            });
                          }
                        }
                      : undefined
                  }
                  className="btn-border w-full text-center block leading-9"
                >
                  global.choose
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex pt-3 items-center">
            <div className="flex-grow flex space-x-1 items-center">
              {new Array(4).fill(0).map((el, index) => (
                <span
                  key={index}
                  className={`bg-gray-300 w-2 h-2 block mx-1 shadow rounded-full ${
                    index === active ? "bg-orange-500 w-4" : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <a href="#" onClick={moveLeft}>
                <img src="img/Left.svg" alt="" />
              </a>
              <a href="#" onClick={moveRight}>
                <img
                  src="img/Left.svg"
                  className="transform rotate-180"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudMiningContracts;
