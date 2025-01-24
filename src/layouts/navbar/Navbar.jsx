import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
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
        <div className="w-[30%] sm:w-[95%] md:w-[92%] lg:w-[85%] mt-[-4.2rem] sm:m-auto  h-auto relative z-50 ">
            {/* Mobile Hamburger Button */}
            <div className="relative z-10 mt-2 flex justify-between items-center px-2 sm:px-4 py-2 sm:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-[#071952] text-2xl focus:outline-none bg-gray-200 p-[0.59rem] rounded-full hover:bg-gray-300"
                >
                    {isMenuOpen ? <span><HiX /></span> : <span><HiMenu /></span>}
                </button>
            </div>
            {/* Navbar Menu */}
            <ul
                ref={menuRef}
                className={`${isMenuOpen ? "block relative" : "hidden"
                    } bg-transparent text-start sm:flex flex-col px-2 sm:flex-row sm:items-center flex sm:justify-between md:justify-around lg:justify-center h-auto sm:h-[3.5rem] mt-[-0.5px] sm:mt-1 md:gap-3 lg:gap-5 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-medium `}
            >
                {/* Home */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "  text-[#071952] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2"
                            : " hover:border-b-[0.19rem] hover:text-[#088395] hover:border-[#37b7c3] transition-all duration-300 pb-2"
                    }
                >
                    <li className="hover:text-[#088395]">Home</li>
                </NavLink>

                {/* About Us */}
                <li className=" relative group/parent cursor-pointer  ">
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
                            <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                                <Link to={"/Founder"}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Co-Founder</li>
                                </Link>
                                <Link to={"/Principal"}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Principal Message</li>
                                </Link>
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
                                <Link to={"/Smart"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Smart Classroom</li></Link>
                                <Link to={"/Hostel"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Hostel</li></Link>
                                <Link to={"/Auditorium"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Auditorium</li></Link>
                                <Link to={"/Library"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Library</li></Link>
                                <Link to={"/Transport"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Transportation</li></Link>
                                <Link to={"/Medical"}> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Medical</li></Link>
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
                                <Link to='/Physics'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Physics Lab</li></Link>
                                <Link to='/Mechanics'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechanical Lab</li></Link>
                                <Link to='/Electrical'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electrical Lab</li></Link>
                                <Link to='/Computer'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Computer Lab</li></Link>
                                <Link to='/Civil_Lab'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Civil Lab</li></Link>
                                <Link to='/Chemistry'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Chemistry Lab</li></Link>
                                <Link to='/Bmlt'><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">BMLT/DMLT Lab</li></Link>
                            </ul>
                        </li>

                        <Link to={"/Mandatory"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
                            Mandatory Disclosure
                        </li>
                        </Link>
                        <Link to={"/Mission"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
                            Mission and Vision
                        </li>
                        </Link>
                    </ul >
                </li >

                {/* Courses */}
                < li className=" relative group/parent cursor-pointer " >
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
                                <Link to={'/Mcivil'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil engineering</li></Link>
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
                                <Link to={'/PCivil'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil polytechnic diploma</li></Link>
                                <Link to={'/PCse'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">CSE polytechnic diploma</li></Link>
                                <Link to={'/PDmlt'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">DMLT polytechnic diploma</li></Link>
                                <Link to={'/PEce'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">ECE polytechnic diploma</li></Link>
                                <Link to={'/PMechanical'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechinical polytechnic diploma</li></Link>
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
                </li >

                {/* Training & Placement */}
                < li className=" relative group cursor-pointer " >
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                        Training & Placement
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                    <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                        <Link to="/agrement"> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Agrements</li></Link>
                        <Link to="/corporate"> <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Corporate Tie UPS</li></Link>
                        <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">MOU</li>
                        <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Job-Fair 2024</li>
                        <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">TPO message</li>
                        <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">placement record</li>
                        <li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">placement </li>
                    </ul>
                </li >

                {/*Admission */}
                < li className=" relative group cursor-pointer  " >
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                        Admission
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                    <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">

                        <Link to={'/Commite'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">adimission Commite</li></Link>
                        <Link to={'/Discipline'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">discipline</li></Link>
                        <Link to={'/Ragging'}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Ragging</li></Link>

                        <Link to={"/Procedure"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                            procedure, eligibility criteria
                        </li></Link>
                       
                    </ul>
                </li >
                {/* Life Here */}
                < li className=" relative group cursor-pointer  " >
                    <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
                        Life Here
                        <RiArrowDropDownLine className="text-[24px]" />
                    </div>
                    <ul className="absolute z-20 left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm bg-[#ebf4f6] shadow-lg w-[120px] sm:w-[120px] md:w-[160px] lg:w-[200px]">
                        <Link to={"/srcem"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                            Shi Ram skill development center
                        </li></Link>
                        <Link to={"/events"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                            Events
                        </li></Link>
                        <Link to={"/welfair"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                            welfare Activities
                        </li></Link>
                        <Link to={"/sports"}><li className="px-1 sm:px-2 lg:px-4 py-1 lg:py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
                            Sports Activities
                        </li></Link>


                    </ul>
                </li >

                {/* Contact */}
                < NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? " text-[#088395] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2 "
                            : " hover:border-b-[0.19rem] hover:border-[#37b7c3] transition-all duration-300 pb-2 "
                    }
                >
                    <li className="hover:text-[#088395] text-[#071952]">Contact</li>
                </NavLink >
            </ul >
        </div >
    );
};

export default Navbar;