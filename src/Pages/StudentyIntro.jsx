// src/components/StudentyIntro.jsx

import React from "react";
import profilePic from "../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg"; // Replace with your actual image

const StudentyIntro = () => {
  return (
    <div className=" min-h-screen bg-[#0D1A43] flex items-center justify-center px-4 py-10">
      <div className="text-white max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Area */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-yellow-400">MD</span> <br />
            <span className="text-white">KAYESUR</span>
          </h1>

          <p>
            "Passionate about building clean UI with React." "Turning ideas into
            responsive web experiences."
          </p>
          <h2 className="text-2xl text-tomato-400">Graphic Designer, UI/UX Engineer</h2>
          <button className="btn bg-blue-300">DownLoad CV</button>


        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-full bg-gradient-to-br from-yellow-400 to-purple-500 p-1">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-60 h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentyIntro;
