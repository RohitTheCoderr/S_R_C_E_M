import React from "react"
import btech from "../../../public/images/Homepage/btech.webp"
import bba from "../../../public/images/Homepage/bba.webp"
import bbadigital from "../../../public/images/Homepage/bbadigital.webp"
import bca from "../../../public/images/Homepage/bca.webp"
import bvoc from "../../../public/images/Homepage/bvoc.jpg"
import mba from "../../../public/images/Homepage/mba.webp"
import mca from "../../../public/images/Homepage/mca.webp"
import mtech from "../../../public/images/Homepage/mtech.webp"
import polytechinc from "../../../public/images/Homepage/polytechnic.webp"



const Courses =()=>{
    return(
        <div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-10 lg:px-40 flex flex-wrap items-center justify-center">
                <h1 className="xl:text-7xl lg:text-4xl md:text-2xl text-xl xl:m-8 lg:m-6 md:m-4 m-4  text-[#071952] font-sans">COURSES</h1>
                <div className="h-1 w-full bg-[#088395] "></div>
                <div className="flex flex-wrap justify-around xl:gap-y-12 lg:gap-y-8 md:gap-y-6 gap-y-4 xl:mt-12 lg:mt-6 md:mt-4 mt-4">
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={btech} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">B.Tech Programme</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395] font-bold">Duration- (3 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={bba} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">BBA</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (3 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={bca} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">BCA</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (3 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={mtech} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">M.Tech Programme</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (2 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={mba} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">MBA</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (2 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={mca} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">MCA</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (2 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={polytechinc} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Polytechnic Diploma</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (2 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={bbadigital} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">BBA Digital Marketing</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (3 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] hover:shadow-md shadow-slate-700 border-2 border-slate-300 ">
                        <img src={bvoc} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[22rem] lg:w-[14rem] md:w-[14rem] w-[14rem] "/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">B.VOC</h1>
                        <h1 className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#088395]  font-bold">Duration- (3 Years)</h1>
                        <button className="xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#088395]  font-bold text-white xl:py-[0.2rem] lg:py-[0.1rem] md:py[0.1rem] py-[0.1rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]   hover:shadow-md shadow-black">View More</button>
                    </div>
                </div>
                
                </div>
                
        </div>
    )
}
export default Courses;