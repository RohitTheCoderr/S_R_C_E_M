import React from "react";

const Computer = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
          Computer Lab
        </h1>
        <br />
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, our Computer Lab is a
          hub of technological innovation and learning, designed to provide
          students with the practical skills and knowledge needed to excel in
          today’s digital world. Our lab offers a state-of-the-art environment
          where theory meets practice, equipping you with the expertise to
          thrive in the ever-evolving field of computer science and engineering.
        </p>
        <div className="flex flex-col mt-12 md:flex-row md:flex-wrap items-center justify-center gap-4">
          <img
            src="public\images\DSC_1728.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md  "
          ></img>

          <img
            src="public\images\DSC_1720.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md "
          ></img>
        </div>
        <br />

<p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
Why Our Computer Lab is the Ideal Learning Space?
</p>
<p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
1 Advanced Technology: Our Computer Lab features cutting-edge hardware and software, including high-performance PCs, servers, and the latest software development tools. With access to powerful computing resources and modern applications, you’ll be able to work on complex projects and simulations with ease.<br/>

2 Hands-On Learning: Experience interactive and immersive learning through hands-on exercises and real-world projects. Our lab supports a wide range of activities, from programming and software development to data analysis and network management, allowing you to apply theoretical concepts to practical scenarios.<br/>

3 Expert Guidance: Benefit from the support of our experienced faculty members who are experts in various areas of computer science and engineering. Our professors provide personalized instruction, mentorship, and support to help you navigate your coursework and research projects.<br/>

4 Research and Development Engage in innovative research and development activities within our lab. Whether you’re interested in artificial intelligence, cybersecurity, cloud computing, or software engineering, our lab provides the tools and resources to explore cutting-edge technologies and contribute to significant advancements.<br/>

5 Collaborative Environment: Work collaboratively with peers on group projects and assignments. Our lab is designed to foster teamwork and collaboration, providing an environment that encourages knowledge sharing and collective problem-solving.<br/>

6 Career Preparation: Prepare for a successful career in technology with practical experience that enhances your skills and knowledge. Our lab experiences are tailored to meet industry standards, giving you a competitive edge in the job market and preparing you for roles in software development, IT management, and beyond.
</p><br/>
<p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
Our different labs are as follows :-
</p>
<img
          src="public\images\1 (1).jpeg"
          className="h-auto w-full md:w-2/3 lg:w-1/2 border-2 rounded-md "
        />
        <br/>
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
        What We Offer?
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
        -Comprehensive Lab Sessions: Our curriculum includes detailed lab sessions on programming languages, software engineering, database management, networking, and more.<br/>

-Practical Projects: Engage in projects that simulate real-world challenges and develop solutions using industry-standard tools and technologies.<br/>

-Research Opportunities: Explore research topics and participate in projects related to emerging technologies and innovations in computing.<br/>

-Industry-Ready Skills: BeGain hands-on experience and practical skills that align with current industry trends and employer expectations.
        </p>
      </div>
    </>
  );
};
export default Computer;
