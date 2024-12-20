import stimg1 from "../../../public/images/Homepage/stpic5.jpg"

const HomepageAbout =()=>{
    return(
        <div>
            <div className="lg:h-[40rem] md:h-[20rem] h-10  flex flex-wrap lg:mx-16 md:mx-8 mx-4 justify-between lg:mt-28">
                <div className=" w-6/12 ">
                    <h1 className="lg:text-8xl md:text-4xl text-2xl font-mono lg:m-8 md:m-4 m-2">About us</h1>
                    <h1 className="lg:text-5xl md:text-3xl text-xl font-mono lg:m-8 md:m-4 m-2">SRCEM College of Engineering & Management, Delhi-NCR</h1>
                    <p className="lg:text-lg md:text-base text-sm font-mono lg:m-8 md:m-4 m-2">We are SHRI RAM COLLEGE OF ENGINEERING & MANAGEMENT one of the best engineering & Management college in Delhi-NCR. At Shri Ram College of Engineering & Management, we recognize that shaping institutions is as challenging asshaping the future itself. It demands serious and sustained efforts, a relentless pursuit of excellence, hard work, and dedication</p>
                </div>
                <div className="imagediv bg-blue-400 w-5/12 ">
                    <img src={stimg1} />
                </div>
            </div>
        </div>
    )
}
export default HomepageAbout