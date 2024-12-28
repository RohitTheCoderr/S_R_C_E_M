import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const TeamCard = ({ name, role, imgSrc, icon }) => {
    return (
        <div className="flex justify-center items-center pt-6 pb-8 px-2 sm:px-0" >
            <div className="w-[14rem] sm:w-[16.2rem] h-80 sm:h-[24rem] border-[1px] border-gray-400 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fafafa] flex flex-col items-center text-center group  hover:shadow-custom outline-none hover:font-bold">
                <div className="w-full h-[16rem] outline-none flex justify-center items-start rounded-t-lg overflow-hidden  ">
                    <img src={imgSrc} alt={name} className="w-[100%] h-auto bg-slate-100 object-cover" />
                </div>
                <div className="p-2">
                    <h5 className="text-lg font-semibold text-[#088395] group-hover:text-black">{name}</h5>
                    <p className=" text-sm text-gray-600 ">{role}</p>
                </div>
                <div className='w-[50%] h-12 flex justify-around items-center '>
                    <div><FaInstagram className='text-[1.2rem] text-[#088395] hover:text-[#071952]' /></div>
                    <div><FaTwitter className='text-[1.2rem] text-[#088395] hover:text-[#071952]' /></div>
                    <div><FaLinkedinIn className='text-[1.2rem] text-[#088395] hover:text-[#071952]' /></div>
                    <div><FaWhatsapp className='text-[1.2rem] text-[#088395] hover:text-[#071952]' /></div>
                </div>
            </div>
        </div>
    );
};


export default TeamCard;