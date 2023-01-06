import React from 'react';
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl,GithubLink }) => {
    return (
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a className='project-link' href={GithubLink} target="_blank">Source Code</a>
          </div>
        </div>
      </Col>
    );
};

export default ProjectCard;