import enquirywallpaper from "../../../public/images/Homepage/enquirywallpaper1.jpg"

const EnquirySection =()=>{
    return(
        <div>
            <div className="xl:h-[45rem] lg:h[30rem] md:h-[24rem] h-[20rem] xl:mt-16 lg:mt-8 md:mt-8 mt-8">
                <img src={enquirywallpaper} className="z-0 absolute hidden sm:block"/>
                <div>
                <div className="h-1 w-full bg-[#088395]  visible sm:block"></div>
                    <form className="z-10 absolute bg-black bg-opacity-35 h-auto w-auto xl:p-8 lg:p-6 md:p-4 p-2 grid  xl:gap-8 lg:gap-6 md:gap-3 gap-2 font-mono xl:ml-28 lg:ml-20 md:ml-16 ml-11 xl:mt-16 lg:mt-8 md:mt-6 mt-6 rounded-3xl">
                        <h1 className="text-[2rem] text-white font-extrabold  ">Enquiry Form</h1>
                        <input placeholder="Name" type="text" className="xl:h-12 lg:h-7 md:h-6 h-6 xl:w-[20rem] lg:w-[13rem] md:w-[13rem] w-[13rem]  outline-none xl:pl-3 lg:pl-3 md:pl-2 pl-2 rounded-md"></input>
                        <input placeholder="Email"  type="email" className="xl:h-12 lg:h-7 md:h-6 h-6 xl:w-[20rem] lg:w-[13rem] md:w-[13rem] w-[10rem]  outline-none xl:pl-3 lg:pl-3 md:pl-2 pl-2 rounded-md"></input>
                        <select className="xl:h-12 lg:h-7 md:h-6 h-6 xl:w-[20rem] lg:w-[13rem] md:w-[13rem] w-[10rem]  outline-none xl:pl-2 lg:pl-3 md:pl-2 pl-2 text-gray-400 rounded-md ">
                            <option className="">Choose Course</option>
                            <option className="text-black">BBA</option>
                            <option className="text-black">BCA</option>
                            <option className="text-black">B.tech</option>
                            <option className="text-black">MBA</option>
                            <option className="text-black">MCA</option>
                            <option className="text-black">M.tech</option>
                            <option className="text-black">B.VOC</option>
                            <option className="text-black">Polytechnic</option>
                            <option className="text-black">Polytechnic Diploma</option>
                            <option className="text-black">BBA Digital Marketing</option>
                        </select>
                        <textarea placeholder="Type Message" type="text" className="xl:h-[8rem] lg:h-[7rem] md:h-[6rem] h-[6rem] xl:w-[20rem] lg:w-[13rem] md:w-[13rem] w-[10rem]  outline-none xl:pl-3 lg:pl-3 md:pl-2 pl-2 rounded-md"></textarea>
                        <button className="bg-[#071952] text-white p-2 font-bold xl:text-[1.1rem] lg:text-[0.9rem] md:text-[0.7rem] text-[0.7rem]  rounded-md mb-2" >Enroll Now &rarr;</button>
                    </form>
                </div>
            </div>            
        </div>
    )
}
export default EnquirySection;