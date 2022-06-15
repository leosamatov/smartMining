import React from "react"
import PropTypes from "prop-types"
import {isMobile} from "../../helpers/calculations"

function SingleStep({label, value, isMiddle = false}) {

  return (
    <div
      style={(isMobile() && isMiddle) ? {borderRadius: 0} : {}}
      className="sm:flex md:flex-wrap bg-white lg:py-8 px-4 sm:rounded-t-xl md:rounded-xl md:shadow-xl sm:py-5 sm:space-y-0 md:space-y-3 lg:space-y-5 text-gray-900 sm:w-full md:w-1/2">
      <div className="title-font text-orange-500 sm:w-1/4 md:w-full sm:text-3xl md:text-5xl">{value}</div>
      <div dangerouslySetInnerHTML={{__html: label}}/>
    </div>
  )
}

SingleStep.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isMiddle: PropTypes.bool
}

export default SingleStep
