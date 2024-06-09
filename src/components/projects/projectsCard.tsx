import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';




interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  gitHubLink?: string;
  LinkTo?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, gitHubLink,LinkTo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-links">
            {gitHubLink && (
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="white-icon">
                <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
              </a>
            )}
            {LinkTo && (
              <a href={LinkTo} target="_blank" rel="noopener noreferrer" className="white-icon">
                <FontAwesomeIcon className="arrow-icon" icon={faMedium} size="2x" color="white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
