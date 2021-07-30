import React from "react";
import { NavLink } from "react-router-dom";

function FooterBottom() {
  const time = new Date().getFullYear();
  return (
    <section id="footerBottom">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="footer-bottom-text">
              <p className="mb-0">
                Copyright &copy; {time}
                <NavLink to="/" className="logoColor mx-1">
                  Ami.Ke
                </NavLink>
                All Rights Reserved by ThemeBing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBottom;
