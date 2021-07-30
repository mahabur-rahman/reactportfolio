import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaRegCalendar,
  FaRegComments,
  FaArrowCircleRight,
} from "react-icons/fa";

function BlogPost(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 mx-auto my-3 my-lg-0">
        <div className="card shadow">
          <NavLink to="/">
            <img src={props.imgSrc} className="card-img-top" alt={props.text} />
          </NavLink>
          <div className="card-body">
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <FaUserAlt />
                <span className="mx-2">
                  By <span className="adminColor"> admin </span>
                </span>
              </li>
              <li className="list-inline-item mx-2">
                <FaRegCalendar />
                <span className="mx-2"> {props.day} </span>
              </li>
              <li className="list-inline-item mx-2">
                <FaRegComments />
                <span className="mx-2"> {props.number} </span>
              </li>
            </ul>
            <NavLink to="/" className="card-title">
              <h5 className="py-4 text-light"> {props.text} </h5>
            </NavLink>
            <NavLink to="/" className="btn read-more-btn">
              {props.btnText}
              <span className="mx-2">
                <FaArrowCircleRight className="arrow" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
