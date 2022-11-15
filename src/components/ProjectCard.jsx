import { BsGithub } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

export const ProjectCard = ({
  title,
  type,
  imgUrl,
  heading,
  techStack,
  gitHref,
  netlifyHref,
  imageClass,
}) => {
  return (
    <div className="proj-wrapper">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{heading}</h4>
          <p>{title}</p>
          <span>{type}</span>
          <div className={imageClass}>
            <p>Tech Stack</p>
            <img src={techStack} alt="project-teach-stack" />
          </div>
          <div className="proj-buttons">
            <a href={gitHref} className="proj-button1" target="_blank">
              <span>
                <BsGithub />
              </span>
              {"  "}
              Github
            </a>
            <a href={netlifyHref} className="proj-button2" target="_blank">
              <span>
                <FaRocket />
              </span>
              {"  "}
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
