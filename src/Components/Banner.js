import {Container,Row,Col,Nav} from "react-bootstrap";

import React from 'react';

import pimg from "../assets/img/Pimg.png";

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline"> Welcome to my Portfolio</span>
                     <h1>{'Hi, I\'am a Software Engineer Student'}</h1>
                     <p>
                     I am Yousra from Morocco, As a software engineer student,I present to you my skills in the development field ;
                     
                     <ul>
                        <li>Analyse user requirements && conception</li>
                        <li>Write and test code, refining and rewriting it as necessary</li>
                        <li>Develop existing programs by analysing and identifying areas for modification</li>
                        <li>knowledge of computer systems and technologies</li>
                        <li>A logical, analytical and creative approach to problems</li>
                        <li>The ability to work both in a team and alone </li>
                        <li>Career motivation and a willingness to continue to further my knowledge and skills</li>
                    </ul>
                    </p>
                     <Nav.Link href="#connect"><button onClick={() =>console.log('connect')} >Let's connect</button></Nav.Link>
                    </Col>
                    <Col xs={10} md={6} xl={5}>
                        <img src={pimg}  alt="PersonelImg" className="pimg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Banner;