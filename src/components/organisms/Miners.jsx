import React, {useRef} from "react"

function Miners() {

  const minersSlider = useRef(null)

  const moveLeft = e => {
    e.preventDefault()
    minersSlider.current.scrollLeft = minersSlider.current.scrollLeft - (minersSlider.current.scrollWidth / 7)
  }
  const moveRight = e => {
    e.preventDefault()
    minersSlider.current.scrollLeft = minersSlider.current.scrollLeft + (minersSlider.current.scrollWidth / 7)
  }

  return (
    <div>
      <div className="space-y-6">
        <div className="flex">
          <div className="text-2xl uppercase font-bold flex-grow">My miners</div>
          <div className="flex space-x-2">
            <a href="#" onClick={moveLeft}><img src="img/Left.svg" alt=""/></a>
            <a href="#" onClick={moveRight}><img src="img/Left.svg" className="transform rotate-180" alt=""/></a>
          </div>
        </div>

        <div ref={minersSlider} className="flex items-center space-x-4 snap overflow-auto relative flex-no-wrap transition-all">
          <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div>
          <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div>
          <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div>
          <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div> <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div> <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div> <div className="bg-white sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg py-20 h-64 cursor-pointer">
            <img className="m-auto" src="img/Plus.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Miners
