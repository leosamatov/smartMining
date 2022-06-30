import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

function Footer({ setIsWalletModalOpened }) {
  const { value } = useContext(UserContext);
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
              <a href="/" className="flex items-center">
                <img className="mr-3" src="img/logo.svg" alt="Smart Mining" />
                <div>
                  <img src="img/TRON.svg" alt="" />
                </div>
              </a>
            </div>
            <div className="opacity-60 text-sm">
              2022. Smart Mining <br /> All rights reserved
            </div>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">Smart Mining</div>
            <ul className="opacity-60 space-y-2">
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
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">About Us</div>
            <ul className="opacity-60 space-y-2">
              <li>
                <a href="/terms-cond">Terms and conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              {/* <li>
                <a href="/referral">Referral Program</a>
              </li> */}
              <li>
                <a href="/certificates/Certificate.pdf" target="_blank">
                  Certificate
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-full md:w-1/3 lg:w-1/5 space-y-3">
            <div className="font-bold text-lg">Knowledge Base</div>
            <ul className="opacity-60 space-y-2">
              <li>
                <a href="/cloud-mining">Cloud Mining</a>
              </li>
              <li>
                <a href="/crypto-mining">Cryptocurrency Mining Basics</a>
              </li>
            </ul>
          </div>
          <div className="w-1/5 text-right sm:hidden lg:block">
            <div className="inline-block">
              <NavLink
                to="/user"
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
