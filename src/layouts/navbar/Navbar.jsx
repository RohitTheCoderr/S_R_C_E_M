import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div>
        <li className="list-none font-semibold">
          <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] text-[#071952] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#37b7c3] ${isActive ? 'after:block' : 'after:hidden'}`}>
            home
          </NavLink>
        </li>
        <li className="list-none font-semibold">
          <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] text-[#071952] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#37b7c3] ${isActive ? 'after:block' : 'after:hidden'}`}>
            about
          </NavLink>
        </li>
        <li className="list-none font-semibold">
          <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] text-[#071952] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-[#37b7c3] ${isActive ? 'after:block' : 'after:hidden'}`}>
            Contact
          </NavLink>
        </li>
      </div>
    </div>
  )
}

export default Navbar