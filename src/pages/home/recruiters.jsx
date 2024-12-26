import React from "react"
import marq from "../../../public/images/Homepage/marq.png"
import marq1 from "../../../public/images/Homepage/marq1.png"
import marq2 from "../../../public/images/Homepage/marq2.png"
import marq3 from "../../../public/images/Homepage/marq3.png"
import marq4 from "../../../public/images/Homepage/marq4.png"
import marq5 from "../../../public/images/Homepage/marq8.png"
import marq6 from "../../../public/images/Homepage/marq6.png"
import marq7 from "../../../public/images/Homepage/marq7.jpeg"


const RecruiterSection =()=>{
    return(
        <div>
            <div className="font-mono h-[18rem] w-full  px-4 py-2 md:py-4 md:px-8 lg:py-10 lg:px-40 flex flex-wrap justify-around">
                <div className="xl:w-[20rem]">
                    <h1 className="xl:text-[3rem] text-[#071952] underline underline-offset-8">OUR TRUSTED PARTNERS</h1>
                </div>
                <div className="grid">
                    <div className="xl:h-[12rem] xl:w-[40rem] grid grid-cols-2 grid-rows-4 gap-4 xl:mt-2 lg:mt-8 sm:grid-cols-4 sm:grid-rows-2 mt-4">
                        <img src={marq} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq1} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq2} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq3} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq4} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq5} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq6} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        <img src={marq7} className="h-20 w-44 shadow-md shadow-black rounded-md"/>
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default RecruiterSection