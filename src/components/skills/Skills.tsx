import React from "react";
import meter1 from "../../assets/images/meter1.svg";
import meter3 from "../../assets/images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./_Skills.scss";

const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Committed to self-development and knowledge sharing, engaged in mentoring activities and
                delivered several public speeches
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Development</h5>
                  <p>
                    {" "}
                    React.js, TypeScript, JavaScript, SCSS, Bootstrap, HTML,
                    CSS, Redux
                  </p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>UI/UX Design</h5>
                  <p>
                    Adobe Illustrator, Figma, Prototyping Design, Graphic Design
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Backend Development</h5>
                  <p>Node.js, Express</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Database Management</h5>
                  <p>MongoDB</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
