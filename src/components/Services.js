import React from "react";
import CommonTitle from "./CommonTitle";
import Card from "./Card";
import ServiceData from "./ServiceData";
function Services() {
  return (
    <>
      <div id="common">
        <div className="container">
          <div className="row">
            <CommonTitle
              topHeading="SERVICES"
              mainHeading="My Services"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
            />
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <div className="row gy-4">
            {ServiceData.map((service, index) => {
              return <Card key={index} {...service} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
