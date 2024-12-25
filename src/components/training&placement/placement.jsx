import React from "react";
import placement1 from "../../../public/images/placement.jpeg";
import placement2 from "../../../public/images/placement1.jpeg";
import placement3 from "../../../public/images/placement2.jpeg";
import placement4 from "../../../public/images/capture.png";
function Placement() {
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
            Placement
          </h1>
        </div>
                  
      </div>
      <h1 className="font-medium text-[#088395] text-2xl md:text-3xl lg:text-4xl text-center font-mono  my-4 underline">
        “SRCEM is an exciting place to study and grow”
      </h1>
      <div class="bg-gray-100 rounded-lg p-6 my-4 w-full shadow-md">
        <p class="text-zinc-800 text-sm sm:text-base lg:text-lg">
          The Training and Placement Cell (T&P Cell) at Shri Ram College of
          Engineering & Management plays a crucial role in bridging the gap
          between academia and industry. Our dedicated team is committed to
          facilitating comprehensive career development for students by
          providing them with various placement opportunities while ensuring
          they are well-prepared to meet industry standards. We engage in
          proactive collaboration with leading companies to gather insights on
          recruitment trends and skill requirements across diverse fields. The
          T&P Cell organizes regular workshops, mock interviews, and industry
          visits to enhance students’ technical and soft skills, ensuring they
          are equipped to excel in their chosen careers. Additionally, we host
          corporate lectures and networking events that allow students to
          interact with industry leaders and gain valuable insights into the
          professional world. Our mission is to empower students to secure
          meaningful employment and embark on successful career paths.
        </p>
      </div>
      <div class="flex flex-wrap gap-12 justify-center mt-8 mb-8">
        <img
          src={placement1}
          alt="Placement 1"
          class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src={placement2}
          alt="Placement 2"
          class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
        <img
          src={placement3}
          alt="Placement 3"
          class="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>
      <div class="bg-gray-100 rounded-lg p-6 my-4 w-full shadow-md">
        <p class="text-zinc-800 text-sm sm:text-base lg:text-lg">
          Furthermore, firstyear Engineering and Management students are
          encouraged to participate in diverse competitions—including debates,
          group discussions, PowerPoint presentations, and essay writing—to
          enhance their confidence and improve their reading, writing, and
          communication skills.
        </p>
        <p class="text-zinc-800 text-sm sm:text-base lg:text-lg">
          The Training & Placement Cell is one of an integral part of our
          college. We ensure that the all students get campus placement and a
          decent platform to start their career. The T & P Cell is active
          throughout the year. Members of TPO cell contact Head (HR) of
          different corporate entities for collecting information regarding
          recruitment in various disciplines. Corporate meets and Industrial
          visits are organized on regular basis and help the students to
          interact with corporate leaders to know about their aptitude,
          attitude, knowledge, personality etc.
        </p>
        <p class="text-zinc-800 text-sm sm:text-base lg:text-lg">
          Engineering & Management students are encouraged to participate in the
          various competitions such as debate, group discussion, PowerPoint
          presentation, and essay writing in order to enhance their confidence,
          reading, writing and communication skills. PDP gets more attention in
          our college since Ist year programs.
        </p>
      </div>
      <h1 class="font-bold ml-8 mb-10 mt-8 mr-8">MoU Signed with KVCH PVT. LTD. NOIDA, FROYO TECHOLOGIES PVT. LTD. FARIDABAD, CISCO VELOCIS, MMTC PAMP, AMCAT ASPIRING MIND etc.</h1>
<div className="flex flex-col justify-center items-center  h-full sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4  mb-8 hover:scale-105 hover:shadow-xl transition-all duration-300">
  <img
    src={placement4}
    className="w-full sm:w-48 md:w-64 lg:w-72 h-auto sm:h-48 md:h-64 lg:h-80 mb-2 hover:scale-100 transition-all duration-300"
  />
</div>

    </>
  );
}
export default Placement;
