import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-[40%] ml-[-7rem] h-auto">
      <ul className="flex justify-around text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'list-none text-[17px] rounded-lg px-4 py-2 bg-slate-200 text-black transition-all'
              : 'list-none text-[17px] rounded-full px-4 py-2 bg-slate-100 transition-all hover:bg-slate-200 hover:text-black hover:rounded-lg'
          }
        >
          <li>
            Home
          </li>
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            isActive
              ? 'list-none text-[17px] rounded-lg px-4 py-2 bg-slate-200 text-black transition-all'
              : 'list-none text-[17px] rounded-full px-4 py-2 bg-slate-100 transition-all hover:bg-slate-200 hover:text-black hover:rounded-lg'
          }
        >
          <li>
            About us
          </li>
        </NavLink>
        <li className="list-none text-[17px] rounded-full px-4 py-2 bg-gray-100 hover:bg-slate-200 hover:text-black capitalize cursor-pointer relative group ">
          <div className="flex items-center"> <Link to={'/our_services'} className="">
          Services
          </Link>  <RiArrowDropDownLine className="text-[26px]" /></div>
          <div className="absolute left-0 mt-2 hidden group-hover:block">
            <ul className="w-[12rem] bg-white shadow-lg p-1">
              <li className="py-2 text-left text-[16px] capitalize hover:bg-slate-200 text-gray-400 hover:text-black rounded-sm">Website Development</li>

              <li className="py-2 text-left text-[16px] capitalize hover:bg-slate-200 text-gray-400 hover:text-black rounded-sm relative group">
                Digital Marketing
              </li>

              <li className="py-2 text-left text-[16px] capitalize hover:bg-slate-200 text-gray-400 hover:text-black  rounded-sm">Design making</li>
            </ul>
          </div>
        </li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? 'list-none text-[17px] rounded-lg px-4 py-2 bg-slate-200 text-black transition-all'
              : 'list-none text-[17px] rounded-full px-4 py-2 bg-slate-100 transition-all hover:bg-slate-200 hover:text-black hover:rounded-lg'
          }
        >
          <li>
          Blog
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;