import React from "react";
import CommitteeCard from "../cards/committeeCard";
const committeeMembers = [
  { name: "Dr. Sajid Akhtar Khan", image: "/images/common/sajid.png" },
  { name: "Ms. Nisha Madan", image: "/images/common/nisha.png" },
  { name: "Mr. Ankit Kumar", image: "/images/common/ankita.png" },
  { name: "Mr. Anuj Gehlout", image: "/images/common/anuj.png" },
  { name: "Mr. Mahasingh", image: "/images/common/mahasingh.png" },
  { name: "Ms. Anjali", image: "/images/common/anjali.png" },
  { name: "Mr. Subhash Vashisht", image: "/images/common/subhash.png" },
  { name: "Mr. Umesh Garg", image: "/images/common/umesh.png" },
];

function Committee() {
  return (
    <>

      <div className="relative w-full h-80 bg-cover bg-center " style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)",
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">   Admission Committee</h1>
          <p className="text-lg sm:text-xl mt-4"> Shri Ram College of Engineering & Management</p>
        </div>
      </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 lg:gap-8  justify-center my-10">
          {committeeMembers.map((member, index) => (
            <CommitteeCard key={index} name={member.name} image={member.image} />
          ))}
        </div>
    </>
  );
}

export default Committee;
