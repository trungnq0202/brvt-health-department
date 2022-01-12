import React from "react";
import bookingURL from "../../image/book-img.svg";

const RegisterPage = () => {
  return (
    <div>
      <section className="book">
        <h1 className="heading">
          <span>Register</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookingURL} alt="booking-img" />
          </div>

          <form action="">
            <h3>Register</h3>
            <input type="text" placeholder="your name" className="box" />
            <input
              type="password"
              placeholder="your password"
              className="box"
            />
            <input
              type="password"
              placeholder="confirm password"
              className="box"
            />
            <input type="submit" value="register" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
