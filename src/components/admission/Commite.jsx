import React from "react";

function Commite() {
  return (
    <>
      <div className="text-center text-blue-500 font-bold text-2xl mt-5 underline decoration-blue-600 decoration-4 underline-offset-2">
        Admission Committee
      </div>
      <div className="flex justify-center items-center space-x-8 my-8">
      {/* Member 1 */}
      <div className="text-center">
        <img
          className="w-48 h-48 object-cover rounded-md shadow-md"
          src="/images/common/sajid.png"
          alt="Dr. Sajid Akhtar Khan"
        />
        <p className="mt-4 text-lg font-bold">Dr. Sajid Akhtar Khan</p>
      </div>

      {/* Member 2 */}
      <div className="text-center">
        <img
          className="w-48 h-48 object-cover rounded-md shadow-md"
          src="/images/common/nisha.png"
          alt="Ms. Nisha Madan"
        />
        <p className="mt-4 text-lg font-bold">Ms. Nisha Madan</p>
      </div>

      {/* Member 3 */}
      <div className="text-center">
        <img
          className="w-48 h-48 object-cover rounded-md shadow-md"
          src="/images/common/ankita.png"
          alt="Mr. Ankit Kumar"
        />
        <p className="mt-4 text-lg font-bold">Mr. Ankit Kumar</p>
      </div>

      {/* Member 4 */}
      <div className="text-center">
        <img
          className="w-48 h-48 object-cover rounded-md shadow-md"
          src="/images/common/anuj.png"
          alt="Mr. Anuj Gehlout"
        />
        <p className="mt-4 text-lg font-bold">Mr. Anuj Gehlout</p>
      </div>
    </div>
    </>
  );
}

export default Commite;
