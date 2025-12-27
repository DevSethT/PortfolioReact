import "./Main.css"
import { NavLink } from "react-router-dom";

function Main(){
    return (
        <div className="main-page">
            <div className="main-hero">
                <h1 className="main-hero__title">Seth Taylor-Software Developer</h1>
                <p className="main-hreo__intro">Software engineering student focused on building clean, user-friendly web apps while growing into a full-stack developer.</p>
           <p> Here is a Link to all my <NavLink to="/projects" className="main-hero_links">
              Projects
            </NavLink>
            </p>
            <p>How to <NavLink to="/contact-me" className="main-hero_links">
              Contact 
            </NavLink>
             {" "}me</p>
            </div>
            <div className="main-projects">
                <div className="main-projects__header">
                    <NavLink to="/projects" className="main-hero_links">
                    View projects
                    </NavLink>
                </div>
                <div className="main-project__cards">
                    <div className="main-project__cards-header">
                        <h2 className="main-project__cards-title">Projects</h2>
                    </div>
                    <div className="main-project__card">
                        <div className="main-project__card-image">
                        <img src="#" alt="project screenshot" />
                        </div>
                        <div className="main-project__card-content">
                        <h2 className="main-project__card-title">Project name</h2>
                        <p className="main-project__card-description">Project Description</p>
                        </div>
                    </div>
                    <div className="main-project__card">
                        <div className="main-project__card-image">
                        <img src="#" alt="project screenshot" />
                        </div>
                        <div className="main-project__card-content">
                        <h2 className="main-project__card-title">Project name</h2>
                        <p className="main-project__card-description">Project Description</p>
                        </div>
                    </div>
                    <div className="main-project__card">
                        <div className="main-project__card-image">
                        <img src="#" alt="project screenshot" />
                        </div>
                        <div className="main-project__card-content">
                        <h2 className="main-project__card-title">Project name</h2>
                        <p className="main-project__card-description">Project Description</p>
                        </div>
                    </div>
                    {/* main Cards container div*/}
                </div> 
                <div className="main-about">
                    <div className="main-about__header">
                        <h2>About Me</h2>
                    </div>
                    <div className="main-about__content">
                        short paragrah
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;