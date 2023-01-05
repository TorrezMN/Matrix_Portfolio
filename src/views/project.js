import "./css/project.css";

function Project(props) {
  let project_links = props.video_urls.map((item) => {
    return (
      <a href={item} className="project-link">
        Watch +
      </a>
    );
  });

  return (
    <div className="project-container">
      <span className="project-title">{props.title}</span>
      <p className="project-description">{props.desc}</p>
      <div className="project-links">{project_links}</div>
    </div>
  );
}

export default Project;
