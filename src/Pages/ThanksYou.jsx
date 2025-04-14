import React from "react";
import { FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ThanksYou = () => {
  return (
    <div className="bg-[#0D1A43] text-white px-6 md:px-20 py-16 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">THANK YOU</h2>
        <p className="text-gray-300 mt-4">
          This is a sample text. Insert your desired text here. This is a sample text.
        </p>
      </div>

      <hr className="border-t border-gray-500 mb-10 mx-auto max-w-4xl" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-5xl mx-auto">
        {/* Website and Email */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <FaGlobe className="text-white" />
          <div>
            <p>slidemodel.com</p>
            <p>support@slidemodel.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <FaMapMarkerAlt className="text-white" />
          <p>This is a sample text. Insert your desired text here.</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <FaPhoneAlt className="text-white" />
          <div>
            <p>(999) 999-9999</p>
            <p>(999) 999-9999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksYou;
