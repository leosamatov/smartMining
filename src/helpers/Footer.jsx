import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

function Footer({ setWalletModalOptions, isHomePage = true }) {
  const { value } = useContext(UserContext);
  const { id } = useParams();
  const smoothScroll = (e) => {
    e.preventDefault();

    document
      .querySelector(e.target.dataset.href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="main-dark-bg sm:py-8 lg:py-12">
      <div className="container">
        <div className="sm:flex-wrap md:flex sm:space-y-4 md:space-y-0 text-white">
          <div className="flex-column justify-between w-1/5 sm:hidden lg:flex">
            <div>
              <NavLink to={id ? `/${id}` : `/`} className="flex items-center">
                <img className="mr-3" src="img/logo.svg" alt="Smart Mining" />
                <div>
                  <img src="img/TRON.svg" alt="" />
                </div>
              </NavLink>
            </div>
            <div className="opacity-60 text-sm">
              2022. Smart Mining <br /> All rights reserved
            </div>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">Smart Mining</div>
            <ul className="opacity-60 space-y-2">
              {isHomePage && (
                <>
                  <li>
                    <a onClick={smoothScroll} href="#team" data-href="#team">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={smoothScroll}
                      href="#calculator"
                      data-href="#calculator"
                    >
                      Calculator
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={smoothScroll}
                      href="#contracts"
                      data-href="#contracts"
                    >
                      Contracts
                    </a>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">About Us</div>
            <ul className="opacity-60 space-y-2">
              <li>
                <NavLink to="/terms-cond">Terms and conditions</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              {/* <li>
                <NavLink to="/referral">Referral Program</NavLink>
              </li> */}
              <li>
                <NavLink to="/certificates/Certificate.pdf">
                  Certificate
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">Knowledge Base</div>
            <ul className="opacity-60 space-y-2">
              <li>
                <NavLink to="/cloud-mining">Cloud Mining</NavLink>
              </li>
              <li>
                <NavLink to="/crypto-mining">
                  Cryptocurrency Mining Basics
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-1/5 text-right sm:hidden lg:block">
            <div className="inline-block">
              <NavLink
                to={id ? `/user/${id}` : `/user`}
                onClick={
                  !value.adress
                    ? (e) => {
                        e.preventDefault();
                        setWalletModalOptions({
                          open: true,
                          URL: id ? `/user/${id}` : `/user`,
                        });
                      }
                    : undefined
                }
                className="btn-border"
              >
                <span className="pl-3">Personal Area</span>
                <span className="bg-orange-500 h-10 inline-block p-2.5 rounded-xl w-10">
                  <img src="img/User.svg" alt="" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="text-white opacity-40 sm:pt-6 lg:pt-10 text-sm">
          <div className="lg:hidden text-sm">
            2022. Smart Mining <br /> All rights reserved
          </div>
          <div className="sm:w-full lg:w-4/5 sm:pt-6 lg:pt-0">
            {" "}
            Smart Mining involves financial risks and may not be appropriate for
            all people. The information presented here is for information and
            educational purposes only and should not be considered an offer or
            solicitation to invest to Smart Mining or elsewhere. Any investment
            decisions that you make are solely your responsibility. <br />
            Smart Mining does not provide service for USA residents.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
