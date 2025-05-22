import React from "react";
import img from '../images/0b7fb41a-3019-4644-b657-c8f76a91b6f4.jpeg'
 const CaseStudy = () => {

  const action=[
    {Name:'HSC', Collage:'Munshigang Degree Collage'},
    {Name:'SSC', Collage:'Abad-Chandipur Secondery High School'},
    
  ]
  return (
    <div  className="min-h-screen bg-[#0D1A43] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-12 text-white animated-gradient">Case Study</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src={img}
            alt="Library"
            className="w-72 h-72 rounded-full object-cover"
          />
          <div className="absolute bottom-[20px] right-[20px] w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
            📖 {/* Replace with an icon if needed */}
          </div>
        </div>

        {/* Vertical Green Line */}
        <div className="absolute left-[10%] bottom-[3%]  md:left-[38%] h-[300px] w-[1px] bg-green-400 z-0"></div>

        {/* Horizontal Lines + Text */}
        <div className="flex flex-col gap-16 z-10 ml-6">
          { action.map((title, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Horizontal green line */}
              <div className="w-12 h-[1px] bg-green-400"></div>
              <div>
                <h4 className="font-bold">{title.Name}</h4>
                <p className="text-gray-300">
                  { title.Collage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
