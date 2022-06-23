import React from "react"
import PropTypes from "prop-types"

// Components
import SingleQuestion from "../atoms/SingleQuestion"

function Questions({items}) {

  return (
    <div className="py-20 text-gray-900">
      <div className="container">
        <div className="space-y-6">
          <h1 className="text-7xl text-center pb-20">
            FAQ
          </h1>
          <div className="space-y-6">
            {
              items.map(({question, answer}, index) =>
                <SingleQuestion question={question} answer={answer} key={index}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Questions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  }))
}

export default Questions
