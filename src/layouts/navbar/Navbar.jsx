import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[30%] sm:w-[85%] md:w-[85%] lg:w-[85%] h-auto relative z-50 ">
      {/* Mobile Hamburger Button */}
      <div className="relative z-10 mt-2 flex justify-between items-center px-4 py-2 sm:hidden">
      <button
          onClick={toggleMenu}
          className="text-[#071952] text-2xl focus:outline-none"
        >
          {isMenuOpen ? <span><HiX/></span> : <span><HiMenu/></span>}
        </button>
      </div>
      {/* Navbar Menu */}
      <ul
        ref={menuRef}
        className={`${isMenuOpen ? "block relative" : "hidden"
          } bg-slate-50 text-start sm:flex flex-col px-2 sm:flex-row sm:items-center flex sm:justify-between md:justify-around lg:justify-center h-auto sm:h-[4rem] md:gap-3 lg:gap-5 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[16px] font-medium `}
      >
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#071952] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2"
              : " hover:border-b-[0.19rem] hover:text-[#088395] hover:border-[#37b7c3] transition-all duration-300 pb-2"
          }
        >
          <li className="hover:text-[#088395]">Home</li>
        </NavLink>

        {/* About Us */}
        <li className="relative group/parent cursor-pointer  ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            About Us
            <RiArrowDropDownLine className="text-[24px]" />
          </div>

          {/* Main Dropdown */}
          <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover/parent:block group-hover/parent:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">

            {/* Co-Founder Principal Dropdown */}
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Co-Founder Principal
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Co-Founder Principal */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Co-Founder</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Principal Message</li>
              </ul>
            </li>

            {/* Infrastructure Dropdown */}
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Infrastructure
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Infrastructure */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Smart Classroom</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Hostel</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Auditorium</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Library</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Transportation</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Medical</li>
              </ul>
            </li>

            {/* Lab Dropdown */}
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Lab
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Lab */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Physics Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechanical Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electrical Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Computer Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Civil Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Chemistry Lab</li>
                <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">BMLT/DMLT Lab</li>
              </ul>
            </li>

            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              Mandatory Disclosure
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              Mission and Vision
            </li>
          </ul>
        </li>

        {/* Courses */}
        <li className="relative group/parent cursor-pointer ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            Courses
            <RiArrowDropDownLine className="text-[24px]" />
          </div>

          {/* Main Dropdown */}
          <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover/parent:block group-hover/parent:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">

            {/* Co-Founder Principal Dropdown */}
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                B-tech
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Co-Founder Principal */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <Link to={'/Mechanical'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">mechanical engineering</li></Link>
                <Link to={'/Comp'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">computer science & engineering</li></Link>
                <Link to={'/Electronics'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electronics & commonication engineering</li></Link>
                <Link to={'/CivilEngg'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil engineering</li></Link>
              </ul>
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                M-tech
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Co-Founder Principal */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <Link to={'/mechanical'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">mechanical engineering</li></Link>
                <Link to={'/comp'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">computer science & engineering</li></Link>
                <Link to={'/electronics'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electronics & commonication engineering</li></Link>
                <Link to={'/civil'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil engineering</li></Link>
              </ul>
            </li>

            {/* Infrastructure Dropdown */}
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                polytechnic diploma
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              {/* Nested Dropdown for Infrastructure */}
              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                <Link to={'/'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">CSE polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">DMLT polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">ECE polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechinical polytechnic diploma</li></Link>
              </ul>
            </li>

            {/* Other Items */}
            <Link to={'/BBA'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BBA
            </li></Link>
            <Link to={'/BBAdm'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BBA digital marketing
            </li></Link>
            <Link to={'/BCA'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BCA
            </li></Link>
            <Link to={'/MBA'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              MCA
            </li></Link>
            <Link to={'/BVOC'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              B.VOC
            </li></Link>
            <Link to={'/MCA'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              MBA
            </li></Link>
          </ul>
        </li>

        {/* Training & Placement */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300">
            Training & Placement
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] bg-[#ebf4f6] shadow-lg w-[200px] ">
            <Link to="/agrement">
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                Agrements
              </li>
            </Link>
            <Link to="/corporate">
              
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                Corporate Tie UPS
              </li>
            </Link>
            <Link to="/">
             
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                MOU
              </li>
            </Link>
            <Link to="/">
             
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                Job-Fair 2024
              </li>
            </Link>
            <Link to="/">
            
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                TPO message
              </li>
            </Link>
            <Link to="/">
             
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                placement record
              </li>
            </Link>
            <Link to="/">
             
              <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                placement{" "}
              </li>
            </Link>
          </ul>
        </li>

        {/*Admission */}
        <li className="relative group cursor-pointer  ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            Admission
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              adimission commitee
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              discipline
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              ragging
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              procedure & eligibility
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              criteria
            </li>
          </ul>
        </li>
        {/* Life Here */}
        <li className="relative group cursor-pointer  ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            Life Here
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Shi Ram skill development center
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Events
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              welfare Activities
            </li>
            <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Sports Activities
            </li>
          </ul>
        </li>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#088395] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2 "
              : " hover:border-b-[0.19rem] hover:border-[#37b7c3] transition-all duration-300 pb-2 "
          }
        >
          <li className="hover:text-[#088395] text-[#071952]">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
