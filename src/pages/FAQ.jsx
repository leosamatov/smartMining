import React from "react"

// Helpers
import Template, {WhiteBgContainer} from "helpers/Template"
import Footer from "helpers/Footer"

// Components
import TopBar from "components/organisms/TopBar"
import Questions from "components/molecules/Questions"

const FAQ_DATA = [
  {
    question: "How does cooperation with the Smart Mining start?",
    answer: "Go through a simple procedure to connect your wallet and pay and pay to become our investor. Then pay the rent for the miner. You don't need to buy or install any additional hardware."
  },
  {
    question: "What is cryptocurrency in simple words?",
    answer: "Cryptocurrencies are virtual money, which does not have any physical form, i.e., they are not issued as coins or banknotes. Digital assets, acting as a medium of exchange, are called as such. Cryptography is used to protect transactions and operations, as well as prevent the formation of new monetary units. Cryptocurrencies are classNameified as digital, alternative, and virtual currencies from the financial point of view"
  },
  {
    question: "What is GH/s?",
    answer: "GH/s (gigahash per second) is a unit of computing power of a computer (miner). It is used to determine the speed of operations performed by a technique when using a cryptographic code. The current indicator is crucial in calculating income. The higher the hashrate, the more productive the equipment, the more cryptocurrency the investor produces."
  },
  {
    question: "How does the cloud mining earning scheme work?",
    answer: "All is clear. The investor should determine the optimum capacity for himself (the hash amount), buy a cloud mining contract (or even several contracts), and earn income every day depending on the parameters of the chosen contract."
  },
  {
    question: "When are the payment deadlines?",
    answer: "The payout system is automated. Each investor gets a certain amount of money into their account every day. Sometimes, trench delays of up to 24 hours are allowed."
  },
  {
    question: "Are there any restrictions on contract amounts?",
    answer: "The minimum possible contract amounts are specified. They vary depending on the chosen tactics. Please contact the manager by mail or chat if you are planning on large investment amounts (over 100,000$)."
  },
  {
    question: "How do miners differ from each other?",
    answer: "Miners differ from each other in terms of GH/s. The more GH/s the miner has, the more income they will bring to the investor."
  },
  {
    question: "What is the minimum withdrawable amount from the account?",
    answer: "The minimum withdrawable amount is 200 $."
  },
  {
    question: "What affects the cloud mining income?",
    answer: "The return on investment depends on many factors. The amount of income is affected by the market rate of cryptocurrencies, the degree of difficulty of their mining and the hash rate of the network."
  },
  {
    question: "How much is the service cost?",
    answer: "Service is already included in the GH/s price. We have set a single price per GH/s unit. Therefore, no matter how powerful the miner you rent is, you always pay a single price per unit of power (GH/s)."
  },
  {
    question: "How do I withdraw my mining income?",
    answer: "Select the Withdraw tab, then make a money withdrawal request in the Wallet section. Once the request is processed, the declared amount is transferred to your wallet within 24 hours."
  },
  {
    question: "Why does it make sense to reinvest my mining profits?",
    answer: "Money should work for you! This is every successful investor’s slogan. The profits should be reinvested in order to increase your capital. Reinvestment may increase the power as well; it will result in an increase in mining hash rate. Therefore, it will maximize your profits without additional costs for the miner’s power purchase."
  }
]

function FAQ () {
  return (
    <Template background="#F4F7FF light">
      <WhiteBgContainer>
        <TopBar showJumbotron={false} isLight={true}/>

        <Questions items={FAQ_DATA}/>

      </WhiteBgContainer>

      <Footer/>

    </Template>
  )
}

export default FAQ
