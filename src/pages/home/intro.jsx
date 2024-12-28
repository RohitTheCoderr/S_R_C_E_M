import React from "react";

function IntroPage() {
  return (
    <div className="w-screen relative bg-gray-600 font-sans">
      {/* Background Image */}
      <img src="images/Homepage/schoolimg1.png" alt="Background" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-8">
        <p className="text-2xl md:text-4xl lg:text-6xl">
          Find Your&nbsp;
          <span className="bg-[#088395] rounded-md px-2 shadow-md shadow-black">Future</span>
          &nbsp;Today!
        </p>
        <div className=" bg-black px-4 py-2  bg-opacity-40 w-full">
          <p className="scrolling-text ">
          <span className="text-xl md:text-3xl lg:text-4xl font-semibold  ">
            SHRI RAM COLLEGE OF ENGINEERING & MANAGEMENT
          </span>
          </p>
          </div>
      </div>
    </div>


  );
}

export default IntroPage;