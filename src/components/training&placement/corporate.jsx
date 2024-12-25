import img from "../../../public/images/ARV.png";
import img1 from "../../../public/images/tata.jpeg";
import img2 from "../../../public/images/SBI.png";
import img3 from "../../../public/images/onetick.png";
import img4 from "../../../public/images/tanishq.png";
import img5 from "../../../public/images/kotak.png";
import img6 from "../../../public/images/NIIT.png";
import img7 from "../../../public/images/bajaj.png";
import img8 from "../../../public/images/finance bank.png";
function Corporate() {
  return (
    <div>
      <div
        className="relative w-full h-96 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://drprem.com/wellness/wp-content/uploads/sites/7/2021/07/corporate-tie-ups.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-22 sm:py-32">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6]">
          Corporate Tie Ups
          </h1>
        </div>
                  
      </div>
      <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 bg-[#EBF4F6]">
          {/* Corporate Card */}
          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              ARV TECHNOLOGIES
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img7}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              Bajaj Allianz
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img2}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              SBI Cards
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img3}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              Onetick Technologies Private Limited
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img1}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              TATA MOTORS
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img5}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              Kotak Mahindra Bank
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img6}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              NIIT
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img4}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              Tanishq
            </p>
          </div>

          <div className="flex flex-col justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56 bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <img
              src={img8}
              className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto mb-2 hover:scale-100 transition-all duration-300"
            />
            <p className="text-zinc-600 text-sm md:text-base lg:text-lg text-center">
              AU SMALL FINANCE BANK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Corporate;
