import React from "react";

const Transport = () => {
  return (
    <>
      <div className="w-[90%] my-[2rem] m-auto font-sans">
        <div className="flex gap-5 mb-5 items-center justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase"> Transportation</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>
        <br />
        <p className="text-gray-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          Welcome to the Auditorium at Shri Ram College of Engineering &
          Management A Premier Venue for Innovation, Collaboration, and
          Excellence.
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, we believe that a
          smooth and efficient commute is crucial for your academic success and
          overall well-being. That’s why we’ve designed a comprehensive
          transportation network to ensure that your journey to and from campus
          is as hassle-free as possible.
        </p>

        <div className="p-2 flex w-full m-auto my-8 flex-wrap items-center justify-center gap-6">
          <img
            src="images/images (1).jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] sm-[] border-2 border-black rounded-md  "
          ></img>

          <img
            src="images/download (12).jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] sm-[] border-2 border-black rounded-md "
          ></img>
        </div>

        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          SRCEM own the best fleet of comfortable buses that provides direct
          connectivity from Delhi, Faridabad, Ballabgarh, Bhiwadi, Gurgaon,
          Sohna, Palwal, Kosi, Hodal, Punhana, Pingawa, Hathin NCR. The buses
          are of latest models well equipped with all the facilities to offer a
          comfortable travelling. In order to ensure a happy travelling, ratio
          of students and seats are kept intact without overloading the buses.
          <br />
          The engines and other machinery are regularly serviced and follows all
          the rules and standards laid by the traffic department. Hundreds of
          students, faculty and staff members enjoy calm and happy travelling
          from numerous cities and villages on daily basis. The impressive
          transportation service is offered at a nominal cost. Thus, the
          transportation facilities have served as a crucial part of the service
          backbone of this Best Engineering College Palwal.
        </p>
        <br />
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Why Choose Our Transportation Services?
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
        <span className="font-semibold">Convenient Routes: </span>  Our fleet of modern, well-maintained buses covers a wide range of routes to accommodate students from various locations. Whether you're coming from the heart of the city or the suburbs, we've got you covered.<br />

        <span className="font-semibold">Timely Departures: </span>  Punctuality is key. Our buses adhere to a strict schedule, ensuring you reach the campus on time, every time. We understand the value of your time and strive to make your commute as efficient as possible.<br />

        <span className="font-semibold">Comfortable Rides: </span>  Enjoy a comfortable and relaxing journey in our air-conditioned buses equipped with cushioned seating. Our priority is to make your travel experience as pleasant as your time on campus.<br />

        <span className="font-semibold">Safe & Secure:</span>   Your safety is our top concern. Our buses are staffed with trained drivers and equipped with the latest safety features to provide a secure environment throughout your journey.<br />

         <span className="font-semibold">co-Friendly Options:</span> We are committed to sustainability. Our transportation system includes energy-efficient vehicles designed to reduce our carbon footprint and contribute to a greener environment.<br /></p>

        <img
          src="public\images\2.jpg"
          className="h-auto w-full md:w-2/3 lg:w-1/2 border-2 rounded-md "
        />

      </div>

    </>
  );
};
export default Transport;
