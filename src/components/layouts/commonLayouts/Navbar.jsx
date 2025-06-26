import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import CartIcon from "../../../icons/CartIcon";
import SmsIcon from "../../../icons/SmsIcon";
import BellIcon from "../../../icons/BellIcon";
import SettingsIcon from "../../../icons/SettingsIcon";

const Navbar = () => {
  return (
    <div className="bg-blue flex gap-[174px] py-5 px-6">
      {/* logo */}
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex items-center gap-[80px]">
        {/* menu */}
        <ul className="flex gap-12 items-center">
          <li>
            <Link className="text-white">
              <FaBars />
            </Link>
          </li>

          <li>
            <Link className="text-white font-poppins font-bold text-sm">
              Careers
            </Link>
          </li>
          <li>
            <Link className="text-white font-poppins font-bold text-sm">
              Store
            </Link>
          </li>
          <li>
            <Link className="text-white font-poppins font-bold text-sm">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="text-white">
              <BsThreeDots />
            </Link>
          </li>
        </ul>
        {/* search  */}
        <div className="relative">
          <input
            type="text"
            className="w-[415px] py-4 px-6 bg-[#4E4AC8] rounded-[11px] font-normal font-poppins text-blue text-sm focus-within:bg-white focus-within:text-black transition-all duration-300 outline-0"
            placeholder="Search here.."
          />
          <IoIosSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-blue" />
        </div>
        <div className="flex gap-[70px]">
          {/* progress bar */}
          <div className="w-[111px] relative after:absolute after:content[''] after:w-[1px] after:h-[32px] after:bg-[#7A77FD] after:-top-1 after:-right-10">
            <div className="flex justify-between items-center">
              <span className="font-normal font-poppins text-xs text-white">
                Next
              </span>
              <span className="font-normal font-poppins text-xs text-white">
                35 EXP
              </span>
            </div>
            <div className="w-full h-[3px] bg-[#4E4AC8] rounded-[7px] mt-1 relative">
              <div className="h-full w-[83px] rounded-[7px] bg-[#41EFFF] absolute"></div>
            </div>
          </div>
          {/* cart+ notification */}
          <div className="flex gap-8 relative after:absolute after:content[''] after:w-[1px] after:h-[32px] after:bg-[#7A77FD] after:-top-1 after:-right-9">
            <button>
              <CartIcon />
            </button>
            <button>
              <SmsIcon />
            </button>
            <button>
              <BellIcon />
            </button>
          </div>
          {/* settings button */}
          <div>
            <button>
              <SettingsIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
