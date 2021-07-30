import React, { useState } from "react";
import CommonTitle from "./CommonTitle";
import aboutImage from "./images/aboutMain.png";

function About() {
  const [info] = useState([
    { id: 1, title: "Name :", text: "Mahabur Rahman" },
    { id: 2, title: "Email :", text: "annur4395@gmail.com" },
    { id: 3, title: "Phone :", text: "+8801626924395" },
    { id: 4, title: "GitHub :", text: "codepin786" },
  ]);

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <CommonTitle
              topHeading="ABOUT US"
              mainHeading="About Me"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
            />
          </div>
          <div className="row mt-5 pt-lg-5 text-center text-lg-start">
            <div className="col-lg-5 align-items-center">
              <div className="about-img d-flex justify-content-center d-none d-lg-block">
                <img src={aboutImage} alt="About Main" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 mt-5">
              <div className="about-text">
                <h2 className="text-white fw-bold mb-4"> Hi There</h2>
                <p>
                  In id nulla magna. Nullam posuere fermentum mattis. Nunc id
                  dui at sapien faucibus fermentum ut vel diam. Nullam tempus,
                  nunc id efficitur sagittis, urna est ultricies eros, ac porta
                  sem turpis
                </p>
                <p>
                  nunc id efficitur sagittis, urna est ultricies eros, ac porta
                  sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                </p>
              </div>
              <div className="row about-content mt-5">
                {info.map((data, index) => {
                  return (
                    <div className="col-6" key={index}>
                      <div className="info-content text-light">
                        <h5>{data.title}</h5>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
