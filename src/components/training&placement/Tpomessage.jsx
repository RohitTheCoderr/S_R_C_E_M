import React from "react";
import tpo from "../../../public/images/5.jpg";
function Tpomessage() {
  return (
    <div>
      <div
        className="relative w-full h-96 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono  my-4 underline">
        TPO MESSAGE
      </h1>
      <div class="flex flex-wrap items-center justify-between">
        <h1 class="text-4xl font-bold text-black w-full text-center mb-4">
          Mr. Mahasingh
        </h1>

        <img
          src={tpo}
          alt="TPO Image"
          class="w-full max-w-[400px] mr-4 mb-4 sm:mb-0"
        />

        <p class="text-zinc-600 text-sm sm:text-base lg:text-lg my-3 mr-2 ml-6 text-justify flex-1">
          Being a Training and Placement officer I establish the vital link
          between students and prospective employers to facilitate the training
          and placement of students as they begin their career after Diploma
          graduation and Post graduation. In this age of liberalization,
          privatization, and globalization, there is an ever-increasing industry
          requirement for professionals who have high employability index and
          required competencies with an inquisitive mindset for innovations.{" "}
          <br />
          SRCEM, Shri Ram College of Engineering and Management, Palwal,
          Approved by AICTE, New Delhi, DTE, Govt. of Haryana Affiliated to
          J.C.Bose UST, YMCA, Faridabad, HSBTE, Panchkula, Shri Vishwakarma
          Skill University University in Delhi NCR region has proven
          capabilities of our Students by inviting increasing number of new
          Industries for Placement opportunities like TCS, INFOSYS, CAPGEMINI,
          LTI, ZYCUS, ATOS-Syntel, Mahindra, TATA Motors, RDC Concrete, and many
          more. We have a separate TPO Cell which arranges campus Interviews and
          helps students to develop leadership, interviewing, and communication
          skills. <br />
          We are continuously preparing and training our students for cracking
          aptitude tests. Partnerships with great companies enrich the SRCEM
          experience for our students while strengthening commitment for great
          Industry-Institute Interaction. We also organize industrial visits for
          students, training seminars, conferences, and expert lectures to
          prepare them for opportunities that await them.
        </p>
      </div>
    </div>
  );
}
export default Tpomessage;
