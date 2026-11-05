import {
  FiCode,
  FiMonitor,
  FiGitBranch,
  FiDatabase
} from "react-icons/fi";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <FiCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Development Tools",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Web Development",
      icon: <FiMonitor />,
      skills: ["Responsive Design", "DOM Manipulation", "API Integration"]
    },
    {
      title: "Currently Learning",
      icon: <FiDatabase />,
      skills: ["Advanced React", "Backend Fundamentals"]
    }
  ];

  return (
    <section className="section skills" id="skills">

      <div className="section-heading">
        <span>MY TECHNICAL EXPERTISE</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;