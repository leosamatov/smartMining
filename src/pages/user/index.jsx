import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Web3 from "web3";
import Swal from "sweetalert2";
import Binance from "binance-api-node";
import BigNumber from "bignumber.js";

// Components
import { SidebarTemplate } from "../../helpers/Template";
import { isMobile } from "../../helpers/calculations";
import {
  fetchData,
  TopBarWallet,
} from "../../components/molecules/TopBarWallet";
import AccountStatus from "../../components/organisms/AccountStatus";
import Miners from "../../components/organisms/Miners";
import BuyMiners from "../../components/organisms/BuyMiners";
import ProfitabilityStatistics from "../../components/organisms/ProfitabilityStatistics";
import CoinSelectorModal from "../../components/molecules/CoinSelectorModal";
import { UserContext } from "../../UserContext";

import { sendNativeCurrency, sendToken } from "../../helpers/send-transaction";
import { pixelPageView } from "../../helpers/pixel";

//Btc, eth, bnb, matic, AVAX,
//usdt(erc-20, matic, bep-20, avax),
//busd(bep-20),
//usdc(matic, bep-20 ),
//dai( bep-20, avax, matic)

function UserCabinet({ buyMiners, setWalletModalOptions }) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(buyMiners);
  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal((prevState) => !prevState);
  };
  const { value: accountData, setValue: setAccountData } =
    useContext(UserContext);

  const connectMessageEl = (
    <h3>
      Please connect to <NavLink to={id ? `/${id}` : `/`}>Your Wallet</NavLink>.
    </h3>
  );
  const installMessageEl = (
    <h3>
      Please install <a href="https://metamask.io/download/">MetaMask</a>
    </h3>
  );

  const [isCoinSelectorModalOpened, setIsCoinSelectorModalOpened] =
    useState(false);
  const [value, setValue] = useState(0);
  const [coin, setCoin] = useState(null);
  const ethereum = window.ethereum;

  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [accounts, setAccounts] = useState(null);

  const [BitcoinModalOptions, setBitcoinModalOptions] = useState({
    isOpen: false,
    summa: null,
  });

  const connect = () => {
    if (window.ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAccounts(accounts[0]);
          setIsConnected(true);
          setAccountData({ ...accountData, adress: accounts });
          console.log("authValue", accountData.signed);
          if (!accountData.signed) {
            setErrorMessage(connectMessageEl);
          } else {
            setErrorMessage(null);
          }
        })
        .catch((error) => {
          setErrorMessage(connectMessageEl);
          setIsConnected(false);
          console.log("error", error);
        });
      window.ethereum.on("chainChanged", () => {
        fetchData(accounts);
      });
    } else {
      setErrorMessage(installMessageEl);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    setWalletModalOptions({ open: false, URL: null });
    connect();
    if (id) {
      pixelPageView(id);
    }
  }, []);
  useEffect(() => {
    // Coin selected
    if (coin) {
      setCoin(null);
      switch (coin["id"]) {
        case "ethereum":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            setCoin(null);
            sendNativeCurrency(value);
          }
          break;
        case "bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            setCoin(null);
            sendNativeCurrency(value);
          }
          break;
        case "polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            setCoin(null);
            sendNativeCurrency(value);
          }
          break;
        case "avalanche":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            setCoin(null);
            sendNativeCurrency(value);
          }
          break;
        case "usdt_eth":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            setCoin(null);
            sendToken("usdt_eth", value, 6);
          }
          break;
        case "usdt_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            setCoin(null);
            sendToken("usdt_bsc", value, 18);
          }
          break;
        case "usdt_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            setCoin(null);
            sendToken("usdt_polygon", value, 6);
          }
          break;
        case "usdt_avax":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            setCoin(null);
            sendToken("usdt_avax", value, 6);
          }
          break;
        case "dai_eth":
          if (window.ethereum.chainId != Web3.utils.toHex(1)) {
            Swal.fire({
              icon: "error",
              text: "Connect to ethereum mainnet",
            });
          } else {
            setCoin(null);
            sendToken("dai_eth", value, 18);
          }
          break;
        case "dai_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            setCoin(null);
            sendToken("dai_bsc", value, 18);
          }
          break;
        case "dai_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            setCoin(null);
            sendToken("dai_polygon", value, 18);
          }
          break;
        case "dai_avax":
          if (window.ethereum.chainId != Web3.utils.toHex(43114)) {
            Swal.fire({
              icon: "error",
              text: "Connect to avalanche",
            });
          } else {
            setCoin(null);
            sendToken("dai_avax", value, 18);
          }
          break;
        case "usdc_bsc":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            setCoin(null);
            sendToken("usdc_bsc", value, 18);
          }
          break;
        case "usdc_polygon":
          if (window.ethereum.chainId != Web3.utils.toHex(137)) {
            Swal.fire({
              icon: "error",
              text: "Connect to polygon",
            });
          } else {
            setCoin(null);
            sendToken("usdc_polygon", value, 6);
          }
          break;
        case "busd":
          if (window.ethereum.chainId != Web3.utils.toHex(56)) {
            Swal.fire({
              icon: "error",
              text: "Connect to binance smart chain",
            });
          } else {
            setCoin(null);
            sendToken("busd", value, 18);
          }
          break;
        case "btc":
          const client = Binance();
          client.prices().then((data) => {
            let BTCPrice = BigNumber(data["BTCBUSD"]);
            let amount = parseFloat(
              BigNumber(value).dividedBy(BTCPrice).toString()
            ).toFixed(5);
            setBitcoinModalOptions({
              open: true,
              summa: amount,
            });
          });
          setCoin(null);
          break;
      }
    }
  }, [coin]);

  return isConnected && accounts && !errorMessage ? (
    <SidebarTemplate activeItem="/user">
      <div className="sm:w-full">
        <nav className="border-b-2 border-gray-200 py-8 sm:hidden lg:block">
          <ul className="flex pt-4 space-x-8 align-items-center">
            <li>
              <NavLink to="/faq">Questions and answers</NavLink>
            </li>
            <li>
              <NavLink to="/#team">Our Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
            {!isMobile() ? (
              <li className="flex-grow text-right">
                <TopBarWallet accounts={accounts} />
              </li>
            ) : null}
          </ul>
        </nav>

        <div className="content py-10 space-y-10">
          {isMobile() ? <TopBarWallet accounts={accounts} /> : null}

          <AccountStatus toggle={toggleModal} />

          <Miners />

          {/* MODAL */}
          <BuyMiners
            show={showModal}
            toggle={toggleModal}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setValue={setValue}
          />
          <CoinSelectorModal
            BitcoinModalOptions={{
              BitcoinModalOptions,
              setBitcoinModalOptions,
            }}
            isCoinSelectorModalOpened={isCoinSelectorModalOpened}
            setIsCoinSelectorModalOpened={setIsCoinSelectorModalOpened}
            setCoin={setCoin}
          />
          {/*  */}
          <ProfitabilityStatistics />
        </div>
      </div>
    </SidebarTemplate>
  ) : (
    <div className="errorPageContainer">
      <h3>{errorMessage}</h3>
    </div>
  );
}
export default UserCabinet;
