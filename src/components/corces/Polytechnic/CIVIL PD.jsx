import React from "react";

const PCivil = () => {
    return (
        <div>
            <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white py-22 sm:py-32">
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6] font-mono">Civil Engineering Polytechnic Diploma</h1>
                    <p className="text-lg sm:text-xl mt-4">Welcome to the Civil Engineering Polytechnic Diploma program at Shri Ram Polytechnic</p>
                </div>
            </div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Civil Engineering is a key engineering discipline focusing on the design, construction, and maintenance of infrastructure, including essential works such as roads, bridges, canals, dams, and buildings.
                    <br />
                    The Polytechnic program provides students with hands-on experience in construction technologies, alongside the study of environmental concerns, material usage, structural analysis, and more. Students will work with the latest equipment in laboratories and gain real-world project experience. The aim is to prepare students to enter the workforce as capable and skilled civil engineers.
                    <br />
                    Specializations for further studies include Geotechnical Engineering, Structural Engineering, Construction Management, Water Resources Engineering, and others.
                </p>
                <div className="flex flex-wrap gap-4 justify-center my-10">
                    <img src="cources/Civil Engineering img1.jpeg" alt="Civil Engineering Image 2" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/Civil Engineering img2.jpeg" alt="Civil Engineering Image 1" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/Civil Engineering img3.jpeg" alt="Civil Engineering Image 3" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                </div>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    The Civil Engineering Diploma program offers in-depth studies in various subdisciplines, including:
                </p>
                <ul className="text-zinc-600 list-disc mx-5 font-semibold">
                    <li>Construction Technology</li>
                    <li>Surveying and Mapping</li>
                    <li>Material Science</li>
                    <li>Structural Engineering</li>
                    <li>Water Resources Engineering</li>
                    <li>Transportation Engineering</li>
                    <li>Building Construction</li>
                </ul>
                <h1 className="text-[#088395] text-xl md:text-2xl my-5 font-medium font-mono">Labs</h1>
                <ul className="text-zinc-600 list-disc mx-5 font-semibold">
                    <li>Transportation Engineering Lab</li>
                    <li>Auto-cad Lab</li>
                    <li>Fluid Mechanics Lab</li>
                    <li>Structural Analysis Lab</li>
                    <li>Surveying Lab</li>
                    <li>Concrete Lab</li>
                    <li>Engineering Geology Lab</li>
                </ul>
                <div className="flex flex-wrap gap-2 my-2">
                    <h1 className="text-[#088395] text-xl md:text-2xl font-medium my-4 font-mono">Approved University: J.C. Bose University of Science and Technology</h1>
                    <img src="cources/JC bose icon.png" alt="JC bose icon" className="h-24 md:h-32 lg:h-10" />
                </div>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    This diploma program is designed to equip students with practical skills required to work on diverse civil engineering projects, contributing to the growing infrastructure needs of the nation.
                </p>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium my-4 font-mono">Objectives</h1>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    The primary objectives of the Civil Engineering Diploma program are to:
                </p>
                <ul className="text-zinc-600 list-disc mx-5 font-semibold">
                    <li>Provide students with a solid foundation in civil engineering principles and technical skills.</li>
                    <li>Enable students to apply their knowledge to real-world civil engineering problems.</li>
                    <li>Equip students with the necessary skills for employment in various civil engineering sectors.</li>
                </ul>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium my-4 font-mono">Career Options</h1>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Civil Engineering graduates have ample career opportunities within government departments, construction companies, and infrastructure development agencies. Roles include working as site engineers, project managers, surveyors, or consultants.
                    <br />
                    With increasing demand for skilled professionals, career growth prospects are significant in both the private and public sectors.
                </p>
                <h1 className="text-[#088395] text-xl md:text-2xl my-4 font-medium font-mono">Note:</h1>
                <img src="cources/swayam icon.png" alt="Swayam Icon" className="h-24 md:h-32 lg:h-40 mx-auto my-4" />
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Completion of the Swayam course is a mandatory requirement for obtaining your diploma from J.C. Bose University of Science and Technology. It is essential to register and complete the course to ensure your eligibility for graduation.
                </p>
            </div>
        </div>
    );
}
export default PCivil;