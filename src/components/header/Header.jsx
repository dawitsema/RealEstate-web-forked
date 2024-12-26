import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="#">Residencies</a>
          <a href="">Contact Us</a>
          <a href="#">Our Values</a>
          <a href="#">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;