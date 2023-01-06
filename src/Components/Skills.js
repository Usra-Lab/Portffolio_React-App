import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png"
import SkillCard from './SkillCard';

const Skills = () => {

    const skills = [
        {
          icon:<FaHtml5/>,
          title:'HTML5',
        },
        {
            icon:<FaCss3Alt/>,
            title:'CSS3',
          },
          {
            icon:<FaBootstrap/>,
            title:'BOOTSTAP5',
          },
          {
            icon:<SiMysql/>,
            title:'MYSQL',
          },
          {
            icon:<FaJava/>,
            title:'JAVA',
          },
          {
            icon:<FaPhp/>,
            title:'PHP',
          },
         

          {
            icon:<FaLaravel/>,
            title:'LARAVEL',
          },
          {
            icon:<FaReact/>,
            title:'REACT',
          },
          {
            icon:<SiVisualstudio/>,
            title:'Visualstudio',
          },

          {
            icon:<SiVisualstudiocode/>,
            title:'Visualstudiocode',
          },
          {
            icon:<SiAndroidstudio/>,
            title:'Androidstudio',
          },
          {
            icon:<FaGithubAlt/>,
            title:'GITHUB',
          },
    ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
        
      };
    return (

        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Professional Skills</h2>
                        <p>IT BRINGS TOGRTHER MY SKILLS IN FRONTEND & BACKEND & DATABASE & IDE & SOFTWARE && TOOLS</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {
                              skills.map((Skill, index) => {
                                return (
                                  <SkillCard
                                    key={index}
                                    {...Skill}
                                    />
                                )
                              })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
   
    );
};

export default Skills;