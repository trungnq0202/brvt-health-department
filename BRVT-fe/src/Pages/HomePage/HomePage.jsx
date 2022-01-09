import React from "react";
import "./HomePage.css";
import homeURL from "../../image/home-img.svg";
import Icon from "../../Components/Icon/Icon";

const HomePage = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src={homeURL}></img>
      </div>

      <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
          laborum consequuntur eaque veritatis quia, illum labore sequi quisquam
          accusamus, quos, ullam amet nulla! Suscipit facere iure fugit
          doloremque exercitationem.
        </p>
        <a href="#" className="btn">
          contact us
          <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>
  );
};

export default HomePage;
