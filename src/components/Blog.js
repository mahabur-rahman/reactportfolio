import React from "react";
import CommonTitle from "./CommonTitle";
import BlogPost from "./BlogPost";
import blogPostData from "./BlogPostData";

function Blog() {
  return (
    <>
      <div id="blog">
        <div className="container">
          <div className="row">
            <CommonTitle
              topHeading="LATEST POST"
              mainHeading="Latest blog"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
            />
          </div>

          {/* -------------- */}

          <div className="row mt-5 pt-5">
            {blogPostData.map((blog, index) => {
              return <BlogPost key={index} {...blog} />;
            })}
          </div>

          {/* ---------- */}
        </div>
      </div>
    </>
  );
}

export default Blog;
