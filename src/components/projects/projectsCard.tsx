import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  gitHubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, gitHubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="github-link">
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="white-icon">
                <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
              </a>
            </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
