import React from "react";

function Commite() {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-22 sm:py-32">
          <h1 className="text-3xl sm:text-5xl font-bold text- text-white">
            Admission Committee
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold  text-white">
        Shri Ram College of Engineering & Management
          </h1>
        </div>
      </div>

      {/* admission commmitee */}

      {/* <div class="container mx-auto p-4 px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16 mt-1"> */}
      <div class="flex flex-wrap gap-8 justify-center my-10">
        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/sajid.png"
            alt="Dr. Sajid Akhtar Khan"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Dr. Sajid Akhtar Khan
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/nisha.png"
            alt="Ms. Nisha Madan"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Ms. Nisha Madan
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/ankita.png"
            alt="Mr. Ankit Kumar"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold text-[#088395]">
            Mr. Ankit Kumar
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/anuj.png"
            alt="Mr. Anuj Gehlout"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Mr. Anuj Gehlout
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/mahasingh.png"
            alt="Mr. Anuj Gehlout"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Mr. Mahasingh
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/anjali.png"
            alt="Mr. Anuj Gehlout"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Ms. Anjali
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/subhash.png"
            alt="Mr. Anuj Gehlout"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold  text-[#088395]">
            Mr. Subhash Vashisht
          </p>
        </div>

        <div class="text-center">
          <img
            class="h-40 w-40 lg:h-72 lg:w-60 rounded-3xl shadow object-cover"
            src="/images/common/umesh.png"
            alt="Mr. Anuj Gehlout"
          />
          <p class="mt-4 text-base sm:text-lg lg:text-xl font-bold text-[#088395]">
            Mr.Umesh Garg
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Commite;

// {/* Member 5 */}
// <div className="text-center">
// <img
//   className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
//   src="/images/common/mahasingh.png"
//   alt="Dr. Sajid Akhtar Khan"
// />
// <p className="mt-4 text-base sm:text-lg font-bold">Mr. Mahasingh</p>
// </div>
// {/* Member 6 */}
// <div className="text-center">
// <img
//   className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
//   src="/images/common/anjali.png"
//   alt="Ms. Nisha Madan"
// />
// <p className="mt-4 text-base sm:text-lg font-bold">Ms.Anjali</p>
// </div>
// {/* Member 7 */}
// <div className="text-center">
// <img
//   className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
//   src="/images/common/subhash.png"
//   alt="Mr. Ankit Kumar"
// />
// <p className="mt-4 text-base sm:text-lg font-bold">
//   Mr. Subhash Vashisht
// </p>
// </div>
// {/* Member 8 */}
// <div className="text-center">
// <img
//   className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-md shadow-md"
//   src="/images/common/umesh.png"
//   alt="Mr. Anuj Gehlout"
// />
// <p className="mt-4 text-base sm:text-lg font-bold">Mr.Umesh Garg</p>
// </div>
