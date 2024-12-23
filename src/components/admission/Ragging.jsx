import React from "react";

function Ragging() {
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
          <h1 className="text-3xl sm:text-5xl font-bold  text-sky-200">
            RAGGING COMMITTEE
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold  text-sky-200">
          Shri Ram College of Engineering & Management
          </h1>
        </div>
      </div>

      <div className=" lg:mt-5 ml-7">
        <p className="font-normal text-sky-800">
          At Shri Ram College of Engineering & Management (SRCEM), we are
          committed to fostering a safe, respectful, and inclusive environment
          for all students. The Ragging Committee plays a crucial role in
          upholding this commitment by actively working to prevent and address
          any incidents of ragging within our campus community. Our primary goal
          is to ensure that every student experiences a welcoming and supportive
          atmosphere throughout their academic journey.
        </p>
      </div>
    </>
  );
}

export default Ragging;
