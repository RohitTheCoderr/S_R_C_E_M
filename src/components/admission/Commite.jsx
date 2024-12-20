import React from "react";

function Commite() {
  return (
    <>
      {/* Header */}
      <div className="text-center text-blue-500 font-bold text-2xl mt-5 underline decoration-blue-600 decoration-4 underline-offset-2">
        Admission Committee
      </div>

      {/* Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center my-8">
        {/* Member 1 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/sajid.png"
            alt="Dr. Sajid Akhtar Khan"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">
            Dr. Sajid Akhtar Khan
          </p>
        </div>

        {/* Member 2 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/nisha.png"
            alt="Ms. Nisha Madan"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">Ms. Nisha Madan</p>
        </div>

        {/* Member 3 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/ankita.png"
            alt="Mr. Ankit Kumar"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">Mr. Ankit Kumar</p>
        </div>

        {/* Member 4 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/anuj.png"
            alt="Mr. Anuj Gehlout"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">
            Mr. Anuj Gehlout
          </p>
        </div>
        {/* Member 5 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/mahasingh.png"
            alt="Dr. Sajid Akhtar Khan"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">Mr. Mahasingh</p>
        </div>
        {/* Member 6 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/anjali.png"
            alt="Ms. Nisha Madan"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">Ms.Anjali</p>
        </div>
        {/* Member 7 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/subhash.png"
            alt="Mr. Ankit Kumar"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">
            Mr. Subhash Vashisht
          </p>
        </div>
        {/* Member 8 */}
        <div className="text-center">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
            src="/images/common/umesh.png"
            alt="Mr. Anuj Gehlout"
          />
          <p className="mt-4 text-base sm:text-lg font-bold">Mr.Umesh Garg</p>
        </div>
      </div>
    </>
  );
}

export default Commite;
