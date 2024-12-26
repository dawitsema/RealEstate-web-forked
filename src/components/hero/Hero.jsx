import React from "react";
import CountUp from "react-countup";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container paddings flexCenter innerWidth">
        {/* left side of the hero section */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="hero-desc flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all the dificulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button"> Search </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={2000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        {/* right side of the hero section */}
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
