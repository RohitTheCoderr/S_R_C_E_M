import React from "react";
const HomepageAbout = () => {
    return (
        <div className=" w-[90%] m-auto font-sans my-[3rem] ">
            <div className=" w-full flex gap-5 items-center justify-center">
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">about us</h1>
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
            </div>
            <div className="mt-[2rem] flex flex-wrap-reverse gap-1 sm:gap-2 md:gap-4 lg:gap-8 items-center justify-center">
                <div className=" text-center lg:w-[40%] rounded shadow object-cover ">
                    <h1 className="xl:text-[1.7rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem] my-6 text-[#071952] font-semibold">SRCEM College of Engineering & Management, Delhi-NCR</h1>
                    <p className=" md:text-[1.2rem] sm:text-[1rem] text-[0.8rem] my-0 text-[#071952]">We are SHRI RAM COLLEGE OF ENGINEERING & MANAGEMENT one of the best engineering & Management college in Delhi-NCR. At Shri Ram College of Engineering & Management, we recognize that shaping institutions is as challenging asshaping the future itself. It demands serious and sustained efforts, a relentless pursuit of excellence, hard work, and dedication. With a state-of-the-art campus and a faculty of distinguished professionals, we are committed to providing top-notch education.</p>
                </div>
                <div className=" w-auto h-full md:h-[28rem] lg:h-[35rem] object-cover">
                    <img src="images/Homepage/stpic5.jpg" className=" h-full w-full rounded-sm" />
                </div>
            </div>
        </div>
    )
}
export default HomepageAbout