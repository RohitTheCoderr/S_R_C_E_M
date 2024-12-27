import React from "react"

const RecruiterSection = () => {
    return (
            <div className="w-[90%] m-auto font-sans my-[3rem]">
                <div className="w-full flex gap-3 sm:gap-5 my-6 items-center justify-center">
                    <div className="h-[3px] w-[3rem] sm:w-[4rem] bg-[#088395] "></div>
                    <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">OUR TRUSTED PARTNERS</h1>
                    <div className="h-[3px] w-[3rem] sm:w-[4rem] bg-[#088395] "></div>
                </div>
                    <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 grid-rows-4 sm:grid-rows-2 mt-6 p-3 justify-items-center ">
                        <img src="images/Homepage/marq.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq1.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq2.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq3.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq4.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq5.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq6.png" className="h-20 w-44 shadow-md shadow-black rounded-md" />
                        <img src="images/Homepage/marq7.jpeg" className="h-20 w-44 shadow-md shadow-black rounded-md" />

                    </div>
            </div>
    )
}
export default RecruiterSection