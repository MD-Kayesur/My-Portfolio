import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "./Button";
 
import img from "../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg";
const Navbar = () => {
  const navlink = (
    <>
      <div className="font-semibold md:flex text-black md:text-white items-center">
        {/* <li>
          <Link
            to="top"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="home"
              className=" rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li> */}

        <li>
          <Link
            to="Intro"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="intro"
              className=" rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li>

        <li>
          <Link
            to="About"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="about"
              className=" rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li>
        <li>
          <Link
            to="Skill"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="skill"
              className=" rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="My Projects"
              className="rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li>
        <li>
          <Link
            to="casestudy"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="case Study"
              className="rounded-md transition-all duration-300 active:bg-red-500"></Button>
          </Link>
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar px-10    md:full  rounded-2xl   shadow-sm backdrop-blur-lg  bg-[#0D1A43] z-50 fixed border-b-red-100 border-b-2  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content   rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlink}
          </ul>
        </div>
        <div className="flex  gap-2 items-center">
          <img className="h-15 rounded-4xl w-15" src={img} alt="img" />

 


          <h2 className="font-semibold nd:text-xl uppercase animated-gradient font-mono">MD.Kayesur</h2>
        </div>
      </div>

      <div className="navbar-end">
        <div className="  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
