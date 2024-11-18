import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "PYTHON" },
  { skillClass: "p80", skillPercent: "80", skillName: "SELENIUM" },
  { skillClass: "p80", skillPercent: "80", skillName: "NEO4j" },
  { skillClass: "p78", skillPercent: "78", skillName: "NLP" },
  { skillClass: "p78", skillPercent: "78", skillName: "CV" },

  { skillClass: "p75", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "75", skillName: "CSS" },
  { skillClass: "p70", skillPercent: "70", skillName: "SQL" },
  { skillClass: "p65", skillPercent: "65", skillName: "FLASK" },
  { skillClass: "p40", skillPercent: "40", skillName: "JAVASCRIPT" },


];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
