import React from "react"
import PropTypes from "prop-types"

function SingleLocation({number, label}) {

  return (
    <div className="flex items-center sm:space-x-1 md:space-x-5">
      <div className="relative">
        <img src="img/Ellipse147.svg" alt=""/>
        <div className="absolute top-4 text-gray-700 left-0 right-0 text-4xl font-bold text-center">
          {number}
        </div>
      </div>
      <div className="relative">
        {label}
      </div>
    </div>
  )
}

SingleLocation.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string
}

export default SingleLocation
