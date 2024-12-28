import React from "react"

function Corporate() {
  return (
    <>
      <div className='w-[95%] md:[90%] lg:w-[85%] m-auto mt-8'>

        <div className=" w-full flex gap-5 items-center my-8 justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase text-center">  Corporate Tie Ups</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 ">

          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/ARV.png"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/bajaj.png"
              className="w-30 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/tata.jpeg"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/onetick.png"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/tata.jpeg"
              className="w-24 sm:w-32 md:w-48 lg:w-60 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/kotak.png"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/NIIT.png"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/tanishq.png"
              className="w-24 sm:w-32 md:w-48 lg:w-60 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-32 lg:h-40">
            <img
              src="images/finance bank.png"
              className="w-24 sm:w-32 md:w-48 lg:w-64 hover:scale-110 hover:shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Corporate;
