import React from "react";
// import "./home.section.css";
export default function AlgorithmSection() {
  return (
    <section className="h-screen bg-con-primary" id="algorithm">
      <div className="relative h-full p-20 z-30 flex items-center justify-center">
        <div className="absolute z-30">
          <div className="flex flex-column align-center text-center font-fdecorated">
            <a
              className="text-con-secondary text-center text-2xl leading-none no-underline"
              href="/editor"
              target="_blank"
            >
              <p>TRY</p>
              <p>DIJKSTRA</p>
              <p>EDITOR</p>
            </a>
          </div>
        </div>
        <div className="absolute z-10">
          <div className="flex flex-column align-center">
            <img src="/EdgerHands.png" style={{ width: "1100px" }} />
          </div>
        </div>
        <div className="absolute z-20">
          <div className="flex flex-column align-center">
            <img className="translate-x-[-1%] translate-y-[-38.5%]" src="/EdgerNecklace.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
