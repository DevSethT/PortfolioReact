import "./Main.css";
import { NavLink } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../utils/projects"; // adjust path to your constants

function Main() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="main-page">
      <div className="main-layout">
        <section className="main-hero">
          <h1 className="main-hero__title">Seth Taylor – Software Developer</h1>
          <p className="main-hero__intro">
            Software engineering student focused on building clean, user-friendly web apps
            while growing into a full-stack developer.
          </p>

          <div className="main-hero__links">
            <NavLink to="/projects" className="main-hero__link">View Projects</NavLink>
            <NavLink to="/contact-me" className="main-hero__link">Contact Me</NavLink>
          </div>
        </section>

        <section className="main-about">
          <h2 className="main-about__title">About Me</h2>
          <p className="main-about__text">
            Short paragraph about who you are, what you enjoy building, and where you’re heading.
          </p>
        </section>

        <aside className="main-side">
          <div className="main-side__header">
            <h2 className="main-side__title">Featured Projects</h2>
          </div>

          <div className="main-side__cards">
            {featuredProjects.map((project) => (
              <div className="main-side__card" key={project.title}>
                <ProjectCard projectInfo={project} />
              </div>
            ))}
          </div>

          <NavLink to="/projects" className="main-side__all">
              View all →
            </NavLink>
        </aside>
      </div>
    </div>
  );
}

export default Main;
