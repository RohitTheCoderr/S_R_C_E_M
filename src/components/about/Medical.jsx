import React from "react";

const Medical = () => {
  return (
    <>
     <div className="w-[90%] my-[2rem] m-auto font-sans">
        <div className="flex gap-5 mb-5 items-center justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">medical</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Health is one the most crucial aspects and is the focal point of
          concern for SRCEM. The institute has arranged separate facilities for
          boys and girls with dedicated doctors ready to serve round the clock.
          The health care centre at SRCEM is run by highly experienced visiting
          medical officer and a healthcare assistant. The centre is equipped
          with latest medical apparatuses and adequate medicines that are ready
          to respond any medical issues in no time. Any injuries and medical
          problems are dealt with immediately by the medical and support staff.
        </p>
        <br />
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          Regular injury prevention and remedial measures are also shared with
          the staff and students from time to time to keep them ready. Regular
          meetings of doctors are arranged with the management to keep the
          medical centre up to date. The medical officers also make surprise
          visits of the hostel mess and food courts and share their suggestions
          to improve the hygiene in food and living.
        </p>
        <br />
        <br />
        <div className="p-2 flex w-full m-auto my-8 flex-wrap items-center justify-center gap-6">
          <img
            src="public\images\DSC_1949.jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] border-2 border-black rounded-md "
          ></img>

          <img
            src="public\images\DSC_1952.jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] border-2 border-black rounded-md"
          ></img>
        </div>
       
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          Vaccinations and yearly medical check-ups are also conducted in the
          centre to ensure that students stay fit and fine or their studies and
          sports activities. In association with the Indian Red-cross society,
          the centre has also organized several workshops and blood donation
          camps that has provided a proven stand in social services to the
          institution.
          <br />
          Thus, SRCEM, the Top Engineering College in Palwal has also served in
          the physical and mental well-being of students and people by accepting
          it as their integral duty.
        </p>
        <br />
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Medical Facility
        </p>
        
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          The Medical facilities here at Shri Ram College of Engineering &
          Management, Palwal is well equipped. It has separate inpatient
          facility for male and female students. The health centre provides
          quality health care in a comfortable and confidential environment. The
          centre has 2 beds and adequately supplied medicine cabinet. The health
          centre is manned by a visiting medical officer and a healthcare
          assistant to provide excellent medical care to all the students, staff
          and faculty at no cost. The Medical Officer manages the various
          aspects of the facility. They provide quality health care to everyone,
          evaluates the quality of services, maintains the overall efficiency of
          the centre and decides the procedures to be followed in case of
          emergency. Also, vaccinations and yearly checks ups are done at this
          facility.
        </p>
        <br />
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Red Cross Unit
        </p>
    
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          The unit keeps close lesen with Indian re cross society and jointly
          organize various programme, workshops and blood donation camps.
        </p>
      </div>
    </>
  );
};
export default Medical;
