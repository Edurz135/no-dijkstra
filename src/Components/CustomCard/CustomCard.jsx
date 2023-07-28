import React from "react";
import "./CustomCard.css";
export default function CustomCard(props) {
  return (
    <div className="custom-card">
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
}
