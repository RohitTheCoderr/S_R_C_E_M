import React from "react"
import narender from "../../../public/images/Homepage/narendergupta.jpg";
import santosh from "../../../public/images/Homepage/santoshgupta.jpg";
import mcmittal from "../../../public/images/Homepage/mcmittal.jpg";

const Founders = () => {
  return (
    <div>
      <div className="w-[90%] m-auto flex flex-wrap items-center justify-center">
        <div className=" w-full flex gap-5 items-center justify-center">
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">OUR FOUNDERS</h1>
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
            </div>
        <div className="w-full flex flex-wrap justify-around xl:gap-y-12 lg:gap-y-8 md:gap-y-6 gap-y-4 xl:mt-12 lg:mt-6 md:mt-4 mt-4 ">
          <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
            <img
              src={narender}
              className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
            />
            <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center ">
              Shri Narender Gupta
            </h1>
          </div>
          <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
            <img
              src={mcmittal}
              className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
            />
            <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center">
              Shri M. C. Mittal
            </h1>
          </div>
          <div className="xl:h-[30rem] lg:h-[20rem] md:h-[20rem] h-[20rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] shadow-md shadow-slate-700 rounded-xl bg-gray-100">
            <img
              src={santosh}
              className="xl:h-[26rem] lg:h-[17rem] md:h-[17rem] h-[17rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] rounded-t-xl border-b-[#071952] border"
            />
            <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold text-center">
              CA Santosh Gupta
            </h1>
          </div>
        </div>
        <div className="h-1 w-full bg-[#088395]  xl:mt-16 lg:mt-12 md:mt-10 mt-10"></div>
      </div>
    </div>
  );
};
export default Founders;
