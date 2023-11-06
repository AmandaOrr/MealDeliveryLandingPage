import React from "react";

//imports
import ProfilePic from "../Assets/jenniferprofileImage.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top" id="testimonials-section">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Our commitment to culinary excellence and prompt, reliable service has left a lasting impression on the palates of many. But don't just take our word for it—read on to discover the personal stories and heartfelt testimonials of those who have experienced the magic of Metro Meals.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" style={{maxWidth: "25%"}}/>
        <p>
        Choosing Metro Meals was a game-changer for me. The variety of options for each day of the week, combined with the flexibility to select delivery times, made my life so much easier. The food is not just delicious; it's a mini culinary adventure every time I order. Thank you, Metro Meals, for turning weeknight dinners into a delight!
        </p>
        <div className="testimonials-stars-container flex flex-row">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
