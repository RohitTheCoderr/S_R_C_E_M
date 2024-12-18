import Navbar from "../navbar/Navbar";
const Header = ({img}) => {
  return (
    <>
    <div className="h-[6rem] shadow-lg bg-slate-50 w-full text-center flex justify-around items-center ">
      <div className=" w-[5.5rem] flex justify-center items-center cursor-pointer">
        <img src="/images/common/image.png" alt="" className=" w-full rounded-full" />
      </div>
      <Navbar/>
    </div> 
   </>
  )
}

export default Header