import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

  

const Navbar = () => {
 
  
  const navlink = (
    <>
      <div className="font-semibold md:flex text-black md:text-white items-center">
        <li>
          <Link to="top" smooth={true} duration={500} offset={-70}>Home</Link>
        </li>
        <li>
          <Link to="Intro" smooth={true} duration={500} offset={-70}>Intro</Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500} offset={-70}>About</Link>
        </li>
        <li>
          <Link to="Skill" smooth={true} duration={500} offset={-70}>Skill</Link>
        </li>
        <li>
          <Link to="casestudy" smooth={true} duration={500} offset={-70}>Case Study</Link>
        </li>
       
         
         
      </div>
    </>
  );
  return (
    <div className="navbar px-10    md:full  rounded-2xl bg-base-100 shadow-sm backdrop-blur-lg   z-50 fixed border-b-red-100 border-b-2  bg-gradient-to-r from-blue-500 to-purple-500 text-white">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlink}
          
          </ul>
        </div>
        <div className="flex  gap-2 items-center">
          <img className="h-15 rounded-4xl w-15" src={ ''} alt="img" />
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
