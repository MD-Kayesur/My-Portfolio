import React from "react";

const skills = [
  { name: "Html", level: 90, color: "bg-green-500" },
  { name: "Css", level: 85, color: "bg-yellow-400" },
  { name: "JS", level: 70, color: "bg-cyan-400" },
  { name: "React", level: 75, color: "bg-red-500" },
  { name: "NextJs", level: 60, color: "bg-indigo-500" },
];

export default function SkillSection() {
  return (
    <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-sm mb-4">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text.
        </p>
        <p className="text-sm">
          This is a sample text. Insert your desired text here. Insert your desired text here. This is a sample text. This is a sample text.
        </p>
      </div>

      <div className="md:w-1/2 space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded">
              <div
                className={`${skill.color} hover:${skill.color} h-3 rounded`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}