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
import Button from "../Components/Button";
 

const Home = () => {
    return (
        <div id="top" > 
             
            <section>    <StudentyIntro ></StudentyIntro></section>
            <section id="Intro"><ImTroSection></ImTroSection></section>
            <section id='About'><AboutMe></AboutMe></section>
          <section id='Skill'>  <SkillSection></SkillSection></section>
            <section><Mission></Mission></section>
           <section id='casestudy'> <CaseStudy></CaseStudy></section>
      <section>      <ThanksYou></ThanksYou></section>
                 
            
        </div>
    );
};

export default Home;