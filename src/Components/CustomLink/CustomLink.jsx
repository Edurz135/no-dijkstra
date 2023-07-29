import React from "react";
import "./CustomLink.css";

export default function CustomLink() {
  return (
    <div
      style={{
        border: "3px solid brown",
        borderRadius: "999px",
        height: "80px",
        padding: "8px",
        display: "flex",
      }}
    >
      <img style={{ height: "50px", borderRadius: "50%" }} src="/profile.png" />
      <div>
        <p style={{ margin: "0px" }}>Eduardo Ramón</p>
        <p style={{ margin: "0px" }}>System Engineer Student</p>
        <p style={{ margin: "0px" }}>at University of Lima</p>
      </div>
      <img style={{ height: "50px", borderRadius: "50%" }} src="/profile.png" />
    </div>
  );
}
