import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Weather Application",
      description:
        "A weather application that allows users to search for a city and view its weather information using a weather API.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: "",
      demo: ""
    },
    {
      number: "02",
      title: "Movie Rating Application",
      description:
        "A movie search application that retrieves movie details and ratings using a movie database API.",
      tech: ["HTML", "CSS", "JavaScript", "OMDb API"],
      github: "",
      demo: ""
    }
  ];

  return (
    <section className="section projects" id="projects">

      <div className="section-heading">
        <span>WHAT I'VE BUILT</span>
        <h2>Featured Projects</h2>
        <p>Some of my personal development projects.</p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <span className="project-number">
              {project.number}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">

              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FiGithub /> GitHub
                </a>
              ) : (
                <span className="project-pending">
                  GitHub link pending
                </span>
              )}

              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <FiExternalLink />
                </a>
              ) : (
                <span className="project-pending">
                  Demo pending
                </span>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;