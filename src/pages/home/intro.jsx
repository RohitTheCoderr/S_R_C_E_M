import React from "react";
import schoolimg1 from "../../../public/images/Homepage/schoolImg1.png";
import schoolimgcover from "../../../public/images/Homepage/schoolimgcover.png";
import forwardArrow from "../../../public/images/Homepage/forwardarrow.png";

export function IntroPage() {
  return (
    <div>
      <div className="h-[36rem] relative bg-gray-600">
        <img src={schoolimg1} alt="schoolimg1" className="w-full h-full z-0" />
        <img
          src={schoolimgcover}
          alt="schoolimgcover"
          className="w-full h-full z-10 relative -top-[36rem] opacity-80"
        />
        <p className="text-white z-20 lg:text-6xl md:text-4xl text-2xl font-mono flex justify-center relative -top-[64rem]">
          Find Your&nbsp;
          <span className="bg-[#088395] rounded-md px-2">Future</span>
          &nbsp;Today!
        </p>
        <p className="text-white z-20 lg:text-4xl md:text-3xl text-2xl font-light flex justify-center relative -top-[62rem]">
          SHRIRAM COLLEGE OF ENGINEERING & MANAGEMENT
        </p>
        <div className="bg-white bg-opacity-70 lg:h-16 md:h-13 h-10 lg:w-[30rem] md:w-[24rem] w-[16rem] z-30 relative m-auto -top-[59rem] rounded-xl flex text-center ">
          <h3 className="m-auto text-center lg:text-[1.6rem] md:text-[1.2rem] text-[0.9rem] font-semibold font-mono left-6 flex">
            Contact For Your Enrollment &nbsp;
            <div className="bg-[#088395] lg:h-12 md:h-10 h-6 lg:w-12 md:w-10 w-6 rounded-full flex items-center">
              <img
                src={forwardArrow}
                className="lg:h-7 md:h-5 h-3 lg:w-7 md:w-5 w-3 m-auto items-center"
              />
            </div>
          </h3>
        </div>
      </div>
      
    </div>
  );
}
