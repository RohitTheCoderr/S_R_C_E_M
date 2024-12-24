import React, { useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = ({ img }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearchBar = () => {
    setIsSearchOpen((prevState) => !prevState);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className="h-[7rem] sm:h-[6rem] py-5 shadow-lg bg-slate-50">
      <div className="w-full text-center sm:flex justify-between items-center px-2 sm:px-4 lg:px-10">
        <div className="relative sm:pt-0 h-auto w-[15rem] flex justify-center items-center cursor-pointer">
          <Link to="/">
            <img
              src={img || "/images/SRCEM logo.png"}
              alt="Logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <Navbar />
        <div className="relative py-2 sm:p-0 flex justify-end sm:flex-none">
          {!isSearchOpen && (
            <button
              className="p-2 text-gray-600 bg-gray-200 rounded-full shadow hover:bg-gray-300 focus:outline-none"
              onClick={toggleSearchBar}
            >
              <FaSearch size={20} />
            </button>
          )}
          {isSearchOpen && (
            <div className="lg:flex flex-col items-center lg:flex-row">
               <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="p-2 pl-4 border rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-[#071952] w-[200px] h-8 md:w-[100px] lg:w-[200px]"
              />
               <button
                className="ml-1 sm:ml-2 p-2 text-gray-500 bg-gray-200 rounded-full shadow hover:bg-gray-300 focus:outline-none"
                onClick={toggleSearchBar}
              >
                <FaSearch size={20} />
              </button>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
