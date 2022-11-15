import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import picture from "../assets/img/Akash_Pic.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <h1>About</h1>
        <Row className="align-items-center justify-content-center about-row">
          <Col xs={12} md={5} xl={4} className={"about-image-div"}>
            <img src={picture} alt="akash-pic" />
          </Col>
          <Col xs={12} md={5} xl={6}>
            <p>
              Hi,{" "}
              <span>
                <img
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  alt="hi-logo"
                />{" "}
              </span>
              I'm Akash Kumar. A Passionate Full Stack Web Developer from
              Himachal Pradesh, India. Enjoys working closely with team members.
              Proficient in ReactJS, Redux, JavaScript, ES6, HTML5 and CSS3 with
              modern libraries and frameworks.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
