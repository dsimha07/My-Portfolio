import SkillTrack from "./SkillTrack";
import "./SkillProgress.css";


const skills = [
  {
    skillName: 'React.js',
    percentage: 85,
    description: 'Skilled in developing scalable backend services and RESTful APIs with Express.js and Node.js.',
  },
  {
    skillName: 'Node.js',
    percentage: 83,
    description: 'Skilled in developing scalable backend services and RESTful APIs with Express.js and Node.js.',
  },
  {
    skillName: 'PostgreSQL',
    percentage: 75,
    description: 'Efficient in relational data modeling, querying, indexing, and optimization.',
  },
  {
    skillName: 'JavaScript',
    percentage: 78,
    description: 'Solid understanding of ES6+ syntax, DOM manipulation and asynchronous programming.',
  },
];

function SkillProgress(){
    return(
        <div className="col-lg-6">
            <div className="br-skill-progress m-b-991">
                <div className="row m-b-minus-30px">
                    {skills.map((skill) => (
                        <SkillTrack
                        key={skill.skillName}
                        skillName={skill.skillName}
                        percentage={skill.percentage}
                        description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillProgress;