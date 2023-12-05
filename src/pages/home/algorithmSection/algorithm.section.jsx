import React from "react";
// import "./home.section.css";
export default function AlgorithmSection() {
  return (
    <section className="h-screen bg-con-primary" id="algorithm">
      <div className="h-full p-20 z-50 flex items-center justify-center">
        <div>
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
      </div>
    </section>
  );
}
