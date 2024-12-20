import img from "../../../public/images/activities.png"
 function Agrements() {
  return (
    <>
      <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono ">LOU between CSRBOX Foundation And SRCEM</h1><br/>
      <p className="text-zinc-600  text-sm md:text-base lg:text-lg my-4 text-justify">
        Letter of Understanding (LOU) between CSRBOX Foundation and Shri Ram
        College of Engineering & Management. The agreement outlines the
        partnership to implement IBM SkillsBuild platform and the
        responsibilities of each party, including onboarding learners, promoting
        social media outreach, and the termination clause.
      </p>
      <div className="grid place-items-center ">
        <img src={img}
          className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
        /> 
      </div>
    </>
  );
}
export default Agrements;