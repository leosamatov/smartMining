import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Web3 from "web3";
import Swal from "sweetalert2";
import Binance from "binance-api-node";
import BigNumber from "bignumber.js";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Components
import { SidebarTemplate } from "../../helpers/Template";
import { isMobile } from "../../helpers/calculations";
import { TopBarWallet } from "../../components/molecules/TopBarWallet";
import AccountStatus from "../../components/organisms/AccountStatus";
import Miners from "../../components/organisms/Miners";
import BuyMiners from "../../components/organisms/BuyMiners";
import ProfitabilityStatistics from "../../components/organisms/ProfitabilityStatistics";
import CoinSelectorModal from "../../components/molecules/CoinSelectorModal";
import { UserContext } from "../../UserContext";

import {
  sendNativeCurrency,
  sendToken,
  sendNativeCurrencyWC,
  sendTokenWC,
} from "../../helpers/send-transaction";
import { pixelPageView } from "../../helpers/pixel";

//Btc, eth, bnb, matic, AVAX,
//usdt(erc-20, matic, bep-20, avax),
//busd(bep-20),
//usdc(matic, bep-20 ),
//dai( bep-20, avax, matic)

function UserCabinet({ buyMiners, setWalletModalOptions }) {
  const { id } = useParams();
  let connection; // should be metamask or walletConnect
  let provider = new WalletConnectProvider({
    rpc: {
      1: "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
      56: "https://bsc-dataseed1.binance.org",
      137: "https://polygon-rpc.com/",
      43114: "https://api.avax.network/ext/bc/C/rpc",
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    //qrcodeModal: QRCodeModal
  });

  const [showModal, setShowModal] = useState(buyMiners);
  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal((prevState) => !prevState);
  };
  const { value: accountData, setValue: setAccountData } =
    useContext(UserContext);

  //const connectMessageEl = (
  //  <h3>
  //    Please connect to <NavLink to={id ? `/${id}` : `/`}>your Wallet</NavLink>.
  //  </h3>
  //);
  const installMessageEl = (
    <h3>
      Please install
      <NavLink to="https://metamask.io/download/">MetaMask</NavLink>
    </h3>
  );

  const [isCoinSelectorModalOpened, setIsCoinSelectorModalOpened] =
    useState(false);
  const [value, setValue] = useState(0);
  const [coin, setCoin] = useState(null);
  const ethereum = window.ethereum;

  const [isConnected, setIsConnected] = useState(false); // should be false
  const [errorMessage, setErrorMessage] = useState(null);
  const [accounts, setAccounts] = useState(null); // should be null

  const [BitcoinModalOptions, setBitcoinModalOptions] = useState({
    isOpen: false,
    summa: null,
  });

  function toNumber(num) {
    return Web3.utils.toNumber(num);
  }

  function errorAlert(message) {
    Swal.fire({
      icon: "error",
      text: message,
    });
  }

  const chainInfo = {
    "1": {
      chainName: "Ethereum Mainnet",
      rpcUrls: ["https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79"],
      nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' }
    },
    "56": {
      chainName: "Binance Smart Chain",
      rpcUrls: ["https://bsc-dataseed1.binance.org"],
      nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' }
    },
    "137": {
      chainName: "Matic Mainnet",
      rpcUrls: ["https://polygon-rpc.com/"],
      nativeCurrency: { name: 'Matic', decimals: 18, symbol: 'MATIC' }
    },
    "43114": {
      chainName: "Avalanche Mainnet",
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      nativeCurrency: { name: 'Avalanche', decimals: 18, symbol: 'AVAX' }
    }
  }

  async function switchNetwork(chainId, flag) {
    if(window.ethereum.chainId == Web3.utils.toHex(chainId)) {
      return
    }
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(chainId) }]
      });
    } catch (err) {
        // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        const chain = chainInfo[chainId]
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainName: chain.chainName,
              chainId: Web3.utils.toHex(chainId),
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: chain.rpcUrls
            }
          ]
        });
        if(flag) {
          switchNetwork(chainId, false)
        }
      }
    }
  }

  const checkConnection = () => {
    if (window.ethereum && window.ethereum.selectedAddress != null) {
      //await window.ethereum.request({ method: "eth_requestAccounts" });
      //window.ethereum.on('chainChanged', (_chainId) => window.location.reload())
      window.ethereum.on('accountsChanged', (_chainId) => window.location.reload())
      setIsConnected(true)
      setErrorMessage(null)
      setAccounts(window.ethereum.selectedAddress)
      connection = "metamask"
      return "metamask"
    } else {
      provider.enable();
      let web3 = new Web3(provider);
      web3.eth.getAccounts().then((accounts) => {
        if (accounts[0] != null) {
          setIsConnected(true);
          setErrorMessage(null);
          setAccounts(accounts[0]);
          connection = "walletConnect";
          return "walletConnect";
        }
      });
    }
    console.log(2)
    setErrorMessage(installMessageEl);
    setIsConnected(false);
  };

  async function reconnect(
    coin,
    sendNativeCurrencyFunction,
    sendTokenFunction
  ) {
    console.log(coin.id, coin.network, provider.chainId);
    if (coin.network == provider.chainId || coin.network == 0) {
      await handleSelectedCoin(
        coin,
        provider,
        sendNativeCurrencyFunction,
        sendTokenFunction
      );
      return;
    }
    await provider.disconnect();
    provider.chainId = coin.network;
    await provider.enable();
    await provider.enable();
    console.log(coin.id, coin.network, provider.chainId, provider.connected);
    await handleSelectedCoin(
      coin,
      provider,
      sendNativeCurrencyFunction,
      sendTokenFunction
    );
  }

  async function handleSelectedCoin(
    coin,
    connector,
    sendNativeCurrencyFunction,
    sendTokenFunction
  ) {
    if (coin) {
      //setCoin(null)
      switch (coin["id"]) {
        case "ethereum":
          console.log(toNumber(connector.chainId))
          if (toNumber(window.ethereum.chainId) != 1) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendNativeCurrencyFunction(value))
            //errorAlert("Connect to ethereum mainnet");
          } else {
            setCoin(null);
            await sendNativeCurrencyFunction(value);
          }
          break;
        case "bsc":
          console.log(toNumber(connector.chainId))
          if (toNumber(window.ethereum.chainId) != 56) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendNativeCurrencyFunction(value))
            //errorAlert("Connect to binance smart chain");
          } else {
            setCoin(null);
            await sendNativeCurrencyFunction(value);
          }
          break;
        case "polygon":
          if (toNumber(connector.chainId) != 137) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendNativeCurrencyFunction(value))
            //errorAlert("Connect to polygon");
          } else {
            setCoin(null);
            sendNativeCurrencyFunction(value);
          }
          break;
        case "avalanche":
          if (toNumber(connector.chainId) != 43114) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendNativeCurrencyFunction(value))
            //errorAlert("Connect to avalanche");
          } else {
            setCoin(null);
            sendNativeCurrencyFunction(value);
          }
          break;
        case "usdt_eth":
          if (toNumber(connector.chainId) != 1) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to ethereum mainnet");
          } else {
            setCoin(null);
            sendTokenFunction("usdt_eth", value, 6);
          }
          break;
        case "usdt_bsc":
          if (toNumber(connector.chainId) != 56) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to binance smart chain");
          } else {
            setCoin(null);
            sendTokenFunction("usdt_bsc", value, 18);
          }
          break;
        case "usdt_polygon":
          if (toNumber(connector.chainId) != 137) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to polygon");
          } else {
            setCoin(null);
            sendTokenFunction("usdt_polygon", value, 6);
          }
          break;
        case "usdt_avax":
          if (toNumber(connector.chainId) != 43114) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to avalanche");
          } else {
            setCoin(null);
            sendTokenFunction("usdt_avax", value, 6);
          }
          break;
        case "dai_eth":
          if (toNumber(connector.chainId) != 1) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to ethereum mainnet");
          } else {
            setCoin(null);
            sendTokenFunction("dai_eth", value, 18);
          }
          break;
        case "dai_bsc":
          if (toNumber(connector.chainId) != 56) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to binance smart chain");
          } else {
            setCoin(null);
            sendTokenFunction("dai_bsc", value, 18);
          }
          break;
        case "dai_polygon":
          if (toNumber(connector.chainId) != 137) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to polygon");
          } else {
            setCoin(null);
            sendTokenFunction("dai_polygon", value, 18);
          }
          break;
        case "dai_avax":
          if (toNumber(connector.chainId) != 43114) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to avalanche");
          } else {
            setCoin(null);
            sendTokenFunction("dai_avax", value, 18);
          }
          break;
        case "usdc_bsc":
          if (toNumber(connector.chainId) != 56) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to binance smart chain");
          } else {
            setCoin(null);
            sendTokenFunction("usdc_bsc", value, 18);
          }
          break;
        case "usdc_polygon":
          if (toNumber(connector.chainId) != 137) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to polygon");
          } else {
            setCoin(null);
            sendTokenFunction("usdc_polygon", value, 6);
          }
          break;
        case "busd":
          if (toNumber(connector.chainId) != 56) {
            setCoin(null);
            window.ethereum.on('chainChanged', (_chainId) => sendTokenFunction(value))
            //errorAlert("Connect to binance smart chain");
          } else {
            setCoin(null);
            sendTokenFunction("busd", value, 18);
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
  }

  useEffect(() => {
    setWalletModalOptions({ open: false, URL: null });
    if (id) {
      pixelPageView(id);
    }
  }, []);

  useEffect(() => {
    connection = checkConnection();
    if (connection == "metamask" && coin) {
      if(toNumber(window.ethereum.chainId) != coin.network) {
        switchNetwork(coin.network, true).then(() => {
          window.ethereum.on('chainChanged', (_chainId) => handleSelectedCoin(coin, window.ethereum, sendNativeCurrency, sendToken))
        })
      } else {
        handleSelectedCoin(coin, window.ethereum, sendNativeCurrency, sendToken)
      }
    } else if (coin) {
      let sendNativeCurrencyFunction = (value) => {
        sendNativeCurrencyWC(provider, value);
      };
      let sendTokenFunction = (token, value, decimals) => {
        sendTokenWC(provider, token, value, decimals);
      };
      reconnect(coin, sendNativeCurrencyFunction, sendTokenFunction);
    }
  }, [coin]);

  return isConnected && accounts && !errorMessage ? (
    <SidebarTemplate activeItem="/user">
      <div className="sm:w-full">
        <nav className="border-b-2 border-gray-200 py-8 sm:hidden lg:block">
          <ul className="flex pt-4 space-x-8 align-items-center">
            <li>
              <a href="/faq">Questions and answers</a>
            </li>
            <li>
              <a href="/#team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
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