import React from "react";

const Civil = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
          Civil Lab
        </h1>
        <br />
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
          Welcome to the Civil Lab at Shri Ram College of Engineering &
          Management! Building the Future with Cutting-Edge Civil Engineering
          Innovations.
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, our Civil Lab is a
          cornerstone of our commitment to excellence in civil engineering
          education. Designed to provide an immersive and practical learning
          experience, our lab equips students with the tools and knowledge
          needed to tackle the challenges of modern civil engineering.
        </p>
      
        <div className="flex flex-col mt-12 md:flex-row md:flex-wrap items-center justify-center gap-4">
          <img
            src="public\images\DSC_1892.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md  "
          ></img>

          <img
            src="public\images\DSC_1893.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md"
          ></img>
        </div>
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
        Why Choose Our Civil Lab?
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
        1.Advanced Equipment and Facilities: Our Civil Lab boasts state-of-the-art equipment and facilities, including soil testing apparatus, concrete testing machines, structural analysis tools, and geotechnical instrumentation. These resources enable you to conduct detailed analyses and experiments essential for understanding and solving real-world engineering problems.<br/>

2.Hands-On Learning: Experience practical, hands-on learning through a variety of experiments and projects. Our lab allows you to apply theoretical concepts to practical scenarios, enhancing your understanding of material properties, structural integrity, and construction techniques.<br/>

3.Expert Guidance: Learn from a team of highly qualified faculty members who bring extensive industry experience and academic expertise. Our professors are dedicated to providing personalized instruction and mentorship, helping you excel in both your coursework and research.<br/>

4.Innovative Research Opportunities: Engage in cutting-edge research and development projects. Our lab supports a range of research interests, from sustainable construction practices to advanced materials science, giving you the opportunity to contribute to pioneering advancements in civil engineering.<br/>

5.Safety and Best Practices: We prioritize safety and adhere to the highest standards of laboratory practices. Our facilities are designed to ensure a secure environment for conducting experiments and learning essential engineering techniques.<br/>

6.Career Preparation: Gain practical experience that enhances your employability and career prospects. Our lab provides the skills and knowledge necessary for success in various civil engineering fields, including construction, infrastructure development, and urban planning.
        </p>
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
        What We Offer?
        </p>
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
        -Comprehensive Lab Courses: Our curriculum includes detailed lab sessions covering material testing, structural analysis, geotechnical engineering, and environmental engineering.<br/>

-Practical Experiments: Conduct experiments that simulate real-world engineering challenges, from soil compaction tests to concrete strength evaluations.<br/>

-Research and Development: Participate in innovative research projects and explore new technologies and methodologies in civil engineering.<br/>

-Industry Links: Benefit from our strong industry connections and professional network, providing valuable opportunities for internships and career advancement.
        </p>
      </div>
    </>
  );
};
export default Civil;
