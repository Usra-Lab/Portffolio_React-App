
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import social1 from '../assets/img/nav-icon1.svg';




const NavBar = () => {
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect( () =>{
        const onscrolle = () =>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

    
    },[])

    const onUpdateActiveLink=(value) =>{
        setActiveLink(value);
    }


    return (
        <div>
            <Navbar bg="dark" expand="lg" className={scrolled? "scrolled" : ""} fixed="top" >
                <Container>
                    <Navbar.Brand href="#home"><span className='logo'>Usra</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className='navbar-toggler-icon'></span></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink ==='home'? "active navbar-link":"navbar-link"} onClick={() =>{onUpdateActiveLink('home')}}>home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink ==='skills'? "active navbar-link":"navbar-link"} onClick={() =>{onUpdateActiveLink('skills')}}>skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink ==='projects'? "active navbar-link":"navbar-link"} onClick={() =>{onUpdateActiveLink('projects')} }>projects</Nav.Link>
                    </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="#"><img src={social1} alt="social1" /></a>                             
                            </div>
                        <Nav.Link href="#connect"> <button className='vdd' onClick={() => console.log('connect')} ><span>Let's Connect</span></button></Nav.Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;