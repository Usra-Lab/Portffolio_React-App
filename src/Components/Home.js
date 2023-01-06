import NavBar from './NavBar';
import React from 'react';
import Banner from './Banner';
import  Skills  from './Skills';
import Projects from './ProjectsP';
import {Contact} from './Contact';
import Footer from './Footer';

 
 const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
 };
 
 export default Home;