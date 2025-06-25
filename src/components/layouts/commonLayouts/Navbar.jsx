import React from 'react'
import logo from "../../../../public/logo.png"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-blue flex justify-between py-5">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between">
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
      </div>
      <div></div>
    </div>
  );
}

export default Navbar