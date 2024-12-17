import Navbar from "../navbar/Navbar"

const Header = ({img}) => {
  return (
    <>
    <div className="h-[4.5rem] shadow-lg bg-slate-50 w-screen text-center flex justify-around items-center mb-3 ">
      <div className="h-[3rem] ml-[-2.5rem] w-[10rem] flex justify-center items-center cursor-pointer">
        <img src="https://ruloans-bucket.s3.amazonaws.com/b2c/assets/logo.webp" alt="" className="h-[2.2rem] w-[10rem]" />
      </div>
      <Navbar/>
      <div className="bg-red-100 hover:bg-red-200 text-red-600 font-semibold capitalize rounded-full px-4 py-2 ml-12 mr-[-3rem] cursor-pointer">sign in</div>
    </div> 
   </>
  )
}

export default Header