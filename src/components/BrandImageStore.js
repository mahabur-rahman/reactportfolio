import React from "react";

import { NavLink } from "react-router-dom";

function BrandImageStore(props) {
  return (
    <>
      <div className="brand-img">
        <NavLink to={props.visit}>
          <img src={props.imgSrc} alt="Brand" />
        </NavLink>
      </div>
    </>
  );
}

export default BrandImageStore;
