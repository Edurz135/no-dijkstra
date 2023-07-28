import React from "react";
import "./CustomNavbar.css";
export default function CustomNavbar() {
  return (
    <div className="custom-navbar container-fluid">
      <div className="row">
        <div className="col">
          <span className="nav-item">HOME <div className="nav-item-dot"></div></span>
          <span className="nav-item">DESCRIPTION <div className="nav-item-dot"></div></span>
          <span className="nav-item">ALGORITHM <div className="nav-item-dot"></div></span>
          <span className="nav-item">ABOUT <div className="nav-item-dot"></div></span>
        </div>
      </div>
    </div>
  );
}
