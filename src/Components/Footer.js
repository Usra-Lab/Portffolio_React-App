import React from 'react';

import {Container,Row,Col} from "react-bootstrap";
import social1 from '../assets/img/nav-icon1.svg';


const Footer = () => {
    return (

        <footer className='footer'>
             <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <span className='logo'>Usra</span>
                    </Col>
                    <Col sm={6} className="text-center text-small-end socialscopyright">
                        <div className='social-icon'>
                            <a href="#"><img src={social1} alt="social1" /></a>
                        </div>
                        <small>CopyRight 2022 . All Right Reserved</small>
                    </Col>
                </Row>
             </Container>
        </footer>
    );
};

export default Footer;