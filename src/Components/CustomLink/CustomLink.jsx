import React from "react";

export default function CustomLink() {
  return (
    <div className="border-[3px] border-con-secondary rounded-full flex flex-row justify-start items-center p-1">
      <img src="/profile.png" className="h-14 rounded-full pr-2" />
      <div className="font-ftext text-xs text-con-secondary px-1">
        <div className="leading-none text-lg font-extrabold">Eduardo Ramón</div>
        <div className="leading-none">System Engineer Student</div>
        <div className="leading-none">at University of Lima</div>
      </div>
      <a href="https://pe.linkedin.com/in/eram%C3%B3n" target="_blank">
        <img src="/linkedin.png" className="h-7 px-2" />
      </a>
      <a href="https://github.com/Edurz135" target="_blank">
        <img src="/github.png" className="h-10 px-1" />
      </a>
    </div>
  );
}
