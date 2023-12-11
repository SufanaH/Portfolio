import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './projectsCard';
import projImg1 from '../../assets/images/project-img1.png';
import projImg2 from '../../assets/images/project-img2.png';
import projImg3 from '../../assets/images/project-img3.png';
import projImg4 from '../../assets/images/project-img4.png';
//import colorSharp2 from '../../assets/images/project-img.png';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './_Projects.scss'

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  gitHubLink?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce App',
      description: 'Full-stack Developmet & Design',
      imgUrl: projImg1,
      gitHubLink: 'https://github.com/SufanaH/Store-Rise-Website' ,
      
    },
    {
      title: 'Budget App',
      description: 'Full-stack Developmet & Design',
      imgUrl: projImg2,
    },
    {
      title: 'Company portal app',
      description: 'Using Redux for fetching companies data from APIs',
      imgUrl: projImg3,
    },
    {
      title: 'E-commerce landing page',
      description: 'Design & Development',
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
{/*       <img className="background-image-right" src={colorSharp2} alt="Background"></img>
 */}    </section>
  );
};
