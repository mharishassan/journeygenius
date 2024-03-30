import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="container mt-3">
      <div className="jumbotron " style={{ backgroundColor: "lightgray" }}>
        <div className="container">
          <h1 className="text-center">About Us</h1>
          <p>
            "Welcome to Journey Genius, your passport to seamless travel
            experiences! At Journey Genius, we believe that every journey should
            be an adventure, filled with discovery and excitement. Our platform
            is designed to empower travelers like you to unlock the world's
            wonders effortlessly. From finding the perfect destination to
            planning your itinerary and booking accommodations, Journey Genius
            is your trusted companion every step of the way. Let's embark on
            unforgettable journeys together. Start your adventure with Journey
            Genius today!"
          </p>
          <Link
            to="/auth"
            className="btn btn-dark "
            data-toggle="tooltip"
            title="Click here to Create Account!"
            role="button"
          >
            Get Started!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
