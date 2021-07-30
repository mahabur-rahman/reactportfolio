import React from "react";
import footerLogo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <footer id="footerTop">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-9 mx-auto">
              <div className="footer-top-content">
                <img
                  src={footerLogo}
                  height="auto"
                  width="160"
                  alt="Website Logo"
                />
                <p className="py-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inci- didunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="social-link">
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
                      <FaInstagram />
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink to="/contact">
                      <FaPinterestP />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  );
}

export default Footer;
