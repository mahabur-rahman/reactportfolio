import React from "react";
import SkillCommon from "./SkillCommon";
import experienceData from "./ExperienceData";

function Experience() {
  return (
    <>
      <section id="experience">
        <div className="container">
          <div className="row text-center">
            {/* ---------------- */}
            {experienceData.map((data) => {
              return (
                <SkillCommon
                  key={data.id}
                  icon={data.icon}
                  number={data.number}
                  text={data.text}
                />
              );
            })}
            {/* ---------------- */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
