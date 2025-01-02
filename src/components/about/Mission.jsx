import React from "react";

const Mission = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="flex flex-col mt-12 md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src="public\images\download.jpg"
            className="h-auto w-full md:w-1/3 lg:h-60 lg:w-1/3 rounded-sm shadow-sm shadow-black self-center"
          ></img>
          <div  className="text-center md:text-left">
            <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-center ">
              "Our Mission"
            </h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
              "At Shri Ram College of Engineering & Management our mission is to
              cultivate a dynamic learning community that fosters intellectual
              curiosity, creativity, and personal growth. Through rigorous
              academic programs, supported by innovative teaching and
              state-of-the-art facilities, we empower our students to become
              critical thinkers, effective communicators, and ethical leaders in
              a global society. Grounded in a commitment to diversity, equity,
              and inclusion, we strive to provide a supportive environment where
              all individuals can thrive academically, socially, and personally.
              By promoting collaboration, interdisciplinary approaches, and
              experiential learning opportunities, we prepare our graduates to
              tackle complex challenges and make meaningful contributions to
              their professions and communities. Join us at Shri Ram College of
              Engineering & Management, where excellence meets opportunity.{" "}
              <br /> 
              “Our mission is to provide advanced knowledge and education to
              develop students into creative and thinking leaders, technocrats,
              entrepreneurs and managers with analytical minds who excel in
              solving the most complex problems and complicated situations.”
            </p>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="flex flex-col mt-12 md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div  className="text-center md:text-left">
            <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-center ">
              "Our Vision"
            </h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
              "At Shri Ram College of Engineering & Management we envision a
              future where education transcends boundaries, empowering
              individuals to innovate, lead, and transform society for the
              betterment of all. Our vision is to be a beacon of academic
              excellence, known for nurturing intellectual curiosity and
              fostering a spirit of discovery. Through a commitment to
              cutting-edge research, transformative learning experiences, and
              global engagement, we aspire to equip our students with the
              knowledge, skills, and ethical foundation needed to navigate a
              rapidly changing world. Guided by principles of inclusivity and
              sustainability, we aim to cultivate a diverse community that
              embraces collaboration, creativity, and lifelong learning.
              Together, we strive to inspire innovation, drive progress, and
              shape the leaders of tomorrow." <br/><br/>
               “Our vision is to strive for excellence to create a state-of-the-art education facility
              dedicated to transforming the nation into a world leader in the
              field of engineering, technology and management.”
            </p>
          </div>
          <img
            src="public\v1.jpg"
            className="h-auto w-full md:w-1/3 lg:h-60 lg:w-1/3 rounded-sm shadow-sm shadow-black self-center"
          ></img>
        </div>
      </div>
    </>
  );
};
export default Mission;
