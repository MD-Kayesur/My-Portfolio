import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "./Button";

const Navbar = () => {
  const navlink = (
    <>
      <div className="font-semibold md:flex    text-white items-center">
        {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li> */}

        <li className="  ">
          <details>
          <summary>home</summary>
          <ul className="  absolute w-[00px] ml-42">
              <li>
                <Link to="top" smooth={true} duration={500} offset={-70}>
              <Button button="home"></Button>
            </Link>
              </li>
              <li>
              <Link to="Intro" smooth={true} duration={500} offset={-70}>
            <Button button="intro"></Button>
          </Link>
              </li>
              <li>
          <Link to="About" smooth={true} duration={500} offset={-70}>
            <Button button="about"></Button>
          </Link>
        </li>
        <li>
          <Link to="Skill" smooth={true} duration={500} offset={-70}>
            <Button button="skill"></Button>
          </Link>
        </li>
        
        <li className="w-[130px] ">
          <Link to="casestudy" smooth={true} duration={500} offset={-70}>
            <Button button="case Study"></Button>
          </Link>
        </li>
            </ul>
          
          </details>
        </li>
        <li>
                <NavLink className='primary-button ' to="/about" >
               about
            </NavLink>
              </li>
        {/* <li>
                <NavLink to="/about" >
               about
            </NavLink>
              </li>
        <li>
                <NavLink to="/about" >
               about
            </NavLink>
              </li>
        <li>
                <NavLink to="/about" >
               about
            </NavLink>
              </li> */}
       
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
            className="menu menu-sm dropdown-content bg-black  rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlink}
          </ul>
        </div>
        <div className="flex  gap-2 items-center">
          <img className="h-15 rounded-4xl w-15" src={""} alt="img" />
          <a className="font-semibold nd:text-xl uppercase">MD.Kayesur</a>
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
