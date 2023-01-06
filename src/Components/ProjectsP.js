import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import {useState,useEffect} from "react";
const Projects = () => {

  const [WebProjects,setWebProjects]=useState(null);
  const [MobileProjects,setMobileProjects]=useState(null);
  const [WebInnovationProjects,setWebInnovationProjects]=useState(null);
  const [isLoading,setIsLoading]=useState(false);

  useEffect( ()=>
   
  {
    setIsLoading(true)
    fetch('http://localhost:4000/Webprojects').
    then(res=>{ return res.json()}).then(data=>{ setWebProjects(data); setIsLoading(false) ;}) ;
    fetch('http://localhost:4000/Mobileprojects').
    then(res=>{ return res.json()}).then(data=>{ setMobileProjects(data); setIsLoading(false) ;}) ;
    fetch('http://localhost:4000/Innovationprojects').
    then(res=>{ return res.json()}).then(data=>{ setWebInnovationProjects(data); setIsLoading(false) ;}) ;
   }
  
  ,[]);



    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Here are some projects  I developed with source code</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Web Application</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Mobile Application</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Innovation</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            
                              { 
                                  WebProjects  && WebProjects.map((project,index) => {
                                    

                                      return (
                                        <ProjectCard
                                            key={index}
                                          {...project}
                                            
                                          />
                                      
                                      )
                                  })
                              }
                              {
                                  isLoading && <div>Loading...</div>
                              }
                              {
                                 !WebProjects && !isLoading && <div>No project</div>
                              }
                            
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                              
                              { 
                                  MobileProjects  && MobileProjects.map((project,index) => {
                                    

                                      return (
                                        <ProjectCard
                                            key={index}
                                          {...project}
                                            
                                          />
                                      
                                      )
                                  })
                              }
                              {
                                  isLoading && <div>Loading...</div>
                              }
                              {
                                !MobileProjects && !isLoading && <div>No project</div>
                              }
                            
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                              
                                { 
                                    WebInnovationProjects  && WebInnovationProjects.map((project,index) => {
                                      

                                        return (
                                          <ProjectCard
                                              key={index}
                                            {...project}
                                              
                                            />
                                        
                                        )
                                    })
                                }
                                {
                                    isLoading && <div>Loading...</div>
                                }
                                {
                                  !WebInnovationProjects && !isLoading && <div>No project</div>
                                }
                              
                            </Row>
                        </Tab.Pane>
                        
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
};

export default Projects;