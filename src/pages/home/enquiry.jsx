import React from "react"

const EnquirySection = () => {
    return (
        <div
            className="w-full bg-cover py-4 bg-center bg-no-repeat font-sans mt-[3rem] "
            style={{ backgroundImage: `url("images/Homepage/enquirywallpaper1.jpg")` }} // Set the background image dynamically
        >
            <div className="w-full sm:w-[90%] m-auto flex items-center justify-center md:justify-start">

                <form className="bg-black bg-opacity-50 w-full max-w-lg m-4 p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl text-white font-extrabold mb-6">Enquiry Form</h1>
                    <input
                        placeholder="Name"
                        type="text"
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    />
                    <input
                        placeholder="Phone"
                        type="number"
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    />
                    <select
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    >
                        <option className="">Choose Course</option>
                        <option className="text-black">BBA</option>
                        <option className="text-black">BCA</option>
                        <option className="text-black">B.Tech</option>
                        <option className="text-black">MBA</option>
                        <option className="text-black">MCA</option>
                        <option className="text-black">M.Tech</option>
                        <option className="text-black">B.VOC</option>
                        <option className="text-black">Polytechnic</option>
                        <option className="text-black">Polytechnic Diploma</option>
                        <option className="text-black">BBA Digital Marketing</option>
                    </select>
                    <textarea
                        placeholder="Type Message"
                        className="h-32 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 py-2 outline-none text-[#088395] resize-none"
                    ></textarea>
                    <button
                        className="bg-[#088395] hover:bg-[#37b7c3] text-white px-6 py-2 font-bold text-lg rounded-md transition duration-300"
                    >
                        Enroll Now &rarr;
                    </button>
                </form>
            </div>
        </div>

    )
}
export default EnquirySection;