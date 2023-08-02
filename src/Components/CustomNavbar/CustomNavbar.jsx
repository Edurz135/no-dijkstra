import React from "react";
import "./CustomNavbar.css";
export default function CustomNavbar() {
  return (
    <div className="custom-navbar">
      <div className="cn-container">
        <div>
          <span className="logo">EDURZ</span>
        </div>
        <div>
          <span className="nav-item">
            <a href="#home">HOME</a> <div className="nav-item-dot"></div>
          </span>
          <span className="nav-item">
            <a href="#description">DESCRIPTION</a>{" "}
            <div className="nav-item-dot"></div>
          </span>
          <span className="nav-item">
            <a href="#algorithm">ALGORITHM</a>{" "}
            <div className="nav-item-dot"></div>
          </span>
          <span className="nav-item">
            <a href="#about">ABOUT</a> <div className="nav-item-dot"></div>
          </span>
        </div>
        <div>
          <span className="contact-btn">CONTACT ME</span>
        </div>
      </div>
    </div>
  );
}
