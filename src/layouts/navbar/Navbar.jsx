import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[60%]  h-auto z-50">
      <ul className="capitalize flex justify-center items-center h-[4rem] space-x-6 text-[17px] font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#071952] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2"
              : " hover:border-b-[0.19rem] hover:text-[#088395] hover:border-[#37b7c3] transition-all duration-300 pb-2"
          }
        >
          <li className="hover:text-[#088395]">Home</li>
        </NavLink>

        <li className="relative group/parent  cursor-pointer">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            About Us
            <RiArrowDropDownLine className="text-[24px]" />
          </div>

          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover/parent:block group-hover/parent:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">

            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Co-Founder Principal
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Co-Founder</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Principal Message</li>
              </ul>
            </li>

            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Infrastructure
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Smart Classroom</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Hostel</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Auditorium</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Library</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Transportation</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Medical</li>
              </ul>
            </li>

            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                Lab
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Physics Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechanical Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electrical Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Computer Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Civil Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Chemistry Lab</li>
                <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">BMLT/DMLT Lab</li>
              </ul>
            </li>

            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              Mandatory Disclosure
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              Mission and Vision
            </li>
          </ul>
        </li>

        <li className="relative group/parent cursor-pointer">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 pb-2">
            Courses
            <RiArrowDropDownLine className="text-[24px]" />
          </div>

          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover/parent:block group-hover/parent:border-t-[0.19rem] border-t-[#071952] text-sm  bg-[#ebf4f6] shadow-lg w-[200px]">

            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                B-tech
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <Link to={'/Mechanical'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">mechanical engineering</li></Link>
                <Link to={'/Comp'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">computer science & engineering</li></Link>
                <Link to={'/Electronics'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electronics & commonication engineering</li></Link>
                <Link to={'/CivilEngg'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil engineering</li></Link>
              </ul>
            </li>
            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                M-tech
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <Link to={'/Mmechanical'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">mechanical engineering</li></Link>
                <Link to={'/Mcomp'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">computer science & engineering</li></Link>
                <Link to={'/Melectronics'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Electronics & commonication engineering</li></Link>
                <Link to={'/Mcivil'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil engineering</li></Link>
              </ul>
            </li>

            <li className="px-4 py-2 relative group hover:bg-[#37b7c3]">
              <div className="flex items-center">
                polytechnic diploma
                <RiArrowDropDownLine className="text-[18px] ml-2" />
              </div>

              <ul className="absolute left-full top-0 hidden group-hover:block group-hover:border-t-[0.19rem] border-t-[#071952] text-sm bg-[#ebf4f6] shadow-lg w-[200px]">
                <Link to={'/'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">civil polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">CSE polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">DMLT polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">ECE polytechnic diploma</li></Link>
                <Link to={'/'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">Mechinical polytechnic diploma</li></Link>
              </ul>
            </li>

            <Link to={'/BBA'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BBA
            </li></Link>
            <Link to={'/BBAdm'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BBA digital marketing
            </li></Link>
            <Link to={'/BCA'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              BCA
            </li></Link>
            <Link to={'/MBA'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              MCA
            </li></Link>
            <Link to={'/BVOC'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              B.VOC
            </li></Link>
            <Link to={'/MCA'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6]">
              MBA
            </li></Link>
          </ul>
        </li>

        <li className="relative group cursor-pointer">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300">
            Training & Placement
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] bg-[#ebf4f6] shadow-lg w-[200px] ">
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Agrements</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Corporate Tie UPS</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">MOU</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">Job-Fair 2024</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">TPO message</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">placement record</li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">placement </li>
          </ul>
        </li>

        <li className="relative group cursor-pointer ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 ">
            Admission
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] bg-[#ebf4f6] shadow-lg w-[200px] ">
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              adimission commitee
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              discipline
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              ragging
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              procedure & eligibility
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              criteria
            </li>
          </ul>
        </li>
        <li className="relative group cursor-pointer ">
          <div className="flex items-center text-[#071952] hover:text-[#088395] hover:border-b-[0.19rem] border-[#37b7c3] transition-all duration-300 ">
            Life Here
            <RiArrowDropDownLine className="text-[24px]" />
          </div>
          <ul className="absolute left-0 text-[#071952] text-start top-full hidden group-hover:block group-hover:border-t-[0.19rem] text-sm border-t-[#071952] bg-[#ebf4f6] shadow-lg w-[200px] ">
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Shi Ram skill development center
            </li>
            <Link to={'events'}><li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Events
            </li></Link>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              welfare Activities
            </li>
            <li className="px-4 py-2 hover:bg-[#37b7c3] hover:text-[#ebf4f6] ">
              Sports Activities
            </li>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#071952] border-b-[0.19rem] border-[#37b7c3] transition-all duration-300"
              : " hover:border-b-[0.19rem] hover:border-[#37b7c3] transition-all duration-300"
          }
        >
          <li className="hover:text-[#088395]">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
