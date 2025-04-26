 


import React from "react";

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black font-sans">
      <div className="border border-black text-center py-2 bg-gray-200 font-bold text-xl mb-6">
        CURRICULUM VITAE
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">MD. KAYESUR</h1>
          <p>
            <strong>Phone:</strong> +8801926360430
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:rmdkayesur@gmail.com" className="text-blue-600">
              rmdkayesur@gmail.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> Vill: Khosalkhali, P.O: Kazamtala, P.S:
            Shyamnagar, Dist: Satkhira
          </p>
        </div>
        <img
          src="/profile.jpg" // Change with actual image path
          alt="Profile"
          className="w-24 h-28 object-cover border"
        />
      </div>

      {/* Career Objective */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Career Objective:
        </h2>
        <p>
          Highly motivated and self-taught <strong>Frontend Developer</strong>{" "}
          with a strong foundation in HTML, CSS, JavaScript, and React.js.
          Seeking a challenging role to apply technical skills, creativity, and
          passion for building responsive, user-friendly web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Skills:
        </h2>
        <ul className="list-disc pl-5">
          <li>HTML5, CSS3, Tailwind CSS, Bootstrap 5</li>
          <li>JavaScript (ES6+), React.js, Next.js (basic)</li>
          <li>Responsive Web Design</li>
          <li>Version Control: Git & GitHub</li>
          <li>Basic knowledge of APIs and JSON</li>
          <li>Problem-solving and debugging skills</li>
        </ul>
      </section>

      {/* Academic Qualification */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Academic Qualifications:
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold">
            Higher Secondary School Certificate (HSC):
          </h3>
          <ul className="list-disc pl-5">
            <li>Institution: Munshiganj Degree College</li>
            <li>Department: Humanities</li>
            <li>Passing Year: 2022</li>
            <li>Board: Jashore</li>
            <li>Result: GPA 4.86</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Projects:
        </h2>
        <ul className="list-disc pl-5">
          <li>Portfolio Website - Built with React.js and Tailwind CSS</li>
          <li>Landing Page Clone - Responsive website using Tailwind CSS</li>
          <li>Todo App - A simple Todo application using React.js</li>
        </ul>
      </section>

      {/* Computer Literacy */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Computer Literacy:
        </h2>
        <ul className="list-disc pl-5">
          <li>Frontend Development Tools</li>
          <li>Microsoft Office (Word, Excel, PowerPoint)</li>
          <li>Internet browsing and Email communication</li>
        </ul>
      </section>

      {/* Language Proficiency */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Language Proficiency:
        </h2>
        <ul className="list-disc pl-5">
          <li>Bengali: Fluent in reading, writing, speaking</li>
          <li>English: Good in reading, writing, speaking</li>
        </ul>
      </section>

      {/* Personal Information */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Personal Information:
        </h2>
        <ul className="list-disc pl-5">
          <li>Full Name: MD. KAYESUR</li>
          <li>Father’s Name: MD.Hafizur Rahman</li>
          <li>Mother’s Name: Lutfunnesa Bagam</li>
          <li>
            Present Address: Vill: Khosalkhali, P.O: Kazamtala, P.S: Shyamnagar,
            Dist: Satkhira
          </li>
          <li>Home District: Satkhira</li>
          <li>Date of Birth: 16-06-2004</li>
          <li>Marital Status: UnMarried</li>
          <li>Nationality: Bangladeshi (By birth)</li>
          <li>Blood Group: AB(+)</li>
        </ul>
      </section>

      {/* Declaration */}
      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">
          Declaration:
        </h2>
        <p>
          I hereby declare that the information provided above is true and
          correct to the best of my knowledge and belief.
        </p>
        <div className="flex justify-between items-center mt-6 text-sm">
          <p>
            <strong>Date:</strong> 14/03/2025
          </p>
          <p className="font-bold">MD. KAYESUR</p>
        </div>
      </section>
    </div>
  );
};

export default CV;

