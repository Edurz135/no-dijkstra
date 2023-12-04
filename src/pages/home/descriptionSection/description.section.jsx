import React from "react";
// import "./home.section.css";
export default function DescriptionSection() {
  return (
    <div>
      <section className="relative min-h-screen bg-cprimary" id="description">
        <div className="absolute h-full w-full p-20 z-50">
          <div className="h-full flex flex-column justify-around">
            <div>
              <p
                className="font-fheader text-8xl text-con-primary"
                style={{ "text-shadow": "5px 5px #dc2510" }}
              >
                DIJKSTRA ALGORITHM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
