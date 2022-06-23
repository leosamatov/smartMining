import "./polyfill"
import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"
import Referral from "./pages/Referral"
import History from "./pages/History"
import TermsAndCondition from "./pages/TermsAndCondition"
import Privacy from "./pages/Privacy"
import CloudMining from "./pages/CloudMining"
import CryptoMining from "./pages/CryptoMining"
import UserCabinet from "./pages/user"
import NotFound from "./pages/NotFound"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider, connector) {
  return new Web3(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Web3ReactProvider getLibrary={getLibrary}><Home/></Web3ReactProvider>}/>
          <Route path="faq" element={<FAQ/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="referral" element={<Referral/>}/>
          <Route path="history" element={<History/>}/>
          <Route path="terms-cond" element={<TermsAndCondition/>}/>
          <Route path="privacy" element={<Privacy/>}/>
          <Route path="cloud-mining" element={<CloudMining/>}/>
          <Route path="crypto-mining" element={<CryptoMining/>}/>

          <Route path="user" element={<UserCabinet/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
