import React from "react";
import { NavLink } from "react-router-dom";
import CommonTitle from "./CommonTitle";
import PriceData from "./PriceData";

function Price() {
  return (
    <>
      <div id="price">
        <div className="container">
          <div className="row">
            <CommonTitle
              topHeading="CHOOSE A PLAN"
              mainHeading="Pricing Plan"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
            />
          </div>
          <div className="row mt-5 pt-5">
            {PriceData.map((list) => {
              return (
                <div
                  className="col-lg-4 col-md-6 mx-auto my-3 my-lg-0"
                  key={list.id}
                >
                  <div className="price-list text-center">
                    <div className="price-title">
                      <h5 className="text-light mb-3 text-uppercase">
                        {list.heading}
                      </h5>
                      <span className="text-light">
                        $ <span className="display-3">{list.dollar}</span>
                      </span>
                    </div>
                    <ul className="mt-3">
                      <li>{list.list1}</li>
                      <li>{list.list2}</li>
                      <li>{list.list3}</li>
                      <li>{list.list4}</li>
                      <li>{list.list5}</li>
                    </ul>

                    <NavLink
                      to="/services"
                      className="btn btn-outline-danger text-light mt-5"
                    >
                      Purchase
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
