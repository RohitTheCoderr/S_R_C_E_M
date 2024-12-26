import React from "react";
import stimg1 from "../../../public/images/Homepage/stpic5.jpg"
const HomepageAbout =()=>{
    return(
        <div>
            <div className="xl:h-[42rem] lg:h-[34rem] md:h-[30rem]  px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-40 flex flex-wrap gap-4 justify-center lg:mt-16 md:mt-8 mt-4">
                <div className="w-full md:w-1/2  lg:w-1/2 rounded shadow object-cover lg:p-8 md:p-4 p-1 ">
                    <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-[2rem] font-mono lg:m-8 md:m-4 m-2 text-[#071952]">ABOUT US</h1>
                    <div className="h-1 w-full bg-[#088395]"></div>
                    <h1 className="xl:text-[1.7rem] lg:text-[1rem] md:text-[1.3rem] text-[1.1rem] font-mono lg:m-8 md:m-4 m-2 text-[#071952]">SRCEM College of Engineering & Management, Delhi-NCR</h1>
                    <p className="xl:text-[1.1rem] lg:text-[0.8 rem] md:text-[.8rem] text-[0.8rem] font-mono lg:m-8 md:m-4 m-2 text-[#071952]">We are SHRI RAM COLLEGE OF ENGINEERING & MANAGEMENT one of the best engineering & Management college in Delhi-NCR. At Shri Ram College of Engineering & Management, we recognize that shaping institutions is as challenging asshaping the future itself. It demands serious and sustained efforts, a relentless pursuit of excellence, hard work, and dedication. With a state-of-the-art campus and a faculty of distinguished professionals, we are committed to providing top-notch education.</p>
                </div>
                <div className="md:h-full w-full md:w-1/2 lg:w-1/2  md:mt-14 mt-0 rounded shadow object-cover">
                    <img src={stimg1} className="xl:h-[35rem] lg:h-[25rem] md:h-[25rem]" />
                </div>
            </div>
        </div>
    )
}
export default HomepageAbout