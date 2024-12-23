import React from "react";

const Auditorium = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
          Auditorium
        </h1>
        <br />
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
          "Welcome to the Auditorium at Shri Ram College of Engineering &
          Management A Premier Venue for Innovation, Collaboration, and
          Excellence."
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          At Shri Ram College of Engineering & Management, our Auditorium serves
          as a pivotal space for academic and extracurricular activities,
          fostering an environment of learning, innovation, and community
          engagement. Designed to accommodate a wide range of events, our
          auditorium is equipped with state-of-the-art facilities to support
          lectures, seminars, workshops, and cultural activities.
        </p>
        <br />
        <br />
        <div className="flex flex-col mt-12 md:flex-row md:flex-wrap items-center justify-center gap-4">
          <img
            src="public\images\download (8).jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md  "
          ></img>
          <img
            src="public\images\download (5).jpg"
            className="h-auto w-3/4 md:w-1/3  lg:w-1/4 border-2 rounded-md  "
          ></img>
          <img
            src="public\images\download (6).jpg"
            className="h-auto w-3/4 md:w-1/3 lg:w-1/4 border-2 rounded-md "
          ></img>
        </div>
        <br />
        <br />
        <p className="text-zinc-800 text-sm md:text-base lg:text-lg my-4 text-justify">
          Why Our Auditorium Stands Out?
        </p>
        <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          1.Modern Design and Facilities: Our Auditorium features a contemporary
          design with advanced audiovisual systems, including high-definition
          projection equipment, surround sound, and professional lighting. The
          spacious seating arrangement ensures clear visibility and acoustics
          for all attendees, creating an optimal environment for various events.
          <br />
          <br />
          2.Versatile Event Space: The Auditorium is designed to host a diverse
          array of events, from academic lectures and conferences to cultural
          performances and workshops. Its flexible seating arrangements and
          adaptable space make it an ideal venue for both large-scale and
          intimate gatherings. <br />
          <br />
          3.Comfort and Accessibility: With comfortable seating, climate
          control, and accessible facilities, our Auditorium ensures a pleasant
          experience for all participants. It is designed to accommodate guests
          with special needs, ensuring inclusivity and accessibility for
          everyone. <br />
          <br />
          4.Professional Support: Our dedicated team provides comprehensive
          support for event planning and execution. From technical assistance to
          logistical coordination, we are committed to ensuring that each event
          is conducted smoothly and successfully.
          <br />
          <br />
          5.Promoting Academic and Cultural Excellence: The Auditorium is a hub
          for promoting academic excellence and cultural enrichment. It hosts a
          variety of events, including guest lectures by industry leaders,
          academic conferences, cultural festivals, and student presentations,
          contributing to a vibrant campus life.
          <br />
          <br />
          6.State-of-the-Art Technology: Equipped with cutting-edge technology,
          the Auditorium offers seamless integration of multimedia presentations
          and interactive sessions. This ensures an engaging and immersive
          experience for both presenters and attendees.
        </p>
        <br />
          <br />
          <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
          Key Features:
          </p>
          -Advanced Audiovisual Systems: High-definition projection, professional sound, and lighting equipment for a superior event experience.<br/><br/>

-Flexible Seating Arrangements: Adaptable space to accommodate various types of events, from formal conferences to informal gatherings.<br/><br/>

-Comfortable and Accessible Designed for maximum comfort and accessibility, with features to accommodate all guests.<br/><br/>

-Professional Event Support: On-site technical and logistical support to ensure the success of every event.<br/><br/>

-Engaging Venue: Ideal for lectures, workshops, seminars, cultural performances, and more.
      </div>
    </>
  );
};
export default Auditorium;
