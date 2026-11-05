import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiDownload
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero section" id="home">

      <div className="hero-content">

        <span className="availability">
          <span className="status-dot"></span>
          Available for Summer Internship
        </span>

        <p className="hero-intro">Hello, I'm</p>

        <h1>
          Yash Kumar<span>.</span>
        </h1>

        <h2>
          Aspiring <span>Frontend Developer</span>
        </h2>

        <p className="hero-description">
          I'm a BCA student specializing in Artificial Intelligence
          and Machine Learning at Galgotias University.
          I enjoy building responsive and user-friendly web
          applications using modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <FiArrowUpRight />
          </a>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume <FiDownload />
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/YOUR_USERNAME"
             target="_blank" rel="noreferrer"
             aria-label="GitHub">
            <FiGithub />
          </a>

          <a href="https://linkedin.com/in/YOUR_USERNAME"
             target="_blank" rel="noreferrer"
             aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>

      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img
            src="/images/profile.png"
            alt="Yash Kumar"
          />
        </div>

        <div className="floating-card">
          <span>⚡</span>
          <div>
            <strong>React Developer</strong>
            <small>Building for the web</small>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;