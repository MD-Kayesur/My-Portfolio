// import React from "react";
// import { div, div } from "@/components/ui/div";
// import { Button } from "@/components/ui/button";

export default function PortFolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">John Doe</h1>
        <p className="text-xl">Aspiring IT Professional</p>
        <p className="text-sm mt-2 text-gray-400">Passionate about solving problems through technology</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
        <p className="text-gray-300">
          I’m a tech enthusiast with a strong foundation in programming and networking. I enjoy building systems that
          solve real-world problems and am always eager to learn new technologies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <div><div>Python</div></div>
          <div><div>Java</div></div>
          <div><div>C/C++</div></div>
          <div><div>Git</div></div>
          <div><div>Linux</div></div>
          <div><div>SQL</div></div>
          <div><div>HTML/CSS/JS</div></div>
          <div><div>React</div></div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
        <div className="space-y-4">
          <div>
            <div>
              <h3 className="text-xl font-bold">Student Management System</h3>
              <p className="text-gray-400">Built with Python and MySQL. Handles CRUD operations for managing student data.</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-bold">Portfolio Website</h3>
              <p className="text-gray-400">Static website using HTML, CSS, and JavaScript to showcase skills and projects.</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-bold">Networking Lab Simulation</h3>
              <p className="text-gray-400">Simulated LAN setup and router configuration using Cisco Packet Tracer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
        <p className="text-gray-300">B.Sc in Computer Science | XYZ University | 2025</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Certifications</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Google IT Support</li>
          <li>Cisco CCNA (Basics)</li>
          <li>Python for Everybody – Coursera</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <p className="text-gray-300">Email: johndoe@example.com</p>
        <p className="text-gray-300">GitHub: github.com/johndoe</p>
        <p className="text-gray-300">LinkedIn: linkedin.com/in/johndoe</p>
      </section>
    </div>
  );
}
