import img from "../../../public/images/ARV.png";
import img1 from "../../../public/images/tata.jpeg";
import img2 from "../../../public/images/SBI.png";
import img3 from "../../../public/images/onetick.png";
import img4 from "../../../public/images/tanishq.png";
import img5 from "../../../public/images/kotak.png";
import img6 from "../../../public/images/NIIT.png";
import img7 from "../../../public/images/bajaj.png";
import img8 from "../../../public/images/finance bank.png";
import React from "react"
function Corporate() {
  return (
    <>
   
     <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono">
        Corporate Tie Ups
      </h1>
      <br />
     <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 bg-[#EBF4F6]">
       
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img7}
            className="w-30 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img2}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img3}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img1}
            className="w-24 sm:w-32 md:w-48 lg:w-60 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img5}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img6}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img4}
            className="w-24 sm:w-32 md:w-48 lg:w-60 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
          <img
            src={img8}
            className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
          />
        </div>
      </div>
      
    </>
  );
}
export default Corporate;
