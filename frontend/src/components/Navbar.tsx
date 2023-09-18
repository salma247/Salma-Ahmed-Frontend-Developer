import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "bg-gray-900 text-blue-500 block px-3 py-2 rounded-md text-base font-medium";
  const inactiveStyle = "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  const [active, setActive] = useState(location.pathname === "/" ? "Home" : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2));

  return (
    <nav className="bg-gray-800 rounded">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
                <HiOutlineMenuAlt1 className={`${!isOpen ? "block" : "hidden"} h-6 w-6`} />
                <HiOutlineX className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto" src={logo} alt="Workflow" />
             <h1 className="text-white">SpaceX</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink to="/" className={active === "Home" ? activeStyle : inactiveStyle} onClick={() => setActive("Home")}>
                  Home
                </NavLink>
                <NavLink to="/rockets" className={active === "Rockets" ? activeStyle : inactiveStyle} onClick={() => setActive("Rockets")}>
                  Rockets
                </NavLink>
                <NavLink to="/capsules" className={active === "Capsules" ? activeStyle : inactiveStyle} onClick={() => setActive("Capsules")}>
                  Capsules
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink to="/" className={active === "Home" ? activeStyle : inactiveStyle} onClick={() => setActive("Home")}>
            Home
          </NavLink>
          <NavLink to="/rockets" className={active === "Rockets" ? activeStyle : inactiveStyle} onClick={() => setActive("Rockets")}>
            Rockets
          </NavLink>
          <NavLink to="/capsules" className={active === "Capsules" ? activeStyle : inactiveStyle} onClick={() => setActive("Capsules")}>
            Capsules
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
