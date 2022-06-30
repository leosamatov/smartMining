import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

function ConnectWallet({ setIsWalletModalOpened }) {
  const { value } = useContext(UserContext);
  return (
    <div className="py-28 ">
      <div className="container">
        <div className="sm:flex-wrap lg:flex sm:space-y-20 lg:space-y-0">
          <div className="sm:w-full lg:w-1/2 sm:space-y-4 md:space-y-0 lg:space-y-14 sm:flex-wrap md:flex lg:flex-wrap">
            <div className="sm:flex md:flex-wrap lg:flex sm:space-y-4 md:space-y-0 lg:space-x-8 lg:w-full sm:w-full md:w-1/3">
              <div>
                <img src="img/Wallet.png" />
              </div>
              <div className="sm:space-y-2 lg:space-y-5">
                <div className="text-3xl title-font">$ 190 417 914</div>
                <div className="text-gray-700">Funds paid to our users</div>
              </div>
            </div>
            <div className="sm:flex md:flex-wrap lg:flex sm:space-y-4 md:space-y-0 lg:space-x-8 lg:w-full sm:w-full md:w-1/3">
              <div>
                <img src="img/Users.png" />
              </div>
              <div className="sm:space-y-2 lg:space-y-5">
                <div className="text-3xl title-font">1 086 Clients</div>
                <div className="text-gray-700">
                  New clients for the last 7 days
                </div>
              </div>
            </div>
            <div className="sm:flex md:flex-wrap lg:flex sm:space-y-4 md:space-y-0 lg:space-x-8 lg:w-full sm:w-full md:w-1/3">
              <div>
                <img src="img/Support.png" />
              </div>
              <div className="sm:space-y-2 lg:space-y-5">
                <div className="text-3xl title-font">3 minutes</div>
                <div className="text-gray-700">
                  Average technical support response time
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full lg:w-1/2 lg:pl-28">
            <div className="relative main-dark-bg rounded-xl">
              <div className="absolute right-0 top-0 overflow-hidden rounded-xl">
                <div className="w-60 sm:h-60 lg:h-92 blic-radial"></div>
              </div>
              <div className="sm:py-10 md:py-14 sm:px-5 md:px-10 lg:px-20 relative text-white sm:space-y-5 md:space-y-10 lg:space-y-14">
                <div className="lg:max-w-min sm:max-w-2/3 title-font md:text-4xl sm:text-3xl">
                  {" "}
                  Start earning now
                </div>
                <form
                  method="get"
                  action="/register"
                  className="sm:space-y-4 md:space-y-7"
                >
                  <div className="sm:flex-wrap md:flex lg:flex-wrap sm:space-y-4 md:space-y-0 lg:space-y-7 md:space-x-4 lg:space-x-0">
                    <NavLink
                      onClick={
                        !value.adress
                          ? (e) => {
                              e.preventDefault();
                              setIsWalletModalOpened({
                                open: true,
                                URL: "/user",
                              });
                            }
                          : undefined
                      }
                      to="/user"
                      type=""
                      className="btn-orange sm:w-full md:w-2/5 lg:w-full "
                    >
                      <span className="">Start earning</span>
                      <img className="inline-block" src="img/go.svg" alt="" />
                    </NavLink>
                  </div>
                </form>
                <div className="absolute -right-7 sm:-top-14 lg:top-0">
                  <img src="img/fly-btc.png" className="w-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
