import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight
} from "react-icons/fi";

function Contact() {
  return (
    <section className="section contact" id="contact">

      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Work Together</h2>
        <p>
          I'm interested in summer internship opportunities
          and collaborative development projects.
        </p>
      </div>

      <div className="contact-box">

        <h3>Have an opportunity for me?</h3>

        <p>
          Feel free to reach out. I'd be happy to connect
          and discuss potential opportunities.
        </p>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="primary-btn"
        >
          <FiMail /> Contact Me <FiArrowUpRight />
        </a>

        <div className="contact-socials">

          <a href="https://github.com/YOUR_USERNAME"
             target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>

          <a href="https://linkedin.com/in/YOUR_USERNAME"
             target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;