import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Malik" },
  { meta: "last name", metaInfo: "Moiz" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "Pakistan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Lahore, Pakistan" },
  { meta: "phone", metaInfo: "+1(859) 487-8604" },
  { meta: "Email", metaInfo: "amjadmoiz11@gmail.com" },
  { meta: "langages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
