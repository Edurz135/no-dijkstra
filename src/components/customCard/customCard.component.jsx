import React from "react";
import "./customCard.component.css";

export default function CustomCard(props) {
  return (
    <div className="flex flex-column justify-center text-center my-4">
      <p className="text-5xl font-fheader text-csecondary pb-4 font-border">{props.title}</p>
      <p className="text-2xl font-ftext text-con-secondary font-border">{props.description}</p>
    </div>
  );
}
