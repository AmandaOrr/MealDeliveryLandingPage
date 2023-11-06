import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/aboutBackgroundImage.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container" id="about-section">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Feeding Your City, One Meal at a Time</h1>
        <p className="primary-text">
        Metro Meals brings the vibrant flavors of the city to your table, offering a diverse range of delicious dishes from around the world. .
        </p>
        <p className="primary-text">
        Our mission is to deliver not just meals but memorable culinary experiences, prepared with the finest ingredients and a dash of urban flair. With Metro Meals, every day is a culinary adventure, right at your doorstep.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"><BsFillPlayCircleFill /> WatchVideo</button>
        </div>
      </div>
    </div>
  );
};

export default About;
