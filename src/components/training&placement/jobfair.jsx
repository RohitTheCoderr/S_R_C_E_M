import React from "react";
import job1 from "../../../public/images/job1.jpg";
import job2 from "../../../public/images/job2.jpg";
import job3 from "../../../public/images/job3.jpg";
import job4 from "../../../public/images/job4.jpg";
import job5 from "../../../public/images/job5.jpg";
import job6 from "../../../public/images/job1.jpg";
function Jobfair() {
  return (
    <div className="mb-4 ">
      <div
        className="relative w-full h-96 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://drprem.com/wellness/wp-content/uploads/sites/7/2021/07/corporate-tie-ups.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-22 sm:py-32">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">
            Job Fairs
          </h1>
        </div>
      </div>
      <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono  my-4">
        JOB FAIR 2024
      </h1>
      <p className="text-zinc-600  text-sm md:text-base lg:text-lg my-3 mr-2  ml-6 text-justify">
        Shri Ram college of Engineering & Management (SRCEM) has organized a
        day-long 'Job & Internship Fair-2024' in college premises.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10  bg-[#EBF4F6]">
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job1}
            className="w-full h-full object-contain"
            alt="Job 1"
          />
        </div>
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job2}
            className="w-full h-full object-contain"
            alt="Job 2"
          />
        </div>
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job3}
            className="w-full h-full object-contain"
            alt="Job 3"
          />
        </div>
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job4}
            className="w-full h-full object-contain"
            alt="Job 4"
          />
        </div>
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job5}
            className="w-full h-full object-contain"
            alt="Job 5"
          />
        </div>
        <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={job6}
            className="w-full h-full object-contain"
            alt="Job 6"
          />
        </div>
      </div>
      <p className="text-zinc-600  text-sm md:text-base lg:text-lg my-3 mr-2  ml-6 text-justify">
        A total number of 28+ national and multinational companies including
        Banks, Telecoms, Electronics, Software & IT Companies, Financial
        Institutions, Non-profit Organizations, Pharmaceuticals, NBFS, HR
        professional from training institutions has participated in the fair.
        The lamp lighting ceremony was graced by our College trustees Shri
        Narender Gupta ji (MLA Faridabad), CA Shri Santosh Gupta ji, Shri M.C
        Mittal ji, Director Dr. S.K Gupta, Adv Ravinder Chauhan (President of
        District Bar Association, Palwal), Adv Dharmender Tewatia, Adv Sunil
        Dagar, Dr. Ranjan Kumar Singh, Dr. Chhavi Rathi, Dr. Surinder Kumar and
        all corporates members. On this occasion, the speakers appreciated all
        the SRCEM staff members for organizing such a beautiful event. <br/> In his
        speech, Our Guest of Honor, Adv Ravinder chauhan remarked that this kind
        of fair will establish a link between industry and academia which will
        be beneficial for both parties. He added that students will also get the
        opportunity to apply for jobs to various corporate organizations under
        one umbrella. Besides, they can prepare themselves according to the
        requirements of the recruiters. <br/> Dr. S.K Gupta Director/Principal (SRCEM)
        thanked all the participants of the fair and showed his keen interest in
        arranging this type of event at SRCEM on a regular basis. Apart from the
        guests, All Staff members, officials, and personnel of various corporate
        organizations were present at the ceremony. More than 500+ graduates &
        Postgraduate students participated in this 'Job Fair and 150+ Students
        got the offer letter from the companies.
      </p>
    </div>
  );
}
export default Jobfair;
