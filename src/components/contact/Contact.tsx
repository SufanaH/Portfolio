import React, { useState, FormEvent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import contactImg from "../../assets/images/contact-image.svg";
import TrackVisibility from "react-on-screen";

import "./_Contact.scss";

interface FormDetails {
  userName: string;
  email: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    userName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] =
    useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>("Send");
  const [status, setStatus] = useState<Status>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const serviceId = "service_j4h76bm";
      const templateId = "template_ob5w9vs";
      const userId = "oD_OXFmNxoedMP_qI";
      if (!isValidEmail(formDetails.email)) {
        throw new Error("Invalid email address");
      }

      const emailParams = {
        to_name: "Recipient Name",
        from_name: formDetails.userName,
        from_email: formDetails.email,
        message: formDetails.message,
      };

      await emailjs.send(serviceId, templateId, emailParams, userId);

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.userName}
                          placeholder="Your Name"
                          onChange={(e) =>
                            onFormUpdate("userName", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows={6}
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
