import React from "react"
function Agrements() {
  return (
    <>
      <div className='w-[95%] md:[90%] lg:w-[85%] m-auto my-8'>

        <div className=" w-full flex gap-5 items-center my-8 justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase text-center"> LOU between CSRBOX Foundation And SRCEM</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>

        <p className="text-zinc-600  text-sm md:text-base lg:text-lg my-4 text-justify">
          Letter of Understanding (LOU) between CSRBOX Foundation and Shri Ram
          College of Engineering & Management. The agreement outlines the
          partnership to implement IBM SkillsBuild platform and the
          responsibilities of each party, including onboarding learners, promoting
          social media outreach, and the termination clause.
        </p>
        <div className="grid place-items-center ">
          <img
            src="images/activities.png"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </>
  );
}
export default Agrements;
