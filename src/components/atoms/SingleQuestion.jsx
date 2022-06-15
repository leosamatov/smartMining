import React, {useState} from "react"
import PropTypes from "prop-types"

function SingleQuestion({question, answer}) {

  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prevState => !prevState)

  return (
    <div className="item bg-white p-4 space-y-4 rounded-xl">
      <div className="flex items-center cursor-pointer px-3 text-xl leading-10" onClick={toggleShow}>
        <div className="flex-grow">{question}</div>
        <div>
          {
            !show
              ? <img src="img/plus1.svg"/>
              : <img src="img/minus1.svg"/>
          }
        </div>
      </div>
      <div className="p-6 border-t-2 border-black border-opacity-10" style={{display: show ? "block" : "none"}}>
        {answer}
      </div>
    </div>
  )
}

SingleQuestion.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default SingleQuestion
