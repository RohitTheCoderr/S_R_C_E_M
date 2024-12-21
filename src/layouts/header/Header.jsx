import Navbar from "../navbar/Navbar";

const Header = ({ img }) => {
  return (
    <>
      <div className="h-[7rem]  sm:h-[6rem] shadow-lg w-full text-center flex-row sm:flex justify-between items-center px-4 lg:px-10">
        <div className="w-[3.8rem] relative my-3  sm:w-[5rem] md:w-[5.5rem] flex justify-center items-center cursor-pointer">
          <img
            src={img || "/images/common/image.png"}
            alt="Logo"
            className="w-full rounded-full"
          />
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;

