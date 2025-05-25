// src/components/StudentyIntro.jsx

import React, { useEffect, useRef } from "react";
import { easeInOut } from "motion"
import {motion } from "motion/react"
import profilePic from "../images/WhatsApp Image 2025-05-24 at 21.16.27_18f75475.jpg"; // Replace with your actual image
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button, Link } from "react-scroll";
import Typed from "typed.js";
// import { useScatter } from "../Hook/useScatter";
 
const StudentyIntro = () => {
  const el = useRef(null); // reference to the span element
  const typed = useRef(null); // reference to Typed instance
//  const text=<>
//  <div>
//          <h1 className="text-4xl md:text-5xl font-bold">
//             <span className="text-yellow-400">MD</span> <br />
//             <span className="text-white">KAYESUR</span>
//           </h1>
//          </div></>
  // const text='kayesur'
  // const { scattered, setIsHovered } = useScatter(text);
  // console.log(scattered)
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["FrontEnd Developer", "Web Designer", "MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy instance on unmount to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className=" min-h-screen bg-[#0D1A43] flex items-center justify-center px-4 py-10">
      <div className="text-white max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Area */}
        <div className="space-y-4">
         <div>
         <h1 className="text-6xl md:text-5xl font-bold">
            <span className=" md:text-6xl text-5xl text-yellow-400">MD.</span> <br />
            {/* <span className="text-white">KAYESUR</span> */}
          </h1>
          <motion.h1 
      animate={{x:[0,50,0]}}
      transition={{ duration:2, delay:1 ,ease:easeInOut,repeat:Infinity }}
      
      className="md:text-7xl text-4xl font-bold">  <motion.span
      animate={{color:['#FF5733','#33FF3C','#333CFF']}}
      transition={{duration:5,delay:1, repeat:Infinity}}
      >KAYESUR</motion.span>  </motion.h1>
         </div>
        
          {/* <div
      className="flex gap-1 text-3xl font-bold cursor-pointer  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {scattered}
    </div> */}

          <p>
            Front-End Developer crafting high-performance, responsive, and
            user-friendly web applications using modern technologies, clean
            code, and best practices for seamless user experiences.
          </p>
          <h2 className="text-xl text-tomato-400 font-bold ">
         i am  <span className="text-2xl" ref={el}></span> 
          </h2>
           {/* Front-End Developer | Freelancer */}
          <div className="flex items-center gap-3">
            <a
              href="../../public/MDkayesurResume.pdf"
              download="My_Resume.pdf"
              className="">
             <button className="btn btn-info"> Download CV</button>
            </a>

 

            <a className="text-3xl" href="https://x.com/Md_Kayesur">
              {" "}
              <FaXTwitter></FaXTwitter>{" "}
            </a>
            <a
              className="text-3xl"
              href="https://www.linkedin.com/in/md-kayesur-rahman-212759317/">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </a>
            <a className="text-3xl" href="https://github.com/MD-Kayesur">
              {" "}
              <FaGithub></FaGithub>{" "}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* <div className="rounded-full bg-gradient-to-br from-yellow-400 to-purple-500 p-1">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-60 h-60 object-cover"
            />
          </div> */}
          {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0 -z-30">
        <defs>
          <clipPath id="differentone18" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5 0C0.367392 0 0.240215 0.0526784 0.146447 0.146447C0.0526784 0.240215 0 0.367392 0 0.5L0 1H0.5C0.632608 1 0.759785 0.947322 0.853553 0.853553C0.947322 0.759785 1 0.632608 1 0.5V0H0.5ZM0.5 0.75C0.433696 0.75 0.370107 0.723661 0.323223      "
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      
      {/* Image with clip path applied */}
      {/* <figure style={{ clipPath: 'url(#differentone18)' }} className="">
        <img
          src={profilePic}
          // src="your-image-url.jpg"
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 z-50"
        />
      </figure> */}

<figure style={{ clipPath: 'url(#differentone18)' }} className="">
<motion.img
     animate={{y:[0,50,0]}}
     transition={{duration:5,delay:1 ,ease:easeInOut,repeat:Infinity}}
      src={profilePic} 
     className="max-w-sm w-60 rounded-br-[40px] border-l-4 border-b-4  rounded-t-[40px] shadow-2xl hover:scale-105 z-50" />
  </figure>
        </div>
        
      </div>
    </div>
  );
};

export default StudentyIntro;
