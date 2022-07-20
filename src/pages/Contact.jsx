import React from "react";

// Helpers
import Template, { WhiteBgContainer } from "../helpers/Template";
import Footer from "../helpers/Footer";

// Components
import TopBar from "../components/organisms/TopBar";
import ContactForm from "../components/molecules/ContactForm";

function Contact({ walletModalOptions, setWalletModalOptions }) {
  return (
    <Template classes="main-content-bg">
      <WhiteBgContainer>
        <TopBar
          setWalletModalOptions={setWalletModalOptions}
          showJumbotron={false}
          isHomePage={false}
          isTransparent={true}
        />

        <ContactForm />
      </WhiteBgContainer>

      <Footer
        setWalletModalOptions={setWalletModalOptions}
        isHomePage={false}
      />
    </Template>
  );
}

export default Contact;
