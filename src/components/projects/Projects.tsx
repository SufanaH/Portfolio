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
import ui20 from "../../assets/images/uiux/20.png";
import ui21 from "../../assets/images/uiux/21.png";
import caseStudy2 from "../../assets/caseStudies/2.png";
import caseStudy1 from "../../assets/caseStudies/1.png";
import caseStudy3 from "../../assets/caseStudies/3.png";
import caseStudy4 from "../../assets/caseStudies/4.png";
import caseStudy5 from "../../assets/caseStudies/5.png";

import TrackVisibility from "react-on-screen";
import "./_Projects.scss";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  gitHubLink?: string;
  LinkTo?: string;
}

export const Projects: React.FC = () => {
  const caseStudies = [
    {
      title: "Beach Activities Booking App",
      description: "Product Design Case Study",
      imgUrl: caseStudy2,
      LinkTo:
        "https://medium.com/@sufana/beach-activities-booking-app-product-design-case-study-54b5314cf088",
    },
    {
      title: "Fitness App",
      description: "Product Design Case Study",
      imgUrl: caseStudy1,
      LinkTo:
        "https://medium.com/@sufana/fitness-app-product-design-case-study-0c6f2009451f",
    },
    {
      title: "PlantMate",
      description: "Case Study in Responsive Web Design for Plant Enthusiasts",
      imgUrl: caseStudy3,
      LinkTo:
        "https://medium.com/@sufana/market-research-case-study-on-a-responsive-e-commerce-product-plant-mate-fba085c1cf31",
    },
    {
      title: "Redesign Albilad Mobile Banking App",
      description: "UX Case Study with Visual Enhancements",
      imgUrl: caseStudy4,
      LinkTo:
        "https://medium.com/@sufana/redesign-albilad-mobile-banking-app-a-ux-case-study-with-visual-enhancements-1277a8d69dc1",
    },
    {
      title: "Waiting Dashboard",
      description: "UX Research Case Study for Sehaty App",
      imgUrl: caseStudy5,
      LinkTo:
        "https://medium.com/@sufana/waiting-dashboard-ux-research-case-study-for-sehaty-app-aba5fbfc3092",
    },
  ];
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
      image: ui5,
    },
    {
      image: ui6,
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
  ];

  const artDesigns = [
    {
      image: ui21,
    },
    {
      image: ui13,
    },
    {
      image: ui14,
    },
    {
      image: ui12,
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
                        <Nav.Link eventKey="first">UX Case Studies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Full Stack Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second-2">UI</Nav.Link>
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
                          {caseStudies.map((caseStudy, index) => (
                            <ProjectCard key={index} {...caseStudy} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second-2">
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
