import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/overstock.png";
import projImg2 from "../assets/img/swiggy.png";
import projImg3 from "../assets/img/shine.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section className="project" id="project">
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
                  <br />
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">OverStock</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Swiggy</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Shine</Nav.Link>
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
                          <ProjectCard
                            imageClass={"proj-tech1"}
                            heading={"OverStock.com (Clone)"}
                            title="Overstock.com Inc. is an online retailer and technology company. The Company is an e-commerce retailer offering customers a range of brands for the home at low prices."
                            type={`Team Project | Duration : 1 Week`}
                            imgUrl={projImg1}
                            techStack={
                              "https://skillicons.dev/icons?i=react,redux,fastapi,heroku,css,js"
                            }
                            gitHref={
                              "https://github.com/web-dev-akash/Team_OverStock"
                            }
                            netlifyHref={
                              "https://overstock-clone-akash.netlify.app/"
                            }
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech2"}
                            heading={"Swiggy.com (Clone)"}
                            title="Swiggy is an Indian online food ordering and delivery platform.Swiggy offers an online ordering platform for a variety of listed neighborhood partner restaurants and their fleet of delivery personnel who pick up orders from the partner restaurants and deliver them to customers' doorsteps."
                            type={`Team Project | Duration : 1 Week`}
                            imgUrl={projImg2}
                            techStack={
                              "https://skillicons.dev/icons?i=html,css,js,heroku,bootstrap,"
                            }
                            gitHref={
                              "https://github.com/ramgopalshukla/swiggyclone"
                            }
                            netlifyHref={
                              "https://swiggy-clone-akash.netlify.app/"
                            }
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech3"}
                            heading={"Shine.com (Clone)"}
                            title="Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry."
                            type={`Team Project | Duration : 1 Week`}
                            imgUrl={projImg3}
                            techStack={
                              "https://skillicons.dev/icons?i=html,css,js,heroku,,"
                            }
                            gitHref={
                              "https://github.com/web-dev-akash/Team_Shine"
                            }
                            netlifyHref={"http://shine-akash.netlify.app/"}
                          />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
