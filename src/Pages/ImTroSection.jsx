import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useScatter } from "../Hook/useScatter";


// A passionate and self-driven web developer with a strong foundation in modern web technologies including HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy building responsive, accessible, and user-friendly interfaces.

// I am always eager to learn new technologies, solve problems efficiently, and collaborate with teams to build scalable and meaningful software. Currently seeking an opportunity to grow my career in a challenging and dynamic IT environment.

const sections = [
  { title: "Personal Profile", description: "I am always eager to learn new technologies, solve problems efficiently, and collaborate with teams to build scalable and meaningful software. Currently seeking an opportunity to grow my career in a challenging and dynamic IT environment." },
  { title: "Skills", description: "Skilled in building responsive web applications using React, Tailwind CSS, and JavaScript." },
  { title: "Hobbies", description: "I enjoy solving coding challenges, exploring new technologies, and creating user-friendly web interfaces in my free time." },
  { title: "Education", description: "Completed a Bachelor’s degree in Computer Science, building a solid foundation in programming, data structures, and software development.." },
  { title: "Achievements", description: "Built and deployed multiple personal projects using React and Firebase, demonstrating practical frontend and backend development skills." },
  { title: "Language", description: " English And Bangle." },
];



const ImTroSection = () => {
  //  const text='INTRO'
  // const { scattered, setIsHovered } = useScatter(text);
  return (
    <div className="min-h-screen bg-[#0D1A43] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 animated-gradient ">INTRO</h2>
 {/* <div
      className="flex gap-1 text-4xl font-bold mb-4 animated-gradient  cursor-pointer  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {scattered}
    </div> */}



        <p className="text-gray-300 mb-10 max-w-4xl">
        I am a passionate and dedicated Front-End Developer with a strong foundation in modern web technologies like React.js, Tailwind CSS, and JavaScript. I love transforming ideas into interactive and responsive web interfaces.
        My goal is to contribute to real-world projects, collaborate with talented teams, and continuously grow as a developer in the dynamic world of the tech industry.        </p>

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
