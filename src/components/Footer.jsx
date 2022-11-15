import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-col-image">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/akash-kumar-902a62169/"
                target={"_blank"}
              >
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="mailto: akumar415129.ak@gmail.com">
                <span>
                  <MdEmail />
                </span>
              </a>
              <a href="https://github.com/web-dev-akash" target={"_blank"}>
                <span>
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7018178377"
                target={"_blank"}
              >
                <span>
                  <FaWhatsapp />
                </span>
              </a>
            </div>
            <p>
              Made with{" "}
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                  alt="love-icon"
                />
              </span>{" "}
              by Akash Kumar.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
