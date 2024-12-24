import React from "react";

const Principal = () => {
  return (
    <>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="flex flex-col mt-12 md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src="public\images\download (3).jpg"
            className="h-auto w-full md:w-2/3 lg:h-96 lg:w-2/3 border-2 rounded-md shadow-lg shadow-black self-center"
          ></img>
          <div className="text-center md:text-left">
            <h1 className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-left ">
              From The Desk Of Director
            </h1>
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
       
       
        <img
          src="public\images\download (3).png"
          className="w-auto max-w-full h-auto md:w-1/4 lg:w-1/5 ml-[25%] md:ml-auto rounded-md"
        ></img>
        <p className="text-[#088395] text-2xl md:text-3xl lg:text-4xl  font-medium font-mono text-right ">
          From The Desk Of Director
        </p>
      </div>{" "}
    </>
  );
};
export default Principal;
