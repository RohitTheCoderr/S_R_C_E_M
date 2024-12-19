import React from "react";
import BcaImg1 from "../../../public/cources/bca-img1.jpg";
import BcaImg2 from "../../../public/cources/bca-img2.png";
import BcaImg3 from "../../../public/cources/bca-img3.jpg";
import JCBoseicon from "../../../public/cources/JC bose icon.png";
import swayamicon from "../../../public/cources/swayam icon.png";

const BCA = () => {
    return (
        <div>
            <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl font-medium text-center">
                Bachelor of Computer Applications (BCA)
            </h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                Welcome to the Bachelor of Computer Applications (BCA) program at Shri Ram College of Engineering and Management,
                where we prepare students to excel in the everevolving field of information technology. Our BCA program is designed
                to provide a solid foundation in computer applications and technology, equipping you with the skills and knowledge
                needed for a successful career in the IT industry.
            </p>
            <div className="flex flex-wrap gap-4 justify-center my-10">
                <img src={BcaImg3} alt="BBA Program Image 3" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                <img src={BcaImg2} alt="BBA Program Image 2" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
                <img src={BcaImg1} alt="BBA Program Image 1" className="h-40 w-full md:w-1/3 lg:h-60 lg:w-1/4 rounded shadow object-cover" />
            </div>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                The Bachelor of Computer Applications (BCA) is a full time three-year Undergraduate program divided into six semesters
                that provides students with a fundamental and advanced understanding of Information Technology and Computer Applications.
                The BCA course subjects cover programming languages such as C++ and JAVA, networking, computer basics, multimedia systems,
                data structures, web-based application development, Programming using PHP, JAVA, Oracle, Operating Systems, Web Scripting
                and Development and software engineering. With the rapid growth of IT industry in India, the demand of computer
                professional is increasing day by day. After completing BCA, a student can go for MCA which is a master course in computer
                application and is considered equivalent to Engineering Course (B.Tech). The BCA course has emerged as one of the most
                popular ones, especially in countries like USA, UK & other European Countries which offers students greater study and
                career opportunities.
            </p>
            <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Program Overview</h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                The BCA program at Shri Ram College of Engineering and Management is a comprehensive threeyear undergraduate course that
                integrates core computer science principles with practical applications. Our curriculum is designed to cover a broad range
                of IT topics, ensuring you are wellprepared for various technical and professional roles.
            </p>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                The Bachelor of Computer Applications (BCA) program is a comprehensive, fulltime course spanning three years and divided
                into six semesters. This program is designed to equip students with practical skills to address various challenges
                associated with computer systems and applications.
            </p>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                Given the rapid expansion of the IT industry in India, there is a growing demand for skilled computer professionals.
                Upon completion of the BCA program, graduates have the opportunity to pursue a Master of Computer Applications (MCA),
                which is recognized as equivalent to an engineering degree (B.Tech).
            </p>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-justify">
                The BCA curriculum includes a diverse range of subjects such as:
            </p>
            <ul className="text-zinc-600 list-disc mx-5">
                <li className="text-sm md:text-base lg:text-lg my-1">Programming in C Language (Basic and Advanced)</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Networking</li>
                <li className="text-sm md:text-base lg:text-lg my-1">World Wide Web</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Data Structures</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Advanced C Language Programming</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Database Management</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Mathematics</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Software Engineering</li>
                <li className="text-sm md:text-base lg:text-lg my-1">ObjectOriented Programming with C++</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Visual Basic</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Programming using PHP, Java, and Oracle</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Operating Systems</li>
                <li className="text-sm md:text-base lg:text-lg my-1">Web Scripting and Development</li>
            </ul>

            <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Career Opportunities :</h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                There are many career prospects available after BCA, including ample job opportunities and professional courses in both
                the private and public sectors along with their scope, earning potential and future career prospects as Software developer
                trainee , Data scientist, Bank operations, Technical analyst, Web developer, E-commerce Executive, Teacher , Digital
                marketer, Cyber security expert etc. After BCA Self employment option is also available. You can do freelancing or develop
                your own software if you have that much skill. There are many software MNCs (Multi National Companies) which provides job
                to the BCA graduates.
            </p>
            <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Approved University : J.C. Bose University of Science and Technology</h1>
            <img src={JCBoseicon} alt="JC bose icon" className="h-24 md:h-32 lg:h-40 mx-auto my-4" />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                This extensive curriculum ensures that students gain a thorough understanding of key concepts and technologies in computer
                applications, preparing them for various roles in the IT industry..
            </p>
            <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Why Choose Our BCA Program?</h1>
            <ul className="text-zinc-600 list-disc mx-5">
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">Extensive Curriculum:</span>
                    Covering essential topics such as programming, data structures, database management, software engineering, web development, and network security.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">HandsOn Training:</span>
                    Emphasis on practical experience through lab sessions, projects, and realworld simulations.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">Expert Faculty:</span>
                    Learn from highly qualified and experienced instructors who bring both academic and industry insights.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">Modern Facilities:</span>
                    Access to stateoftheart computer labs equipped with the latest technologies and tools.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">IndustryRelevant Skills:</span>
                    Develop competencies in programming, software development, and IT management aligned with current industry standards.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">Diverse Career Opportunities:</span>
                    Prepare for roles such as Software Developer, Web Designer, Database Administrator, Network Administrator, and more.
                </li>
                <li className="text-sm md:text-base lg:text-lg my-1">
                    <span className="font-bold">Holistic Development:</span>
                    Focus on enhancing critical thinking, problemsolving, and communication skills.
                </li>
            </ul>

            <h1 className="text-[#088395] text-xl md:text-2xl font-medium">Note:-</h1>
            <img src={swayamicon} alt="Swayam Icon" className="h-24 md:h-32 lg:h-40 mx-auto my-4" />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
                It is essential note that completing the Swayam course is a mandatory requirement for obtaining your degree from J.C.
                Bose University of Science and Technology. The Swayam course is designed to enhance your academic experience and ensure
                you acquire essential skills relevant to your field of study. It is imperative that you register for and complete the
                course as stipulated in the curriculum guidelines. Failure to fulfill this requirement will affect your eligibility for
                graduation.
            </p>

        </div>
    )
}
export default BCA;