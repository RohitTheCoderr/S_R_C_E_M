import btech from "../../../public/images/Homepage/btech.webp"



const Courses =()=>{
    return(
        <div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-40 flex flex-wrap items-center justify-center">
                <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-xl xl:m-8 lg:m-6 md:m-4 m-2">Courses</h1>
                <div className="h-1 w-full bg-[#071952]"></div>
                <div className="">
                    <div className="xl:h-[24rem] lg:h-[16rem] md:h-[16rem] h-[16rem] xl:w-[24rem] lg:w-[16rem] md:w-[16rem] w-[16rem] shadow-md shadow-black">
                        <img src={btech} className="xl:h-[12rem] lg:h-[8rem] md:h-[8rem] h-[8rem] xl:w-[24rem] lg:w-[16rem] md:w-[16rem] w-[16rem]"/>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold">B.Tech Programme</h1>
                        <h1 className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 text-[#071952] font-mono font-bold">3 Years</h1>
                        <button className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] text-[0.8rem] xl:m-3 lg:m-2 md:m-1 m-1 bg-[#071952] font-mono font-bold text-white xl:py-[0.4rem] lg:py-[0.3rem] md:py[0.2rem] py-[0.2rem] xl:px-[1.5rem] lg:px-[1rem] md:px-[0.8rem] px-[0.8rem]  rounded-3xl shadow-md shadow-black">View More</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Courses;