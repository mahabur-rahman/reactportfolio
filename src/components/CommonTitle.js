import React from "react";

function CommonTitle(props) {
  return (
    <>
      <div className="col-md-7 mx-auto pt-2">
        <div className="services-top-part text-center">
          <h6> {props.topHeading} </h6>
          <h4 className="text-white my-3"> {props.mainHeading} </h4>
          <p> {props.text} </p>
          <div className="service-underline mt-4"> </div>
        </div>
      </div>
    </>
  );
}

export default CommonTitle;
