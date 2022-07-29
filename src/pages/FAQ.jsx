import React from "react";

// Helpers
import Template, { WhiteBgContainer } from "../helpers/Template";
import Footer from "../helpers/Footer";

// Components
import TopBar from "../components/organisms/TopBar";
import Questions from "../components/molecules/Questions";
const FAQ_DATA = [
  {
    question: "BASIC INSTRUCTION",
    answer: `Our service requires a crypto wallet <b>(Metamask, Trustwallet, etc.)</b>. 
      Connect your wallet by pressing the <b>Сonnect Wallet</b> button to get access to your personal account. Your wallet is directly linked to your personal account. 
      Use any of the buttons <b>Connect Wallet</b>, <b>Start Earning</b> or <b>Personal Area</b> to switch to your personal account. 
      Use the <b>Buy miners</b> button in your personal account to choose the deposit amount which directly affects your investment plan (your income rate). The next step is to choose any convenient cryptocurrency from our list. The cryptocurrency you choose must correspond to your wallet's network. After that, confirm the transaction in your wallet and the deposit will be made. From now on you will start receiving your daily profit which you can withdraw to your wallet at any time convenient for you. To withdraw funds use the "<b>Withdraw</b>" button in your personal area. Also, you can track your profitability statistics and other indicators of the miners in your personal cabinet. If you have any questions, please contact the support service.`,
  },
  {
    question: "What is cryptocurrency in simple words?",
    answer:
      "Cryptocurrencies are virtual money, which does not have any physical form, i.e., they are not issued as coins or banknotes. Digital assets, acting as a medium of exchange, are called as such. Cryptography is used to protect transactions and operations, as well as prevent the formation of new monetary units. Cryptocurrencies are classified as digital, alternative, and virtual currencies from the financial point of view",
  },
  {
    question: "What is GH/s?",
    answer:
      "GH/s (gigahash per second) is a unit of computing power of a computer (miner). It is used to determine the speed of operations performed by a technique when using a cryptographic code. The current indicator is crucial in calculating income. The higher the hashrate, the more productive the equipment, the more cryptocurrency the investor produces.",
  },
  {
    question: "When are the payment deadlines?",
    answer:
      "The payout system is automated. Each investor gets a certain amount of money into their account every day. Sometimes, trench delays of up to 24 hours are allowed.",
  },
  {
    question: "Are there any restrictions on contract amounts?",
    answer:
      "The minimum possible contract amounts are specified. They vary depending on the chosen tactics. Please contact the manager by mail or chat if you are planning on large investment amounts (over 100,000$).",
  },
  {
    question: "How do miners differ from each other?",
    answer:
      "Miners differ from each other in terms of GH/s. The more GH/s the miner has, the more income they will bring to the investor.",
  },
  {
    question: "What is the minimum withdrawable amount from the account?",
    answer: "The minimum withdrawable amount is 200 $.",
  },
  {
    question: "What affects the cloud mining income?",
    answer:
      "The return on investment depends on many factors. The amount of income is affected by the market rate of cryptocurrencies, the degree of difficulty of their mining and the hash rate of the network.",
  },
  {
    question: "How much is the service cost?",
    answer:
      "Service is already included in the GH/s price. We have set a single price per GH/s unit. Therefore, no matter how powerful the miner you rent is, you always pay a single price per unit of power (GH/s).",
  },
  {
    question: "How do I withdraw my mining income?",
    answer:
      "Click the Withdraw tab, then make a withdrawal request. After processing the request, the requested amount will be transferred to your wallet within 24 hours.",
  },
  {
    question: "Why does it make sense to reinvest my mining profits?",
    answer:
      "Money should work for you! This is every successful investor’s slogan. The profits should be reinvested in order to increase your capital. Reinvestment may increase the power as well; it will result in an increase in mining hash rate. Therefore, it will maximize your profits without additional costs for the miner’s power purchase.",
  },
];

function FAQ({ walletModalOptions, setWalletModalOptions }) {
  return (
    <Template background="#F4F7FF light">
      <WhiteBgContainer>
        <TopBar
          setWalletModalOptions={setWalletModalOptions}
          showJumbotron={false}
          isHomePage={false}
          isLight={true}
        />

        <Questions items={FAQ_DATA} />
      </WhiteBgContainer>

      <Footer
        setWalletModalOptions={setWalletModalOptions}
        isHomePage={false}
      />
    </Template>
  );
}

export default FAQ;
