import React from "react";
import aboutURL from "../../image/about-img.svg";

const LoginPage = () => {
  return (
    <div>
      <section className="book">
        <h1 className="heading">
          <span>Login</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutURL} alt="booking-img" />
          </div>

          <form action="">
            <h3>Login</h3>
            <input type="text" placeholder="your name" className="box" />
            <input
              type="password"
              placeholder="your password"
              className="box"
            />
            <input type="submit" value="login" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
