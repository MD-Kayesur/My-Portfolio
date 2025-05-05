import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StudentyIntro from "../Pages/StudentyIntro";
import ImTroSection from "../Pages/ImTroSection";
import AboutMe from "../Pages/AboutMe";
import SkillSection from "../Pages/SkillSection";
import Mission from "../Pages/Mission";
import ThanksYou from "../Pages/ThanksYou";
import CaseStudy from "../Pages/CaseStudy";
import about from '../Components/Navbar'
import Skill from '../Components/Navbar'
import Intro from '../Components/Navbar'
import casestudy from '../Components/Navbar'
import top from '../Components/Navbar'
import Projects from '../Components/Navbar'
import Button from "../Components/Button";
import CV from "./CV";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { Copy } from "lucide-react";
  
 

const Home = () => {
    return (
        <div id="top" > 
             <div className="text-5xl font-bold  z-50   fixed bottom-10 right-20 text-red-400"> 
                
            
          <Link
            to="top"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass="active">
            <Button
              button="Go Top"
               
               > </Button>
          </Link>
         
                
                
                 </div>
            <section>    <StudentyIntro ></StudentyIntro></section>
            <section id="Intro"><ImTroSection></ImTroSection></section>
            <section id='About'><AboutMe></AboutMe></section>
          <section id='Skill'>  <SkillSection></SkillSection></section>
          
            <section id='Projects'><Mission ></Mission></section>
           <section id='casestudy'> <CaseStudy></CaseStudy></section>
      <section>      <ThanksYou></ThanksYou></section>

 {/* <Copy></Copy> */}
      {/* <div className="mt-7">
        <CV></CV>
      </div> */}
                 
            
        </div>
    );
};

export default Home;