import React, { useState } from "react";
import CommonTitle from "./CommonTitle";
import ContactBox from "./ContactBox";

function Contact() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputEventChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name : ${info.name}, Email : ${info.email}, Subject : ${info.subject}, Message : ${info.message}`
    );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <CommonTitle
            topHeading="HAVE ANY QUERY?"
            mainHeading="Contact Me"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
          />
        </div>

        <div className="row mt-5 pt-5">
          {/* ---------------- */}
          {ContactBox.map((box) => {
            return (
              <div className="col-lg-4 col-md-6 my-3 my-lg-0" key={box.id}>
                <div className="contact-icon d-flex">
                  <span className="address-icon">{box.icon}</span>
                  <div className="address mx-3">
                    <h6 className="text-white fw-bold">{box.title}</h6>
                    <p className="text-white mb-0">{box.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* ---------------- */}
        </div>

        {/* Contact Form   */}
        <form className="row mt-5 gy-3" onSubmit={formSubmit}>
          <div className="col-md-6">
            <input
              name="name"
              value={info.name}
              onChange={inputEventChange}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-6">
            <input
              name="email"
              value={info.email}
              onChange={inputEventChange}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-md-12">
            <input
              name="subject"
              value={info.subject}
              onChange={inputEventChange}
              type="text"
              className="form-control"
              placeholder="Subject"
            />
          </div>
          <div className="col-md-12">
            <textarea
              name="message"
              value={info.message}
              onChange={inputEventChange}
              className="form-control"
              placeholder="Message"
              rows="4"
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn btn-danger">
              Send Message
            </button>
          </div>
        </form>
        {/* end of Contact Form   */}
      </div>
    </section>
  );
}

export default Contact;
