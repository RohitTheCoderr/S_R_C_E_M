import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./css/slick.css";
// import "./css/slick-theme.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[50%] border border-gray-600 p-2 sm:p-4 rounded-lg right-[-1.5rem] sm:right-[-2rem] transform translate-x-[50%] translate-y-[-50%] z-20 cursor-pointer group hover:bg-[#088395] transition-colors duration-300"
            onClick={onClick}
        >
            <FaArrowRight className="text-lg sm:text-xl text-[#088395] group-hover:text-white " />
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[50%] border border-gray-600 p-2 sm:p-4 rounded-lg left-[-1.5rem] sm:left-[-2rem] transform translate-x-[-50%] translate-y-[-50%] z-20 cursor-pointer group hover:bg-[#088395] transition-colors duration-300"
            onClick={onClick}
        >
            <FaArrowLeft className="text-lg sm:text-xl text-[#088395] group-hover:text-white" />
        </div>
    );
};

const teamMembers = [
    { name: " Shri Narender Gupta", role: "FOUNDER", imgSrc: `images/Homepage/narendergupta.jpg` },
    { name: "CA Santosh Gupta", role: "FOUNDER", imgSrc: `images/Homepage/santoshgupta.jpg` },
    { name: " Shri M. C. Mittal", role: "FOUNDER", imgSrc: `images/Homepage/mcmittal.jpg` },
];





const TeamCard = ({ name, role, imgSrc, icon }) => {
    return (
        <div className="flex justify-center items-center pt-6 pb-8 px-2 sm:px-0" >
            <div className="w-[14rem] sm:w-[16.2rem] h-80 sm:h-[24rem] border-[1px] rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fafafa] flex flex-col items-center text-center group  hover:shadow-custom outline-none hover:font-bold">
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

const Founders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for large screens
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        nextArrow: <NextArrow />, // Use custom next arrow
        prevArrow: <PrevArrow />, // Use custom prev arrow
        responsive: [
            {
                breakpoint: 1100, // Screens smaller than 1024px (md/lg)
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 1024, // Screens smaller than 768px (sm/md)
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 750, // Screens smaller than 600px (xs/sm)
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                }
            }
        ]
    };
    
   
    return (
        <div className="w-[70vw] sm:w-[80vw] md:[90vw] xl:w-[82vw] m-auto my-[3rem]">
             <div className="flex gap-3 sm:gap-5 my-4 items-center justify-center">
                <div className="h-[3px] w-[3rem] sm:w-[4rem] bg-[#088395] "></div>
                <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">OUR FOUNDERS</h1>
                <div className="h-[3px] w-[3rem] sm:w-[4rem] bg-[#088395] "></div>
            </div>
            <Slider {...settings} >
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        imgSrc={member.imgSrc}
                        icon={member.icon}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Founders;









// import React from "react"
// import narender from "../../../public/images/Homepage/narendergupta.jpg";
// import santosh from "../../../public/images/Homepage/santoshgupta.jpg";
// import mcmittal from "../../../public/images/Homepage/mcmittal.jpg";

// const Founders = () => {
//   return (
//     <div>
//       <div className="w-[90%] m-auto flex flex-wrap items-center justify-center">
//         <div className=" w-full flex gap-5 items-center justify-center">
//                 <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">OUR FOUNDERS</h1>
//                 <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
//             </div>
//         <div className="w-full flex flex-wrap justify-around xl:gap-y-12 lg:gap-y-8 md:gap-y-6 gap-y-4 xl:mt-12 lg:mt-6 md:mt-4 mt-4 ">
//           <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
//             <img
//               src={narender}
//               className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
//             />
//             <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center ">
//               Shri Narender Gupta
//             </h1>
//           </div>
//           <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
//             <img
//               src={mcmittal}
//               className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
//             />
//             <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center">
//               Shri M. C. Mittal
//             </h1>
//           </div>
//           <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
//             <img
//               src={santosh}
//               className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
//             />
//             <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center">
//               CA Santosh Gupta
//             </h1>
//           </div>
//         </div>
//         <div className="h-1 w-full bg-[#088395]  xl:mt-16 lg:mt-12 md:mt-10 mt-10"></div>
//       </div>
//     </div>
//   );
// };
// export default Founders;
