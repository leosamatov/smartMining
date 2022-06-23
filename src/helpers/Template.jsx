import React, {useEffect} from "react"
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"

// Components
import MobileMenu from "../components/molecules/MobileMenu"
import MainMenu from "../components/molecules/MainMenu"

function Template({children, background, classes}) {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0)
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)

        if (element) element.scrollIntoView()
      }, 0)
    }
  }, [pathname, hash, key])
  
  return (
    <div className={`${background ? "" : "bg-white"} overflow-x-hidden ${classes}`} style={{backgroundColor: background}}>
      {children}
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  background: PropTypes.string,
  classes: PropTypes.string
}

export default Template

export function SidebarTemplate({children, activeItem}) {
  return (
    <div className="main-bg text-gray-800">
      <MobileMenu/>

      <div id="app" className="container mx-auto relative">
        <div className="flex lg:space-x-8">

          <MainMenu activeItem={activeItem}/>

          {children}
        </div>
      </div>
    </div>
  )
}

export function WhiteBgContainer({children}) {
  return (
    <div className="main">
      {children}
    </div>
  )
}
