import img from "../../../public/images/activities.png"
 function Agrements() {
  return (
    <>
       <div
        className="relative w-full h-96 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-22 sm:py-32">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6] font-mono">
          Agreements
          </h1>
        </div>
                  
      </div>
      <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono  my-4">LOU between CSRBOX Foundation And SRCEM</h1><br/>
      <p className="text-zinc-600  text-sm md:text-base lg:text-lg my-3 mr-2  ml-2 text-justify">
        Letter of Understanding (LOU) between CSRBOX Foundation and Shri Ram
        College of Engineering & Management. The agreement outlines the
        partnership to implement IBM SkillsBuild platform and the
        responsibilities of each party, including onboarding learners, promoting
        social media outreach, and the termination clause.
      </p>
      <div className="grid place-items-center">
  <img src={img}
    className="w-full h-64 max-w-sm md:max-w-md lg:max-w-md rounded-lg shadow-lg mb-4"
  />
</div>

    </>
  );
}
export default Agrements;