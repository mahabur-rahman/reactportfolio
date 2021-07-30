import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" height="auto" width="110" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-light">
                <FaBars />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/skills"
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-menu"
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
