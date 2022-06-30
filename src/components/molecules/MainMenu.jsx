import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MainMenu({ activeItem = "/referral" }) {
  const [open, setOpen] = useState(true);

  const toggleOpen = (e) => {
    e.preventDefault();
    setOpen((prevState) => !prevState);
  };

  return (
    <aside
      id="main_menu"
      className={`bg-white sm:absolute left-0 sm:hidden lg:block top-0 lg:relative z-50 ${
        open ? "" : "minim px-1 text-center"
      }`}
    >
      <div className="relative sm:hidden lg:block">
        <div className={`absolute -right-5 top-4 ${open ? "" : "-right-6"}`}>
          <a href="#" onClick={toggleOpen}>
            {open ? (
              <img src="img/Hide_Sidebar.svg" />
            ) : (
              <img src="img/Show_Sidebar.svg" />
            )}
          </a>
        </div>
      </div>
      <div className="mob-menu-gradient lg:hidden" />
      <div
        className={`lg:space-y-20 sm:space-y-3 lg:py-5 sm:py-1 pb-5 ${
          open ? "px-6" : "px-1"
        }`}
      >
        <div className="sm:hidden lg:block profile text-center space-y-4">
          <div>
            <NavLink to="/">
              <img src="img/logo.svg" className="mx-auto" />
            </NavLink>
          </div>
        </div>
        <ul className="space-y-5">
          <li>
            <NavLink
              to="/user"
              className={`${
                activeItem === "/user" ? "bg-gray-800 text-white" : ""
              } space-x-2 block leading-4 font-medium hover:no-underline px-3 py-2.5 rounded-lg`}
            >
              <img src="img/Miner.svg" className="inline-block -mt-0.5" />
              <img src="img/Miner_h.svg" className="hidden -mt-0.5" />
              <span className=" hidden-minim">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <a
              href="/history"
              className={`${
                activeItem === "/history" ? "bg-gray-800 text-white" : ""
              } space-x-2 block leading-4 font-medium hover:no-underline px-3 py-2.5 rounded-lg`}
            >
              <img src="img/History.svg" className="inline-block -mt-0.5" />
              <img src="img/History_h.svg" className="hidden -mt-0.5" />
              <span className=" hidden-minim">History</span>
            </a>
          </li>
          {/* <li>
            <a
              href="/referral"
              className={`${
                activeItem === "/referral" ? "bg-gray-800 text-white" : ""
              } space-x-2 block leading-4 font-medium hover:no-underline px-3 py-2.5 rounded-lg`}
            >
              <img src="img/Ref.svg" className="hidden -mt-0.5" />
              <img src="img/Ref_h.svg" className="inline-block -mt-0.5" />
              <span className=" hidden-minim">Referral</span>
            </a>
          </li> */}
        </ul>
        <div className="border-t lg:hidden border-gray-200">
          <ul className="pt-4 space-y-3">
            <li>
              <a href="/faq">Questions and answers</a>
            </li>
            <li>
              <a href="/#team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden lg:block banner-ref hidden-minim">
          <a onClick={(e) => e.preventDefault()} className="-mt-4 block">
            <img width="200px" src="img/Banner-Referal.svg" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default MainMenu;
