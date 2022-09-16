import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

import History from "./pages/History";
import TermsAndCondition from "./pages/TermsAndCondition";
import Privacy from "./pages/Privacy";
import CloudMining from "./pages/CloudMining";
import CryptoMining from "./pages/CryptoMining";
import UserCabinet from "./pages/user";
import NotFound from "./pages/NotFound";

import { UserContext } from "./UserContext";
import { useEffect, useMemo, useState } from "react";
import WalletModal from "./components/molecules/WalletModal";
import SyncModal from "./pages/user/SyncModal";
import { checkConnection } from "./helpers/connect-ishodniy";
import Loading from "./components/loaders/Loading";

const App = () => {
  const [walletModalOptions, setWalletModalOptions] = useState({
    open: false,
    URL: null,
  });
  const [value, setValue] = useState({
    adress: false,
  });
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  document.documentElement.style.overflow = "auto";
  return (
    <UserContext.Provider value={providerValue}>
      {loading && <Loading loading={loading} />}
      {showSyncModal && (
        <SyncModal
          setLoading={setLoading}
          setShowSyncModal={setShowSyncModal}
        />
      )}
      <WalletModal
        showSyncModal={showSyncModal}
        loading={loading}
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
            <Home
              showSyncModal={showSyncModal}
              setShowSyncModal={setShowSyncModal}
              loading={loading}
              setLoading={setLoading}
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <Home
              walletModalOptions={walletModalOptions}
              setWalletModalOptions={setWalletModalOptions}
            />
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
