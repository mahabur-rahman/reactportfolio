import React, { useState } from "react";
import { FaStar, FaQuoteRight, FaAngleRight } from "react-icons/fa";
import clientImgOne from "./images/client1.jpg";
import clientImgTwo from "./images/client2.jpg";

function Testimonial() {
  return (
    <>
      <section id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-left">
                <h6>Our Testimonials</h6>
                <h2 className="my-4">Happy Clients Says</h2>
                <p>
                  Phasellus accumsan scelerisque dolor, quis mattis justo
                  varius. Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia Curae
                </p>
                <p>
                  enim elementum varius. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere
                </p>
                <button className="btn testimonial-btn text-light">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-6">
              {/* __________________________ */}

              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonial-right">
                      <span className="text-light quote-icon">
                        <FaQuoteRight />
                      </span>
                      <p>
                        “In promotion and of advertising testimonial show
                        consiss of a person,s written orsoken statement extollig
                        the virtue”
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="testimonial-position d-flex justify-content-between">
                        <div className="testimonial-img d-flex align-items-center">
                          <img src={clientImgOne} alt="client" />
                          <div className="testimonial-heading  mx-3">
                            <h5 className="text-light">Maria Doe</h5>
                            <h6 className="position">Co Founder of Axis</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-right">
                      <span className="text-light quote-icon">
                        <FaQuoteRight />
                      </span>
                      <p>
                        “In promotion and of advertising testimonial show
                        consiss of a person,s written orsoken statement extollig
                        the virtue”
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                          <li className="list-inline-item">
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="testimonial-position d-flex justify-content-between">
                        <div className="testimonial-img d-flex align-items-center">
                          <img src={clientImgTwo} alt="client" />
                          <div className="testimonial-heading  mx-3">
                            <h5 className="text-light">Emaley Mcculloch</h5>
                            <h6 className="position">Founder of Woo</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span>
                    <FaAngleRight />
                  </span>
                </button>
              </div>
              {/* __________________________ */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
