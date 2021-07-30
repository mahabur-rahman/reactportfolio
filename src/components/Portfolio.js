import React from "react";
import BrandImageStore from "./BrandImageStore";
import BrandImageData from "./BrandImageData";
import Testimonial from "./Testimonial";
function Portfolio() {
  return (
    <>
      <section id="brand">
        <div className="container">
          {/* ------------ */}
          {BrandImageData.map((data) => {
            return <BrandImageStore key={data.id} {...data} />;
          })}
          {/* ------------ */}
        </div>
      </section>
      <Testimonial />
    </>
  );
}

export default Portfolio;
