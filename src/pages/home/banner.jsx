import scholarshipimg from "../../../public/images/Homepage/scholarship.svg"
import teacherimg from "../../../public/images/Homepage/teacher.svg"
import libraryimg from "../../../public/images/Homepage/library.svg"
import moneyimg from "../../../public/images/Homepage/money.svg"
const Banner = ()=>{
    return(
        <div>
            <div className="bg-[#088395] lg:px-12 md:px-8 px-4 rounded-2xl flex flex-wrap m-4 lg:mx-16 md:mx-8 mx-4 justify-evenly">
                <div className="hover:bg-[#37B7C3] h-64 w-64 hover:rounded-3xl lg:p-3 md:p-2 p-1 hover:shadow-md hover:shadow-black">
                    <div className="flex justify-between">
                        <img src={scholarshipimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10  "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">01</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Scholarship Facility</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#EBF4F6]">Explore our scholarship options avaliable at the college to help you achieve your academic goals!.</p>
                </div>
                <div className="hover:bg-[#37B7C3] h-64 w-64 hover:rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-md hover:shadow-black">
                    <div className="flex justify-between">
                        <img src={teacherimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10  "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">02</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Skilled Lecturers</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#EBF4F6]">State-of-the-art laboratory with latest equipment to pool the bridge between industry and curriculum</p>
                </div>
                <div className="hover:bg-[#37B7C3] h-64 w-64 hover:rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-md hover:shadow-black">
                    <div className="flex justify-between">
                        <img src={libraryimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10  "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">03</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Beti Bachao&Padhao</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#EBF4F6]">Special scholarship for girls to success the vision &quot;Beti Bachao, Beti Padhao&quot; of Honorable PM Mr. Narender Modi.</p>
                </div>
                <div className="hover:bg-[#37B7C3] h-64 w-64 hover:rounded-3xl lg:p-3 md:p-2 p-1  hover:shadow-md hover:shadow-black">
                    <div className="flex justify-between">
                        <img src={moneyimg} alt="scholarshipimg" className="lg:h-16 lg:w-16 md:h-13 md:w-13 h-10  "/>
                        <h1 className="lg:text-6xl md:text-4xl text-2xl text-white  ">04</h1>
                    </div>
                    <h2 className="mt-3 lg:text-2xl font-semibold text-white">Affordable Price</h2>
                    <p className="mt-3 lg:text-[16px] font-semibold text-[#EBF4F6]">Well stocked library with more than 30,239 volumes of text books/jourals/e-journals and magazines</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Banner;