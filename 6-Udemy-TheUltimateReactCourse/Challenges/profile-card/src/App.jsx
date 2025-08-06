import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Vue",
    level: "beginner",
    color: "#40d18eff",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "TailWind",
    level: "intermediate",
    color: "#2586b3ff",
  },
  {
    skill: "Sass",
    level: "intermediate",
    color: "#e066c6ff",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Postgress",
    level: "intermediate",
    color: "#0f576bff",
  },
];

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
          <SkillList />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return <img className="avatar" src="Perfil_photo.png" alt="Patrícia" />;
}
function Intro() {
  return (
    <div>
      <h1>Patrícia Zan de Oliveira</h1>
      <p>
        I'm a fullstack dev student, When I'm not coding I'm cycling or running,
        but most of the time you'll find me coding and studying... Or gaming :D
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "☝🏻"}</span>
      <span>{level === "intermediate" && "👍🏻"}</span>
      <span>{level === "advanced" && "💪🏻"}</span>
    </div>
  );
}

export default App;
