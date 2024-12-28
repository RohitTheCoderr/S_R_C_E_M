import React from "react";

function Procedure() {
  return (
    <>
      <div className="h-screen w-screen bg-pink-300 px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <iframe
          src="src\components\admission\Procedure_&_Eligibilty_Criteria.pdf"
          className="h-full w-full rounded-md shadow-lg"
        ></iframe>
      </div>
    </>
  );
}

export default Procedure;
