import React from "react"
import scholarshipimg from "../../../public/images/Homepage/scholarship.svg"
import teacherimg from "../../../public/images/Homepage/teacher.svg"
import libraryimg from "../../../public/images/Homepage/library.svg"
import moneyimg from "../../../public/images/Homepage/money.svg"
const Banner = ()=>{
    return(
        <div className="relative mt-[-4rem] z-50">
            <div className=" lg:px-24 md:px-12 px-6  rounded-2xl flex flex-wrap lg:mx-16 md:mx-8 mx-4 justify-evenly lg:my-0 md:my-20 my-16  ">
                <div className="bg-[#088395] h-64 w-64 rounded-3xl lg:p-3 md:p-2 p-1 hover:shadow-darker shadow-black lg:my-2 md:my-2 my-4 ">
                    <div className="flex justify-between">
                        <img src={scholarshipimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10 mix-blend-plus-lighter "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">01</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Scholarship Facility</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#9ecdd7]">Explore our scholarship options avaliable at the college to help you achieve your academic goals!.</p>
                </div>
                <div className="bg-[#088395] h-64 w-64 rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-darker shadow-black  lg:my-2 md:my-2 my-4  ">
                    <div className="flex justify-between">
                        <img src={teacherimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10 mix-blend-plus-lighter  "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">02</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Skilled Lecturers</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#9ecdd7]">State-of-the-art laboratory with latest equipment to pool the bridge between industry and curriculum</p>
                </div>
                <div className="bg-[#088395] h-64 w-64 rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-darker shadow-black lg:my-2 md:my-2 my-4 ">
                    <div className="flex justify-between">
                        <img src={libraryimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10  mix-blend-plus-lighter"/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">03</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Beti Bachao&Padhao</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#9ecdd7]">Special scholarship for girls to success the vision &quot;Beti Bachao, Beti Padhao&quot; of Honorable PM Mr. Narender Modi.</p>
                </div>
                <div className="bg-[#088395] h-64 w-64 rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-darker shadow-black lg:my-2 md:my-2 my-4 ">
                    <div className="flex justify-between">
                        <img src={moneyimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10 mix-blend-plus-lighter "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">04</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Affordable Price</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#9ecdd7]">Well stocked library with more than 30,239 volumes of text books/jourals/e-journals and magazines</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner;