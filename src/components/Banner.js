import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaBehance,
  FaPlay,
} from "react-icons/fa";
import bannerImg from "./images/banner.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [state] = useState({
    title: "I am Mahabur Rahman",
    para: "I 'm Mahabur, professional web developer with long time experience in this field​",
    image: bannerImg,
  });
  return (
    <>
      <header id="banner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 align-self-center">
              <div className="banner-content">
                <div className="banner-list">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <NavLink to="/contact">
                        <FaFacebookF />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact">
                        <FaTwitter />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact">
                        <FaPinterestP />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact">
                        <FaInstagram />
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="/contact">
                        <FaBehance />
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="banner-info">
                  <h2 className="text-light my-4"> {state.title}</h2>
                  <p className="text-light mb-5">{state.para}</p>
                  <NavLink
                    to="/skills"
                    className="btn btn-outline-danger text-light"
                  >
                    My Portfolio
                  </NavLink>
                  <NavLink
                    to="/"
                    className="btn btn-smart"
                    onClick={() => alert("Something went wrong ! 🙂")}
                  >
                    <FaPlay />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block align-self-center">
              <div className="banner-img d-flex">
                <img src={state.image} alt="Banner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
