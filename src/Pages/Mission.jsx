import React from "react";
import Image from "../images/screencapture-car-.png"; // If you're using Next.js, otherwise use <img />
import Image2 from "../images/screencapture-building-manegment-web-app-2025-04-16-00_55_03.png"; // If you're using Next.js, otherwise use <img />
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function Mission() {
  return (
    <>
 <Header title={'My Latest Projects'}></Header>

    <div className="min-h-screen bg-[#1a1d52] text-white px-8 py-12 grid md:grid-cols-3 gap-12 items-center">
   
      <div>
        <h2 className="text-4xl font-bold  mb-4">car-swift</h2>
        <a className="underline" href="https://car-swift.web.app" target="_blank" rel="noopener noreferrer">
  Visit the website
</a>

         
        <div className="mt-8">
          <div className="w-64 h-64 rounded-full  clip-path-custom">
            <a  href="https://i.ibb.co.com/9k9s5qND/screencapture-car.png">

            <img
              src={Image}
              alt="Mission"
              className="w-full rounded-full  h-full object-cover"
              />
              </a>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-[20px] right-[20px] w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center"> */}

      <div className="  -rotate-30 w-full h-1 bg-cyan-500 transform skew-x-260"></div>
      
      

  
      <div className="text-right">
        <div className="w-64 h-64 ml-auto mb-8 rounded-full overflow-hidden clip-path-custom">
          <a href="https://i.ibb.co.com/N2m9cHB0/screencapture-building-manegment-web-app-2025-04-16-00-55-03.png">
          {/* <a href="https://building-manegment.web.app/"> */}

          <img
            src= {Image2}
            alt="Vision"
            className="w-full h-full object-cover"
            />
            </a>
        </div>
        <h2 className="text-4xl font-bold mb-4">building-manegment</h2>
        <a className="underline" href="https://building-manegment.web.app/" target="_blank" rel="noopener noreferrer">
  Visit the website
</a>
         
      </div>

      <style jsx>{`
        .clip-path-custom {
          clip-path: ellipse(50% 60% at 50% 50%);
        }
      `}</style>
    </div>
    </>
  );
}