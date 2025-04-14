import React from "react";
import myImage from "../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg"; // Your image path
  const AboutMe = () => {
  return (
    <div     className="bg-[#0D1A43] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="relative">
          {/* Decorative circle shapes (optional) */}
          <div className="absolute w-60 h-60 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full -left-10 -top-10 z-0 blur-lg"></div>
          <img
            src={myImage}
            alt="About me"
            className="w-[300px] md:w-[350px] z-10 relative rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-left z-10">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 mb-4 max-w-xl">
            This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
          </p>
          <p className="text-gray-300 max-w-xl">
            This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
