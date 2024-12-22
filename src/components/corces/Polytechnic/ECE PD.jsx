import React from "react";

const Ece = () => {
    return (
        <div>
            <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white py-22 sm:py-32">
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6] font-mono">Diploma in Electrical Engineering</h1>
                    <p className="text-lg sm:text-xl mt-4">Welcome to the Diploma in Electrical Engineering program at Shri Ram College of Engineering and Management</p>
                </div>
            </div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Students will explore key areas such as electrical circuit design, power systems, control systems, and electronic devices. The curriculum integrates theoretical knowledge with practical skills through laboratory work and real-world projects, ensuring that graduates are well-prepared for the demands of the industry.
                </p>
                <div className="flex flex-wrap gap-4 justify-center my-10">
                    <img src="cources/Diploma in Electrical Engineering img1.jpeg" alt="Diploma in Electrical Engineering 1" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/Diploma in Electrical Engineering img2.jpg" alt="Diploma in Electrical Engineering 3" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/Diploma in Electrical Engineering img3.jpg" alt="Diploma in Electrical Engineering 2" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                </div>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    The Diploma in Electrical Engineering programme is a technical skill-building course designed to make students job-ready by the courseend. It is a 3-year programme that deals with the technical knowledge of electrical devices and elements of different power sources and industrial application of the same.The academic skills of the students with main focus on subjects like Electrical & Electronics Engg. Materials, Electrical Engg. Design & Drawing, Electrical Machines, Electrical Measurement & Measuring Instruments, Electronics Devices & Circuits, Transmission & Distribution of Electrical Power, Utilization of Electrical Energy, Installation & Maintenance of Electrical Equipment, Electrical Workshop and Project Work.
                </p>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    The Department is equipped with following laboratories with latest equipments required for teaching and research
                </p>
                <ul className="list-disc text-zinc-600 mx-5 text-sm md:text-base lg:text-lg font-bold">
                    <li>Principle of Electrical Engineering</li>
                    <li>Electrical Network</li>
                    <li>Electrical Engineering Design and Drawing</li>
                    <li>Electrical Machines</li>
                    <li>Electrical Measuring Instruments and Instrumentation</li>
                    <li>Computer Networks</li>
                    <li>Computer Programming Using Python</li>
                    <li>Operating Systems</li>
                    <li>Web Development Using PHP</li>
                    <li>Network Security</li>
                    <li>Electrical Engineering Design & Drawing</li>
                    <li>Programmable Logic Controllers and Microcontrollers</li>
                    <li>Project Work </li>
                    <li>Electrical Power</li>
                    <li>Industrial Electronics and Control of Drives</li>
                </ul>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Our experienced faculty, state-of-the-art facilities, and industry-relevant coursework prepare graduates for a wide range of career opportunities in electrical engineering, including roles in power generation, electronics, automation, and maintenance. Additionally, the program lays a strong foundation for further studies or specialized certifications in the field.
                </p>
                <div className="flex flex-wrap gap-2 my-2">
                    <h1 className="text-[#088395] text-xl md:text-2xl font-medium font-mono">Approved University : J.C. Bose University of Science and Technology</h1>
                    <img src="cources/JC bose icon.png" alt="JC bose icon" className="h-24 md:h-32 lg:h-10" />
                </div>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    We are excited to announce that Diploma in Electrical Engineering has been officially approved by the Haryana State Board of Technical Education. This approval affirms that the course meets the high standards set by the board and enhances its credibility and value. With this accreditation, you can be assured that the program is recognized and supported at a state level, further contributing to your professional development and career prospects.
                </p>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium font-mono">Why Pursue a Diploma in Electrical Engineering at Shri Ram College of Engineering & Management?</h1>
                <ul className="list-disc text-zinc-600 mx-5">
                    <li className="text-sm md:text-base lg:text-lg my-1"><span className="font-bold">In-Depth Curriculum:</span> Master core electrical engineering concepts, including circuit design, power systems, control systems, and electronics.</li>
                    <li className="text-sm md:text-base lg:text-lg my-1"><span className="font-bold">Hands-On Training:</span> Gain practical experience through laboratory work and real-world projects, applying theoretical knowledge to solve engineering problems.</li>
                    <li className="text-sm md:text-base lg:text-lg my-1"><span className="font-bold">Experienced Faculty:</span> Learn from industry professionals and academic experts who provide insights into current technologies and practices.</li>
                    <li className="text-sm md:text-base lg:text-lg my-1"><span className="font-bold">Experienced Faculty:</span> Learn from industry professionals and academic experts who provide insights into current technologies and practices.</li>
                    <li className="text-sm md:text-base lg:text-lg my-1"><span className="font-bold">Career Preparation:</span> Prepare for diverse career opportunities in sectors such as power generation, automation, electronics, and maintenance.</li>
                </ul>
            </div>
        </div>
    );
}
export default Ece;