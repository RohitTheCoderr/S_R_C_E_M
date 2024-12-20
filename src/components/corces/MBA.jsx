import React from "react";

const MBA = () => {
    return (
        <div>
            <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white py-22 sm:py-32">
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]"> Master of Business Administration (MBA)</h1>
                    <p className="text-lg sm:text-xl mt-4">Welcome to the Master of Business Administration (MBA) program at Shri Ram College of Engineering and Management.</p>
                </div>
            </div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Our MBA program is designed to cultivate the next generation of business leaders and innovators through a comprehensive
                    curriculum, practical learning experiences, and a focus on strategic management skills.
                </p>
                <div className="flex flex-wrap gap-4 justify-center my-10">
                    <img src="cources/mba-img1.jpg" alt="BBA Program Image 1" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/mba-img2.jpg" alt="BBA Program Image 2" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                    <img src="cources/mba-img3.jpeg" alt="BBA Program Image 3" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                </div>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium">
                    Program Overview
                </h1>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    The MBA program at Shri Ram College of Engineering and Management is a rigorous and dynamic two-year course aimed at developing
                    high-caliber professionals who are well-equipped to handle the complexities of modern business environments. Our program
                    combines core business principles with specialized knowledge in various fields, preparing students to excel in diverse
                    management roles.
                </p>
                <div className="flex flex-wrap gap-2 my-2">
                    <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Approved University : J.C. Bose University of Science and Technology</h1>
                    <img src="cources/JC bose icon.png" alt="JC bose icon" className="h-24 md:h-32 lg:h-10" />
                </div>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Why Choose Our MBA Program?</h1>
                <ul className="text-zinc-600 list-disc mx-5">
                    <li className="text-sm md:text-base lg:text-lg my-1">
                        <span className="font-bold">Comprehensive Curriculum:</span>
                        Our MBA curriculum covers a broad spectrum of business disciplines, including finance, marketing, operations,
                        human resources, and strategy. This holistic approach ensures that you gain a well-rounded understanding of
                        all facets of business management.
                    </li>
                    <li className="text-sm md:text-base lg:text-lg my-1">
                        <span className="font-bold">Specializations:</span>
                        In addition to core courses, students have the opportunity to specialize in areas such as Digital Marketing,
                        Finance, Human Resource Management, International Business, and Information Technology. These specializations
                        allow you to tailor your education to align with your career aspirations and industry interests.
                    </li>
                    <li className="text-sm md:text-base lg:text-lg my-1">
                        <span className="font-bold">Experienced Faculty:</span>
                        Learn from a distinguished team of faculty members who bring a wealth of experience from academia and industry.
                        Our professors are dedicated to providing high-quality education and mentorship, ensuring that you receive
                        valuable insights and practical knowledge.
                    </li>
                    <li className="text-sm md:text-base lg:text-lg my-1">
                        <span className="font-bold">Practical Learning:</span>
                        The MBA program emphasizes experiential learning through case studies, live projects, internships, and simulations.
                        These hands-on experiences enable you to apply theoretical concepts to real-world scenarios, enhancing your
                        problem-solving and decision-making skills.
                    </li>
                    <li className="text-sm md:text-base lg:text-lg my-1">
                        <span className="font-bold">Supportive Learning Environment:</span>
                        Benefit from a collaborative and supportive learning community that fosters teamwork, innovation, and critical
                        thinking. Our diverse student body and interactive learning methods create an enriching educational experience.
                    </li>
                </ul>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Join Us</h1>
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    Embark on a transformative journey with our MBA program at Shri Ram College of Engineering and Management. Develop the
                    skills, knowledge, and network needed to advance your career and make a significant impact in the business world.
                </p>
                <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Note:-</h1>
                <img src="cources/swayam icon.png" alt="Swayam Icon" className="h-24 md:h-32 lg:h-40 mx-auto my-4" />
                <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                    It is essential note that completing the Swayam course is a mandatory requirement for obtaining your degree from J.C.
                    Bose University of Science and Technology. The Swayam course is designed to enhance your academic experience and ensure
                    you acquire essential skills relevant to your field of study. It is imperative that you register for and complete the
                    course as stipulated in the curriculum guidelines. Failure to fulfill this requirement will affect your eligibility
                    for graduation.
                </p>
            </div>
        </div>
    )
}
export default MBA;