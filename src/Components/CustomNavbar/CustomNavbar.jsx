import React from "react";
import "./CustomNavbar.css";
export default function CustomNavbar() {
  return (
    <div className="custom-navbar">
      <div className="row">
        <div className="col">
          <span className="nav-item"><a href="#home">HOME</a> <div className="nav-item-dot"></div></span>
          <span className="nav-item"><a href="#description">DESCRIPTION</a> <div className="nav-item-dot"></div></span>
          <span className="nav-item"><a href="#algorithm">ALGORITHM</a> <div className="nav-item-dot"></div></span>
          <span className="nav-item"><a href="#about">ABOUT</a> <div className="nav-item-dot"></div></span>
        </div>
      </div>
    </div>
  );
}
