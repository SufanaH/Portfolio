import React from "react";
import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import ProjectCard from "./projectsCard";
import projImg1 from "../../assets/images/project-img1.png";
import projImg2 from "../../assets/images/project-img2.png";
import projImg3 from "../../assets/images/project-img3.png";
import projImg4 from "../../assets/images/project-img4.png";
import ui1 from "../../assets/images/uiux/1.png";
import ui2 from "../../assets/images/uiux/2.png";
import ui3 from "../../assets/images/uiux/3.png";
import ui4 from "../../assets/images/uiux/4.png";
import ui5 from "../../assets/images/uiux/5.png";
import ui6 from "../../assets/images/uiux/6.png";
import ui12 from "../../assets/images/uiux/12.png";
import ui13 from "../../assets/images/uiux/13.png";
import ui14 from "../../assets/images/uiux/14.png";
import ui15 from "../../assets/images/uiux/15.png";
import ui16 from "../../assets/images/uiux/16.png";
import ui17 from "../../assets/images/uiux/17.png";
import ui18 from "../../assets/images/uiux/18.png";
import ui19 from "../../assets/images/uiux/19.png";
import ui20 from "../../assets/images/uiux/20.png";

import TrackVisibility from "react-on-screen";
import "./_Projects.scss";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  gitHubLink?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Management App",
      description: "Full-stack Developmet & Design",
      imgUrl: projImg1,
      gitHubLink: "https://github.com/SufanaH/E-commerce-Management-App",
    },
    {
      title: "Budget Management App",
      description: "Full-stack Developmet & Design",
      imgUrl: projImg2,
      gitHubLink: "https://github.com/SufanaH/Budget-Management-App",
    },
    {
      title: "Company portal app",
      description: "Using Redux for fetching companies data from APIs",
      imgUrl: projImg3,
      gitHubLink: "https://github.com/SufanaH/Company-Portal-App",
    },
    {
      title: "E-commerce landing page",
      description: "Design & Development",
      imgUrl: projImg4,
      gitHubLink: "https://github.com/SufanaH/E-commerce-Landing-page",
    },
  ];

  const uiUxDesigns = [
    {
      image: ui1,
    },
    {
      image: ui2,
    },
    {
      image: ui3,
    },
    {
      image: ui4,
    },
    {
      image: ui5,
    },
    {
      image: ui6,
    },
  ];

  const artDesigns = [
    {
      image: ui12,
    },
    {
      image: ui13,
    },
    {
      image: ui14,
    },
    {
      image: ui15,
    },
    {
      image: ui16,
    },
    {
      image: ui17,
    },
    {
      image: ui18,
    },
    {
      image: ui19,
    },
    {
      image: ui20,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore the showcased projects below to witness firsthand my
                    commitment to innovation, attention to detail, and a keen
                    understanding of the ever-evolving landscape of web
                    technologies.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI UX </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Carousel>
                          {uiUxDesigns.map((design, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-100"
                                src={design.image}
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Carousel>
                          {artDesigns.map((art, index) => (
                            <Carousel.Item key={index}>
                              <img className="d-block w-100" src={art.image} />
                            </Carousel.Item>
                          ))}
                        </Carousel>
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
       */}{" "}
    </section>
  );
};
