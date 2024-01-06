import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/images/logo.png";
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";

import "./_Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" className="logo-fotter" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sufana">
                <img src={navIcon1} alt="linkidin-icon" />
              </a>
              <a href="https://github.com/SufanaH">
                <img src={navIcon2} alt="gitHub-icon" />
              </a>
              <a href="https://twitter.com/Suufana">
                <img src={navIcon3} alt="twitter-icon" />
              </a>
            </div>
            <p>Copyright © 2024 Sufana Alkushi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
