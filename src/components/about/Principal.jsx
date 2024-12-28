import React from "react";

const Principal = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[90%] m-auto my-[2rem]">
        <div className="flex gap-5 items-center justify-center">
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">  From The Desk Of Director</h1>
          <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
        </div>
        <div className="flex flex-col mt-12 md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src="images\download (3).jpg"
            className="h-[20rem] w-auto md:w-2/3 lg:h-96 lg:w-2/3 border-2 rounded-md shadow-lg shadow-black self-center"
          ></img>
          <div className="text-center md:text-left">
            <br />
            <h1 className="text-black text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
              Prof (D.R) S.K Gupta
            </h1>
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg my-4 text-justify">
              In this age of globalization where transformations are inevitable.
              We can witness the mushroom growth of run-of-the-mill engineering
              & management institutes. In this arena, we at SRCEM aim to produce
              highly effective engineers and managers with an indomitable urge
              to fight and win against the toughest competition and energy to
              keep themselves developing in the life so that they can be the
              change agents.
              <br />
              Technology leaders, policymakers and capable of giving direction
              to the society and nation. A technical and management education
              oasis located in lush green and sprawling campus providing
              unparalleled opportunities for the students is what sets us apart
              from the rest of the institutions. From the first rate library
              with book bank facility to innovative computer labs with internet
              connectivity, from well equipped engineering labs to comfortable.
            </p>
          </div>
        </div>{" "}




        <div className="w-full flex justify-end "><img
          src="images\download (3).png"
          className="w-auto h-[4rem]  rounded-md"
          alt="Co-Founder Image"
        /></div>
        <p className="text-[#088395] text-sm sm:text-lg  font-medium text-right">
          From The Desk Of Director
        </p>

      </div > {" "}


    </>
  );
};
export default Principal;
