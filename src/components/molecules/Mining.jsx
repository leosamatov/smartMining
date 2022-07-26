import React from "react";
import SingleHowToStep from "../atoms/SingleHowToStep";

const MINING_STEPS_DATA = [
  {
    title: "Sign up now",
    description:
      "Go through a simple procedure connect your wallet. Then pay the rent for the miner to become our investor. You don't need to buy or install any additional hardware.",
    src: "img/Zareg.svg",
  },
  {
    title: "Buy a contract",
    description:
      "Choose a contract that suits you and start cryptocurrency cloud mining",
    src: "img/Buy.svg",
  },
  {
    title: "Get payouts",
    description: "Withdraw your profits daily to your cryptocurrency wallet",
    src: "img/Dividends.svg",
  },
];

function Mining() {
  return (
    <div className="container" id="mining">
      <div className="start sm:py-14 md:py-20">
        <div className="title-font sm:text-4xl md:text-6xl">How to start</div>
        <div className="sm:flex-wrap md:flex-nowrap flex sm:pt-8 md:pt-16 sm:space-y-3 md:space-y-0">
          {MINING_STEPS_DATA.map(({ title, description, src }, index) => (
            <SingleHowToStep
              key={index}
              title={title}
              description={description}
              src={src}
              isLast={MINING_STEPS_DATA.length === index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mining;
