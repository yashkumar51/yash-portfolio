import { FiBookOpen, FiCode, FiTarget } from "react-icons/fi";

function About() {
  return (
    <section className="section about" id="about">

      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>
            Turning ideas into
            <span> web experiences.</span>
          </h3>

          <p>
            I'm Yash Kumar, currently pursuing a Bachelor of
            Computer Applications in Artificial Intelligence
            and Machine Learning at Galgotias University.
          </p>

          <p>
            I have experience working with HTML, CSS,
            JavaScript and React.js. I'm interested in frontend
            development and continuously improving my ability
            to create practical web applications.
          </p>

          <p>
            My current goal is to gain industry experience
            through a summer internship and contribute to
            real-world development projects.
          </p>
        </div>

        <div className="about-cards">

          <div className="info-card">
            <FiBookOpen />
            <div>
              <h4>Education</h4>
              <p>BCA – AI & ML</p>
              <small>Galgotias University</small>
            </div>
          </div>

          <div className="info-card">
            <FiCode />
            <div>
              <h4>Development</h4>
              <p>Frontend Development</p>
              <small>React.js & JavaScript</small>
            </div>
          </div>

          <div className="info-card">
            <FiTarget />
            <div>
              <h4>Current Goal</h4>
              <p>Summer Internship</p>
              <small>Practical industry experience</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;