import "./Projects.css";

import { projects } from "../../utils/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projectCards = projects.map((project) => (
    <ProjectCard key={project.id} projectInfo={project} />
  ));

  return (
    <div className="projects-page">
      <h1 className="projects-page__title">Projects</h1>
      <div className="projects-card__container">{projectCards}</div>
    </div>
  );
}

export default Projects;
