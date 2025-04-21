import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black font-sans">
      <div className="border border-black text-center py-2 bg-gray-200 font-bold text-xl mb-6">
        CURRICULUM VITAE
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold">MD. AL AMIN</h1>
          <p><strong>C/O:</strong> MD MIJANUR RAHMAN</p>
          <p><strong>Address:</strong> Vill: Khosalkhali</p>
          <p>P.O: Kazamtala, P.S: Shyamnagar, Dist: Satkhira</p>
          <p><strong>Cell:</strong> +8801995-138394</p>
          <p><strong>E-mail:</strong> <a href="mailto:mdalaminhasan53@gmail.com" className="text-blue-600">mdalaminhasan53@gmail.com</a></p>
        </div>
        <img
          src="/profile.jpg" // Replace with actual path to the image
          alt="Profile"
          className="w-24 h-28 object-cover border"
        />
      </div>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Career Profile:</h2>
        <p>
          Proactive, energetic sales professional offering hands-on experience in sales and execution
          along with a unique ability to work towards set sales goals of the company and creating
          sales techniques to enter into new markets. Currently looking for a position in an environment
          that offers me a greater challenge, increased benefits for my career, and the opportunity
          to help the company advance efficiently and productively.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Academic Qualification:</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Higher Secondary School Certificate (H.S.C):</h3>
          <ul className="list-disc pl-5">
            <li><strong>Institution:</strong> Munshiganj Degree College</li>
            <li><strong>Department:</strong> Humanities</li>
            <li><strong>Passing Year:</strong> 2022</li>
            <li><strong>Board:</strong> Jashore</li>
            <li><strong>Result:</strong> GPA 4.86 (Out of scale 5)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Secondary School Certificate (S.S.C):</h3>
          <ul className="list-disc pl-5">
            <li><strong>Institution:</strong> Abad Chandipur High School</li>
            <li><strong>Department:</strong> Humanities</li>
            <li><strong>Passing Year:</strong> 2020</li>
            <li><strong>Board:</strong> Jashore</li>
            <li><strong>Result:</strong> GPA 4.56 (Out of scale 5)</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Job Experience:</h2>
        <ul className="list-disc pl-5">
          <li>
            Manager of <strong>Monpura Cafe, Restaurant And Community Center</strong>.<br />
            Bypass Road, Satkhira. (01-04-2024 to 01-08-2024)
          </li>
          <li>
            Sales Executive Officer of <strong>Vai Vai Bastroloy</strong>, Garez Bazar, Shyamnagar, Satkhira.<br />
            (10-06-2019 to 01-04-2024)
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Computer Experience:</h2>
        <p>
          Computer fundamentals: Windows XP. Microsoft Office: MS Word, MS Access, MS PowerPoint.<br />
          E-mail, Internet browsing, web searching, chatting.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Personal Information:</h2>
        <ul className="list-disc pl-5">
          <li><strong>Full Name:</strong> MD AL AMIN</li>
          <li><strong>Father’s Name:</strong> Md Mijanur Rahman</li>
          <li><strong>Mother’s Name:</strong> Khaleda Begum</li>
          <li><strong>Present Address:</strong> Vill: Khosalkhali, P.O: Kadamtala, P.S: Shyamnagar, Dist: Satkhira.</li>
          <li><strong>Permanent Address:</strong> Vill: Khosalkhali, P.O: Kadamtala, P.S: Shyamnagar, Dist: Satkhira.</li>
          <li><strong>Home District:</strong> Satkhira</li>
          <li><strong>Date of Birth:</strong> 16-06-2004</li>
          <li><strong>Height:</strong> 5’ - 5”</li>
          <li><strong>Weight:</strong> 52 kg</li>
          <li><strong>Blood Group:</strong> O (+)</li>
          <li><strong>Religious Belief:</strong> Islam</li>
          <li><strong>Marital Status:</strong> Married</li>
          <li><strong>Nationality:</strong> Bangladeshi (By birth)</li>
          <li><strong>Birth Res:</strong> 20048718623025848</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Language Proficiency:</h2>
        <ul className="list-disc pl-5">
          <li>Bengali: Have good command in reading, writing, listening & speaking.</li>
          <li>English: Have good command in reading, writing, listening & speaking.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Reference:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p><strong>A) Md Mizanur Rahman</strong></p>
            <p>Businessman,</p>
            <p>Vai Vai Bastroloy,</p>
            <p>Garez Bazar, Shyamnagar, Satkhira.</p>
            <p>Mobile: 01933-565747</p>
          </div>
          <div>
            <p><strong>B) Md Kamrul Islam</strong></p>
            <p>Businessman,</p>
            <p>Monpura Cafe,</p>
            <p>Satkhira Sadar, Satkhira.</p>
            <p>Mob: 01321-575544</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-bold text-lg border-b border-black mb-2">Declaration:</h2>
        <p>
          I declare that the information above is true to the best of my knowledge. If required and where applicable,
          these documents can be supported by appropriate authentic certificate/papers.
        </p>
        <div className="mt-4 text-right">
          <p><strong>Date:</strong> 14/03/2025</p>
          <p className="mt-6 font-bold">MD AL AMIN</p>
        </div>
      </section>
    </div>
  );
};

export default CV;