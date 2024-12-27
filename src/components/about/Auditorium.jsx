import React from "react";

const Auditorium = () => {
  return (
    <>
      <div className=" w-[90%] m-auto my-[2rem] font-sans">
       
        <div className="flex gap-5 mb-5 items-center justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">Auditorium</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>
        <br />
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          "Welcome to the Auditorium at Shri Ram College of Engineering &
          Management A Premier Venue for Innovation, Collaboration, and
          Excellence."
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, our Auditorium serves
          as a pivotal space for academic and extracurricular activities,
          fostering an environment of learning, innovation, and community
          engagement. Designed to accommodate a wide range of events, our
          auditorium is equipped with state-of-the-art facilities to support
          lectures, seminars, workshops, and cultural activities.
        </p>
       
        <div className="flex flex-col mt-12 md:flex-row md:flex-wrap items-center justify-center gap-4">
          <img
            src="images/download (8).jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] border-2 border-black rounded-md  "
          ></img>
          <img
            src="images/download (5).jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] border-2 border-black rounded-md  "
          ></img>
          <img
            src="images/download (6).jpg"
            className="h-auto md:h-[15rem] w-full md:w-[25rem] border-2 border-black rounded-md "
          ></img>
        </div>
        
        <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Why Our Auditorium Stands Out?
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg my-4 text-justify">
         <span className="font-semibold"> 1.Modern Design and Facilities: </span> ium features a contemporary
          design with advanced audiovisual systems, including high-definition
          projection equipment, surround sound, and professional lighting. The
          spacious seating arrangement ensures clear visibility and acoustics
          for all attendees, creating an optimal environment for various events.
          <br />
          <br />

          <span className="font-semibold">2.Versatile Event Space: </span> he Auditorium is designed to host a diverse
          array of events, from academic lectures and conferences to cultural
          performances and workshops. Its flexible seating arrangements and
          adaptable space make it an ideal venue for both large-scale and
          intimate gatherings. <br />
          <br />
          <span className="font-semibold"> 3.Comfort and Accessibility: </span> ith comfortable seating, climate
          control, and accessible facilities, our Auditorium ensures a pleasant
          experience for all participants. It is designed to accommodate guests
          with special needs, ensuring inclusivity and accessibility for
          everyone. <br />
          <br />
          <span className="font-semibold">4.Professional Support: </span> Our dedicated team provides comprehensive
          support for event planning and execution. From technical assistance to
          logistical coordination, we are committed to ensuring that each event
          is conducted smoothly and successfully.
          <br />
          <br />
          <span className="font-semibold">   5.Promoting Academic and Cultural Excellence: </span>  Auditorium is a hub
          for promoting academic excellence and cultural enrichment. It hosts a
          variety of events, including guest lectures by industry leaders,
          academic conferences, cultural festivals, and student presentations,
          contributing to a vibrant campus life.
          <br />
          <br />
          <span className="font-semibold">6.State-of-the-Art Technology: </span> Equipped with cutting-edge technology,
          the Auditorium offers seamless integration of multimedia presentations
          and interactive sessions. This ensures an engaging and immersive
          experience for both presenters and attendees.
        </p>
        <br />
          <br />
          <p className="text-gray-600 font-semibold text-sm md:text-base lg:text-lg my-4 text-justify">
          Key Features:
          </p>
          <span className="font-semibold">-Advanced Audiovisual Systems: </span> High-definition projection, professional sound, and lighting equipment for a superior event experience.<br/><br/>
          <span className="font-semibold">-Flexible Seating Arrangements: </span>  space to accommodate various types of events, from formal conferences to informal gatherings.<br/><br/>
<span className="font-semibold">-Comfortable and Accessible: </span> for maximum comfort and accessibility, with features to accommodate all guests.<br/><br/>
<span className="font-semibold">-Professional Event Support: </span> echnical and logistical support to ensure the success of every event.<br/><br/>
<span className="font-semibold">-Engaging Venue: </span>  lectures, workshops, seminars, cultural performances, and more.
      </div>
    </>
  );
};
export default Auditorium;
