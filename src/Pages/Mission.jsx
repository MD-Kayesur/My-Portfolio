// import React from "react";
import Image from "../images/screencapture-car-.png"; // If you're using Next.js, otherwise use <img />
import Image2 from "../images/screencapture-building-manegment-web-app-2025-04-16-00_55_03.png"; // If you're using Next.js, otherwise use <img />
// import { Link } from "react-router-dom";
// // import Header from "../Components/Header";

// export default function Mission() {
//   return (
//     <>
//  {/* <Header title={'My Latest Projects'}></Header> */}
//      <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12">
//     <h2 className="text-4xl font-bold mb-6 animated-gradient ">My Latest Projects</h2>
// <div className=" grid md:grid-cols-3 gap-12 items-center">

//       <div>
//         <h2 className="text-4xl font-bold  mb-4">car-swift</h2>
//         <a className="underline" href="https://car-swift.web.app" target="_blank" rel="noopener noreferrer">
//   Visit the website
// </a>

//         <div className="mt-8">
//           <div className="w-64 h-64 rounded-full  clip-path-custom">
//             <a  href="https://i.ibb.co.com/9k9s5qND/screencapture-car.png">

//             <img
//               src={Image}
//               alt="Mission"
//               className="w-full rounded-full  h-full object-cover"
//               />
//               </a>
//           </div>
//         </div>
//       </div>
//       {/* <div className="absolute bottom-[20px] right-[20px] w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center"> */}

//       <div className="  -rotate-30 w-full h-1 bg-cyan-500 transform skew-x-260"></div>

//       <div className="text-right">
//         <div className="w-64 h-64 ml-auto mb-8 rounded-full overflow-hidden clip-path-custom">
//           <a href="https://i.ibb.co.com/N2m9cHB0/screencapture-building-manegment-web-app-2025-04-16-00-55-03.png">
//           {/* <a href="https://building-manegment.web.app/"> */}

//           <img
//             src= {Image2}
//             alt="Vision"
//             className="w-full h-full object-cover"
//             />
//             </a>
//         </div>
//         <h2 className="text-4xl font-bold mb-4">building-manegment</h2>
//         <a className="underline" href="https://building-manegment.web.app/" target="_blank" rel="noopener noreferrer">
//   Visit the website
// </a>

//       </div>

//       <style jsx>{`
//         .clip-path-custom {
//           clip-path: ellipse(50% 60% at 50% 50%);
//           }
//           `}</style>
//     </div>
//           </div>
//     </>
//   );
// }

import img from "../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg";

const projects = [
  {
    title: "Building-Manegment",
    img: "https://i.ibb.co.com/5gD06jKS/screencapture-building-manegment-web-app-2025-04-16-00-55-03.png",
    description:
      "A full-stack e-commerce platform with user login, cart, and admin dashboard.",
    tech: ["HTML", "Tailwind CSS", "js", "React", "Firebase"],
    live: "https://building-manegment.web.app/",
    code: "https://github.com/MD-Kayesur/-Game_Spot_Client",
  },
  {
    title: "Game_Spot",
    img: "https://i.ibb.co.com/BHB5Sk33/screencapture-car.png",
    description:
      "Game_Spot is a dynamic and engaging platform dedicated to all things related to video games. Whether you’re a casual gamer or a hardcore enthusiast, Game_Spot offers a wide variety of content tailored to meet your gaming interests.",
    tech: ["HTML", "Tailwind CSS", "js", "React", "Firebase"],
    live: "https://game-spot-251f8.web.app/",
    code: "https://github.com/MD-Kayesur/-Game_Spot_Client",
  },
];

const Mission = () => {
  return (
    <section id="case-study" className="py-16 bg-[#0D1A43] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 animated-gradient ">
          My Latest Projects
        </h2>

        <div className="flex flex-col gap-8">
  {projects.map((project, idx) => (
    <div className="flex flex-col md:flex-row bg-[#13254e] rounded-2xl shadow-lg p-6 gap-6 hover:shadow-cyan-500 transition-all">
    {/* Image Section */}
    <div className="md:w-1/2 w-full overflow-hidden">
      <img
        src={project.img}
        alt=""
        className="w-full h-[300px] rounded-xl object-cover max-w-full"
      />
    </div>
  
    {/* Text Section */}
    <div className="md:w-1/2 w-full">
      <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <ul className="list-disc list-inside text-sm mb-4 text-cyan-300">
        {project.tech.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-[#13254e] transition"
        >
          Live Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-[#13254e] transition"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
  
  
  ))}
</div>

      </div>
    </section>
  );
};

export default Mission;
