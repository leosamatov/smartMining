import React, { useState } from "react";
import $ from "jquery";
import { NavLink, useParams } from "react-router-dom";

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { id } = useParams();
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu((prevState) => !prevState);
    $("#main_menu").toggle();
  };

  return (
    <div className="mobile-menu lg:hidden bg-white py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            {showMenu ? (
              <a
                href="#"
                onClick={toggleMenu}
                className="open-menu btn-border h-10 px-2 py-2 border-orange-500 border"
              >
                <img src="img/Close2.svg" />
              </a>
            ) : (
              <a
                href="#"
                onClick={toggleMenu}
                className="open-menu btn-border h-10 px-2 py-2 border-orange-500 border"
              >
                <img src="img/Menu1.svg" />
              </a>
            )}
          </div>
          <div className="flex items-center space-x-6">
            <NavLink
              to={id ? `/${id}` : `/`}
              className="flex items-center space-x-3"
            >
              <img src="img/logo.svg" className="h-10" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
