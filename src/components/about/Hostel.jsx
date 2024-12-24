import React from "react";

const Hostel = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
          HOSTEL
        </h1>
        <br />
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
          Welcome to the Auditorium at Shri Ram College of Engineering &
          Management A Premier Venue for Innovation, Collaboration, and
          Excellence.
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, our hostel facilities
          are designed to provide students with an exceptional living
          environment that supports both academic and personal growth. Each
          hostel offers modern, well-furnished rooms that are spacious and
          thoughtfully designed to ensure maximum comfort and convenience. With
          features such as high-speed internet access, individual study areas,
          and ample storage, our accommodations are tailored to meet the needs
          of today’s students, allowing them to excel in their studies while
          enjoying a home-like atmosphere.
        </p>
       
        
        <div className="flex flex-col mt-12 md:flex-row md:flex-wrap items-center justify-center gap-4">
          <img
            src="public\images\hostel-4.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md "
          ></img>
          <img
            src="public\images\hostel2.jpg"
            className="h-auto w-3/4 md:w-1/3  lg:w-1/4 border-2 rounded-md  "
          ></img>
          <img
            src="public\images\hostel3.jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md "
          ></img>
        </div>
        <br />
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          Our commitment to student well-being extends beyond the classroom,
          with a range of amenities that enhance daily living. Students can
          savor healthy and delicious meals prepared in our hygienic dining
          halls, which cater to a variety of dietary preferences. For relaxation
          and social interaction, the hostels include recreational areas and
          common rooms where students can unwind, engage in group activities, or
          simply enjoy leisure time with friends. The facilities are maintained
          to the highest standards, ensuring a pleasant and clean living
          environment at all times.
          <br />
          <br />
          Safety and support are top priorities at SRCEM, and our hostel
          facilities reflect this commitment. Each hostel is equipped with 24/7
          security measures, including surveillance systems and trained
          personnel, to provide a secure environment for all residents.
          Additionally, our dedicated hostel staff is always available to
          address any concerns and offer assistance, ensuring that students have
          the support they need throughout their stay. By creating a safe,
          supportive, and comfortable living space, SRCEM enables students to
          focus on their academic pursuits and personal development, making
          their college experience both enriching and enjoyable.
        </p>
      </div>
    </>
  );
};
export default Hostel;
