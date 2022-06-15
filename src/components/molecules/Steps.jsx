import React from "react"
import SingleStep from "../atoms/SingleStep"

const STEPS = [
  [
    {
      label: "MWhat will be the deposit? <br/>Currencies BNB, ETH and Polygon",
      value: "$200"
    },
    {
      label: "Average return. <br/>Invest $1,000 - earn $1,680.",
      value: "1.68x"
    }
  ],
  [
    {
      label: "Instant payouts. <br/>Withdraw funds at any time.",
      value: "24/7"
    },
    {
      label: "Crypto investors <br/>since 2018.",
      value: "30 000+"
    }
  ]
]

function Steps() {

  return (
    <div className="container">
      <div className="steps -mt-20 sm:flex-wrap lg:flex-nowrap lg:flex lg:space-x-5 md:space-y-5 lg:space-y-0 relative">
        {
          STEPS.map((section, sectionIndex) =>
            <div
              className="sm:flex-wrap md:flex-nowrap flex md:space-x-5 sm:w-full lg:w-1/2"
              key={sectionIndex}>
              {
                section.map(({label, value}, index) =>
                  <SingleStep
                    label={label}
                    value={value}
                    isMiddle={(sectionIndex === 0 && index === 1) || (sectionIndex === 1 && index === 0)}
                    key={index}
                  />)
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

Steps.propTypes = {}

export default Steps
