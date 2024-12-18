import Navbar from "../navbar/Navbar"
const Header = ({img}) => {
  return (
    <>
    <div className="h-[6rem] scrollbar-hide shadow-lg bg-slate-50 w-screen text-center flex justify-around items-center mb-3 ">
      <div className=" w-[5.5rem] flex justify-center items-center cursor-pointer">
        <img src="/images/common/image.png" alt="" className=" w-full rounded-full" />
      </div>
      <Navbar/>
      {/* <div className="bg-red-100 hover:bg-red-200 text-red-600 font-semibold capitalize rounded-full px-4 py-2 ml-12 mr-[-3rem] cursor-pointer">sign in</div> */}
    </div> 
   </>
  )
}

export default Header