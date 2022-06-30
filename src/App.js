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

function getLibrary(provider, connector) {
  return new Web3(provider);
}

const App = () => {
  const [value, setValue] = useState({
    adress: false,
  });

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  document.documentElement.style.overflow = "auto";
  return (
    <UserContext.Provider value={providerValue}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Web3ReactProvider getLibrary={getLibrary}>
                <Home />
              </Web3ReactProvider>
            }
          />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="referral" element={<Referral />} /> */}
          <Route path="history" element={<History />} />
          <Route path="terms-cond" element={<TermsAndCondition />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cloud-mining" element={<CloudMining />} />
          <Route path="crypto-mining" element={<CryptoMining />} />

          <Route path="user" element={<UserCabinet />} />
          <Route path="/user" element={<UserCabinet />} />
          <Route path="/user-buy" element={<UserCabinet buyMiners={true} />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};
export default App;
