import React from "react";

function Card(props) {
  return (
    <div id="card" className="col-lg-4 col-md-6">
      <div className="card p-5 shadow">
        <div className="card-body">
          <span>{props.icon}</span>
          <h5 className="card-title text-white my-4">{props.title}</h5>
          <p className="card-text">{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
