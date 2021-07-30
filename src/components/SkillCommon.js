import React from "react";

function SkillCommon({ icon, number, text }) {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-6 my-4 my-md-0">
        <div className="experience-box">
          <div className="experience-icon">
            <span>{icon}</span>
          </div>
          <h2 className="my-4">{number}</h2>
          <h4>{text}</h4>
        </div>
      </div>
    </>
  );
}

export default SkillCommon;
