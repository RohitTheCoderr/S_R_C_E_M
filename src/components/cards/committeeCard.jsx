import React from "react";
function CommitteeCard({ name, image }) {
    return (
      <div className="text-center my-2">
        <img
          className=" h-80 w-60 rounded-lg border-[1px] border-black shadow object-cover"
          src={image}
          alt={name}
        />
        <p className="m2-4 text-base sm:text-lg lg:text-xl font-bold text-sky-800">
          {name}
        </p>
      </div>
    );
  }
  export default CommitteeCard