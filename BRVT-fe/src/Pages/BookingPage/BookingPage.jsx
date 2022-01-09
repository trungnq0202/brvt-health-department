import React from "react";
import "./BookingPage.css";
import bookingURL from "../../image/book-img.svg";

const BookingPage = () => {
  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookingURL} alt="booking-img" />
          </div>

          <form action="">
            <h3>Book appoinment</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
