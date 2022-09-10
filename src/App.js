import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Referral from "./pages/Referral";
import History from "./pages/History";
import TermsAndCondition from "./pages/TermsAndCondition";
import Privacy from "./pages/Privacy";
import CloudMining from "./pages/CloudMining";
import CryptoMining from "./pages/CryptoMining";
import UserCabinet from "./pages/user";
import NotFound from "./pages/NotFound";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import WalletModal from "./components/molecules/WalletModal";

function getLibrary(provider, connector) {
  return new Web3(provider);
}

const App = () => {
  const [walletModalOptions, setWalletModalOptions] = useState({
    open: false,
    URL: null,
  });
  const [value, setValue] = useState({
    adress: false,
    signed: window.localStorage.getItem("signed"),
  });
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  console.log("global value isss", value.signed);
  document.documentElement.style.overflow = "auto";

  return (
    <UserContext.Provider value={providerValue}>
      <WalletModal
        showSyncModal={showSyncModal}
        setShowSyncModal={setShowSyncModal}
        setLoading={setLoading}
        walletModalOptions={walletModalOptions.open}
        setWalletModalOptions={setWalletModalOptions}
        URL={walletModalOptions.URL}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Web3ReactProvider getLibrary={getLibrary}>
              <Home
                showSyncModal={showSyncModal}
                setShowSyncModal={setShowSyncModal}
                loading={loading}
                setLoading={setLoading}
                walletModalOptions={walletModalOptions}
                setWalletModalOptions={setWalletModalOptions}
              />
            </Web3ReactProvider>
          }
        />
        <Route
          path="/:id"
          element={
            <Web3ReactProvider getLibrary={getLibrary}>
              <Home
                walletModalOptions={walletModalOptions}
                setWalletModalOptions={setWalletModalOptions}
              />
            </Web3ReactProvider>
          }
        />
        <Route
          path="/user-buy/:id"
          element={<UserCabinet buyMiners={true} />}
        />
        <Route
          path="/user/:id"
          element={
            <UserCabinet
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />

        <Route
          path="/faq"
          element={
            <FAQ
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        {/* <Route path="referral" element={<Referral />} /> */}
        <Route
          path="/history"
          element={
            <History
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/terms-cond"
          element={
            <TermsAndCondition
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/privacy"
          element={
            <Privacy
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/cloud-mining"
          element={
            <CloudMining
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/crypto-mining"
          element={
            <CryptoMining
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />

        <Route
          path="/user"
          element={
            <UserCabinet
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/user-buy"
          element={
            <UserCabinet
              buyMiners={true}
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
};
export default App;
