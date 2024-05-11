import React from "react";
import dev1 from '../../assets/images/skills/dev1.png'
import dev2 from '../../assets/images/skills/dev2.png'
import dev3 from '../../assets/images/skills/dev3.png'
import dev4 from '../../assets/images/skills/dev4.png'
import dev5 from '../../assets/images/skills/dev5.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./_Skills.scss";

const Skills: React.FC = () => {
  const skillsData = [
    {
      image: dev5,
      title: "UX Research",
      description: "Surveys, Interviews, Competitive analysis, Mapping competitors, Analysing market trends",
    },
    {
      image: dev2,
      title: "UI/UX Design",
      description: "UX Design Methodologies, Prototyping Design, Usability Testing, Figma, Adobe Illustrator",
    },
    {
      image: dev1,
      title: "Frontend Development",
      description: "React.js, TypeScript, JavaScript, SCSS, Bootstrap, HTML, CSS, Redux",
    },
    {
      image: dev3,
      title: "Backend Development",
      description: "Node.js, Express",
    },
    {
      image: dev4,
      title: "Database Management",
      description: "MongoDB",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Committed to self-development and knowledge sharing, engaged in
                mentoring activities and delivered several public speeches
              </p>
              <Slider {...settings}>
                {skillsData.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.image} alt={skill.title} className="skills-images" />
                    <div className="skills-contetnt">
                      <h5>{skill.title}</h5>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
