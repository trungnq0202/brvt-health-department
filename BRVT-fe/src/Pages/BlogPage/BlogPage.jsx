import React from "react";
import "./BlogPage.css";
import blogURL from "../../image/blog-1.jpg";
import blogURL1 from "../../image/blog-2.jpg";
import blogURL2 from "../../image/blog-3.jpg";

const BlogPage = () => {
  return (
    <div>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blogURL} alt=""></img>
            </div>

            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st may, 2021
                </a>
                <a href="">
                  <i className="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsum sit architecto expedita impedit!
              </p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogURL1} alt=""></img>
            </div>

            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st may, 2021
                </a>
                <a href="">
                  <i className="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsum sit architecto expedita impedit!
              </p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blogURL2} alt=""></img>
            </div>

            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st may, 2021
                </a>
                <a href="">
                  <i className="fas fa-user"></i> by admin
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsum sit architecto expedita impedit!
              </p>
              <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
