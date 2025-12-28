import "./ProjectCard.css";

function ProjectCard({ projectInfo }) {
  return (
    <div className="projectcard">
      <div className="projectcard__image-container">
        {/* image pulled from url or file havnt desided yet and surce and ult auto fill in*/}
        <img src="#" alt="#" className="projectcard__image" />
      </div>
      <div className="projectcard__info">
        {/* Title pulled from a constants.s */}
        <h2 className="projectcard__title">{projectInfo.title}</h2>
        {/* description pulled from a constants.s */}
        <p className="projectcard__discription">{projectInfo.description}</p>
        {/* techstacks used */}
        <p className="projectcard__teckstack"></p>
        <div className="projectcard__links-contaner">
          <ul className="projectcard__links">
            {/* Link to Giithub repository */}
            <li className="projectcard__link">
              <a href={projectInfo.githubUrl}>Github</a>
            </li>
            {/* link to live project as the "Live Project" text */}
            <li className="projectcard__link">
              {projectInfo.isLive ? (
                <a
                  href={projectInfo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              ) : (
                <span>Not live yet</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
