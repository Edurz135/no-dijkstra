import React from "react";
import "./CustomLink.css";

export default function CustomLink() {
  return (
    <div className="custom-link">
      <img src="/profile.png" className="profile" />
      <div className="text-container">
        <span className="title">Eduardo Ramón</span>
        <span className="description">System Engineer Student</span>
        <span className="description">at University of Lima</span>
      </div>
      <a href="https://pe.linkedin.com/in/eram%C3%B3n" target="_blank">
        <img src="/linkedin.png" className="linkedin" />
      </a>
      <a href="https://github.com/Edurz135" target="_blank">
        <img src="/github.png" className="github" />
      </a>
    </div>
  );
}
