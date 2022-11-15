import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
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
              <h2>Technical Skills</h2>
              <br />
              <br />
              <br />
              <Carousel
                autoPlay={true}
                autoPlaySpeed={1000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                responsive={responsive}
                customTransition="1s linear"
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=html"}
                    alt="Image"
                  />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={"https://skillicons.dev/icons?i=css"} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=javascript"}
                    alt="Image"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=react"}
                    alt="Image"
                  />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=redux"}
                    alt="Image"
                  />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=express"}
                    alt="Image"
                  />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=nodejs"}
                    alt="Image"
                  />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=mongo"}
                    alt="Image"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=bootstrap"}
                    alt="Image"
                  />
                  <h5>BootStrap</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=tailwind"}
                    alt="Image"
                  />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=github"}
                    alt="Image"
                  />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=heroku"}
                    alt="Image"
                  />
                  <h5>Heroku</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=netlify"}
                    alt="Image"
                  />
                  <h5>Netlify</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://skillicons.dev/icons?i=fastapi"}
                    alt="Image"
                  />
                  <h5>Chakra UI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
