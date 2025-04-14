import React from "react";
import Image from "../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg"; // If you're using Next.js, otherwise use <img />

export default function Mission() {
  return (
    <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Mission</h2>
        <p className="text-sm mb-4">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
        </p>
        <p className="text-sm">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text. This is a sample text.
        </p>
        <div className="mt-8">
          <div className="w-64 h-64 rounded-full overflow-hidden clip-path-custom">
            <img
              src={Image}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="w-64 h-64 ml-auto mb-8 rounded-full overflow-hidden clip-path-custom">
          <img
            src= {Image}
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold mb-4">Vision</h2>
        <p className="text-sm mb-4">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
        </p>
        <p className="text-sm">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text. This is a sample text.
        </p>
      </div>

      <style jsx>{`
        .clip-path-custom {
          clip-path: ellipse(50% 60% at 50% 50%);
        }
      `}</style>
    </div>
  );
}