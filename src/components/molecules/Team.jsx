import React from "react"

function Team() {

  return (
    <div className="main-dark-bg relative" id="team">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <img src="img/Ellipse137.svg" className="absolute top-0 right-auto left-auto"/>
        <img src="img/Polygon7.svg" className="mx-auto h-full"/>
      </div>
      <div className="container text-white relative py-24">
        <img src="img/Ellipse1.svg" className="absolute top-0 left-4"/>
        <div className="flex sm:space-x-4 md:space-x-0">
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="title-font max-w-min sm:text-4xl md:text-6xl">Our expert team</div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 text-center space-y-3">
            <img src="img/Photo1.png" className="inline-block"/>
            <div className="title-font text-2xl">Christiano Fitz</div>
            <div className="text-orange-500">AML Specialist</div>
          </div>
          <div className="sm:hidden md:block md:w-1/3 lg:w-1/4 text-center space-y-3">
            <img src="img/Photo2.png" className="inline-block"/>
            <div className="title-font text-2xl">Daniel Sechi</div>
            <div className="text-orange-500">Executive Director</div>
          </div>
        </div>
        <div className="md:hidden sm:flex sm:space-x-4 md:space-x-0">
          <div className="w-1/2 text-center space-y-3">
            <img src="img/Photo2.png" className="inline-block"/>
            <div className="title-font text-2xl">Daniel Sechi</div>
            <div className="text-orange-500">Executive Director</div>
          </div>
          <div className="w-1/2 text-right">
            <div className="text-center inline-block space-y-3">
              <img src="img/Photo3.png"/>
              <div className="title-font text-2xl">Fernando Merelles</div>
              <div className="text-orange-500">Chief Financial Officer</div>
            </div>
          </div>
        </div>
        <div className="flex sm:pt-12 lg:pt-0 sm:space-x-4 md:space-x-0">
          <div className="sm:hidden md:block w-1/3 text-right">
            <div className="text-center inline-block space-y-3">
              <img src="img/Photo3.png"/>
              <div className="title-font text-2xl">Fernando Merelles</div>
              <div className="text-orange-500">Chief Financial Officer</div>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 text-center space-y-3">
            <img src="img/Photo4.png" className="inline-block"/>
            <div className="title-font text-2xl">Denada Lame</div>
            <div className="text-orange-500">Marketing Director</div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 text-left">
            <div className="text-center inline-block space-y-3">
              <img src="img/Photo5.png"/>
              <div className="title-font text-2xl">Luis Neves</div>
              <div className="text-orange-500">Technical Director</div>
            </div>
          </div>
        </div>
        <div className="absolute lg:bottom-auto lg:left-0 lg:right-auto sm:-bottom-16 sm:left-auto sm:right-0">
          <img src="img/BTC-float.png" className="sm:h-28 lg:h-auto"/>
        </div>
        <div className="absolute -right-60 bottom-0">
          <img src="img/Ellipse138.svg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Team
