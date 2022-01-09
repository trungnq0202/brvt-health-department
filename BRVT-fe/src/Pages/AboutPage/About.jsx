import React from "react";
import "./About.css";
import aboutURL from "../../image/about-img.svg";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutURL} alt="about-us" />
          </div>

          <div className="content">
            <h3>We take care of your healthy life</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              cum a minus sapiente quo! Vitae odio aspernatur cumque
              voluptatibus distinctio neque dolorem culpa, a nobis officiis, cum
              autem quis molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse nobis consequatur quod a magni nisi aliquam nam facere error.
            </p>
            <a href="#" className="btn">
              Learn more <span className="fas fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
