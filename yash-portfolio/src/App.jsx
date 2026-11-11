
import { useState } from "react";
import {
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Download,
  Code2,
  GraduationCap,
  ExternalLink,
  MapPin
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Responsive Design",
  "Git",
  "GitHub",
  "Python"
];

const projects = [
  {
    name: "CampusSwap",
    category: "React Application",
    description:
      "A student-focused marketplace concept where college students can buy, sell and exchange second-hand items.",
    technologies: ["React", "JavaScript", "CSS"],
    status: "In Development"
  },
  {
    name: "Weather Application",
    category: "API Based Application",
    description:
      "A weather application that displays current weather conditions and forecasts using a weather API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    status: "Practice Project"
  },
  {
    name: "Movie Finder",
    category: "Web Application",
    description:
      "A movie discovery application that allows users to search for movies and explore their information.",
    technologies: ["React", "JavaScript", "API"],
    status: "Practice Project"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            YASH<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <a href="#contact" className="nav-contact">
            Let's Talk <ArrowUpRight size={16} />
          </a>

        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero section" id="home">

          <div className="hero-content">

            <div className="availability">
              <span></span>
              Open to Internship Opportunities
            </div>

            <p className="intro-text">HELLO, I'M YASH KUMAR</p>

            <h1>
              Frontend Developer
              <br />
              <span>Building for the Web.</span>
            </h1>

            <p className="hero-description">
              I'm a BCA Artificial Intelligence and Machine
              Learning student passionate about creating
              modern, responsive and interactive web
              applications using React and JavaScript.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary-btn">
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                className="btn secondary-btn"
                download
              >
                Download Resume
                <Download size={18} />
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/662saurav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a href="#contact" aria-label="Email">
                <Mail />
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="profile-card">

              <div className="profile-icon">
                <Code2 size={55} />
              </div>

              <h2>Yash Kumar</h2>

              <p>Frontend Developer</p>

              <div className="profile-details">
                <div>
                  <GraduationCap size={17} />
                  BCA AIML Student
                </div>

                <div>
                  <MapPin size={17} />
                  India
                </div>
              </div>

              <div className="profile-bottom">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>React</span>
              </div>

            </div>

          </div>

        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">

          <div className="section-heading">
            <span>ABOUT ME</span>
            <h2>Who I Am</h2>
          </div>

          <div className="about-content">

            <div className="about-text">
              <h3>
                Turning ideas into
                <span> digital experiences.</span>
              </h3>

              <p>
                I'm currently pursuing BCA in Artificial
                Intelligence and Machine Learning at
                Galgotias University.
              </p>

              <p>
                I enjoy building web applications, solving
                development problems and learning new
                technologies. My current focus is frontend
                development with React.js.
              </p>

              <p>
                I'm looking for opportunities where I can
                improve my development skills and contribute
                to real-world projects.
              </p>
            </div>

            <div className="about-highlight">
              <GraduationCap size={35} />

              <h3>Education</h3>

              <h4>Bachelor of Computer Applications</h4>

              <p>Artificial Intelligence & Machine Learning</p>

              <p>Galgotias University</p>
            </div>

          </div>

        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">

          <div className="section-heading">
            <span>MY TECHNOLOGIES</span>
            <h2>Skills & Expertise</h2>
            <p>Technologies I use and currently practice.</p>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <Code2 size={22} />
                <h3>{skill}</h3>
              </div>
            ))}

          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">

          <div className="section-heading">
            <span>MY WORK</span>
            <h2>Featured Projects</h2>
            <p>Some of my development projects and experiments.</p>
          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>

                <div className="project-top">
                  <span>0{index + 1}</span>

                  <Code2 size={27} />
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>{project.status}</span>

                  <a
                    href="https://github.com/662saurav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit GitHub for ${project.name}`}
                  >
                    GitHub <ExternalLink size={15} />
                  </a>
                </div>

              </article>
            ))}

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">

          <div className="contact-content">

            <span>CONTACT ME</span>

            <h2>
              Let's build something
              <br />
              <span>meaningful together.</span>
            </h2>

            <p>
              Looking for a frontend developer intern?
              Have an interesting project? Let's connect.
            </p>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="btn primary-btn"
            >
              <Mail size={18} />
              Get In Touch
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-socials">

              <a
                href="https://github.com/662saurav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          YASH<span>.</span>
        </a>

        <p>Designed & developed by Yash Kumar.</p>

        <p>
          © {new Date().getFullYear()} Yash Kumar.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
