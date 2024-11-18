import React from "react";

const experienceContent = [
  {
    year: "   2022 - 2022",
    position: "Automation Developer",
    compnayName: "CNS Pvt Ltd",
    details: `Developed and maintained automation scripts for web applications using Selenium WebDriver and Python.`,
  },

];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
