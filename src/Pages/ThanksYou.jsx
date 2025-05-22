import React from "react";
import { FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const ThanksYou = () => {
  return (
    <div className=" bg-[#0D1A43] text-white px-6 md:px-20 py-6 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold animated-gradient">THANK YOU</h2>
        <p className="text-gray-300 mt-4">
          Thank you for taking the time to explore my work. Your support and
          feedback mean a lot to me. Let's build something great together!
        </p>
      </div>

      <hr className="border-t border-gray-500 mb-10 mx-auto max-w-4xl" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-5xl mx-auto">
        {/* Website and Email */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <CgMail className="text-white" />
          <div>
            {/* <p>slidemodel.com</p> */}
            <p>rmdkayesur@gemail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <FaMapMarkerAlt className="text-white" />
          <p>Asulia, Saver, Dhaka</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <FaPhoneAlt className="text-white" />
          <div>
            <p>+880 1926360430</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksYou;
