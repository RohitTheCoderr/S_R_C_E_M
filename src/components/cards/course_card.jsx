import React from "react";
import { Link } from "react-router-dom"
const CourseCard = ({ image, title, duration, path }) => {
    return (
        <div className="xl:h-[26rem] m-1 sm:m-4 md:h-[22rem] h-[18rem] xl:w-[20rem] md:w-[18rem] w-[14rem] border-2 border-slate-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
            <img src={image} className="xl:h-[14rem] md:h-[12rem] h-[10rem] w-full object-cover rounded-t-md transition-all duration-300 ease-in-out" />
            <div className="p-4">
                <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] font-semibold text-[#088395] leading-tight transition-all duration-300 ease-in-out">{title}</h1>
                <h2 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] font-medium text-[#071952] mt-2">{`Duration - (${duration})`}</h2>
                <Link to={path}>
                    <button className="w-full xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] bg-[#088395] text-white hover:text-[#071952] font-bold rounded-md py-2 mt-4 transition-transform transform hover:bg-[#37b7c3] hover:scale-105 hover:shadow-lg shadow-gray-950">
                        View More
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default CourseCard;
