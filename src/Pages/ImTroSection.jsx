import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const sections = [
  { title: "Personal Profile", description: "This is a sample text." },
  { title: "Skills", description: "This is a sample text." },
  { title: "Hobbies", description: "This is a sample text." },
  { title: "Education", description: "This is a sample text." },
  { title: "Achievements", description: "This is a sample text." },
  { title: "Language", description: "This is a sample text." },
];



const ImTroSection = () => {
  return (
    <div className="min-h-screen bg-[#0D1A43] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">INTRO</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="text-yellow-400 text-2xl pt-1">
                <FaAngleDoubleRight />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImTroSection;
