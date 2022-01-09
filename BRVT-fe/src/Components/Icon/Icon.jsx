import React from "react";
import "./Icon.css";

const Icon = () => {
  return (
    <section className="icons-container">
      <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
      </div>

      <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
      </div>

      <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>Bed facility</p>
      </div>

      <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>Available hospitals</p>
      </div>
    </section>
  );
};

export default Icon;
