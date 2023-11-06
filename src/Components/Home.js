import React, { useState } from "react";

//importing components
import NavBar from "./NavBar";

//importing assets
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/homeBannerImage.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section" id="home-section">
          <h1 className="primary-heading">
          Delivering Freshness to Your Doorstep
          </h1>
          <p className="primary-text">
          Our mission is to deliver not just meals but memorable culinary experiences, prepared with the finest ingredients and a dash of urban flair. 
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
