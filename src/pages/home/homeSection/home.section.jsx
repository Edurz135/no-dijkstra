import React from "react";
import "./home.section.css";
export default function HomeSection() {
  return (
    <section className="relative min-h-screen bg-cprimary" id="home">
      <div className="absolute h-full w-full p-20 z-30">
        <div className="h-full flex flex-column justify-around">
          <div>
            <p
              className="font-fheader text-8xl text-con-primary"
              style={{ textShadow: "5px 5px #dc2510" }}
            >
              DIJKSTRA ALGORITHM
            </p>
            <br />
            <p className="description font-ftext text-3xl text-con-primary">
              A Web Page for understanding the concepts
            </p>
            <p className="description font-ftext text-3xl text-con-primary">
              and uses of Dijkstra Algorithm
            </p>
          </div>
          <div className="opacity-60">
            <p
              className="font-fheader"
              style={{
                WebkitTextStroke: "3px #f9e9d1",
                WebkitTextFillColor: "transparent",
                fontSize: "5rem",
                lineHeight: "6rem",
                letterSpacing: "0.6rem",
              }}
            >
              PUB. IN
            </p>
            <p
              className="font-fheader text-con-primary"
              style={{
                fontSize: "10.4rem",
                lineHeight: "7.2rem",
              }}
            >
              1956
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-full h-full flex justify-end z-30 dijkstra-mouth">
          <img className="h-screen" src="/EdgerPortraitMouth.png" />
        </div> */}
      <div className="absolute w-full h-full flex justify-end z-20">
        <img className="h-screen" src="/EdgerPortraitWithoutMouth.png" />
      </div>
      <div className="absolute z-30 flex flex-column align-items-end text-con-secondary rotate-[-8deg] right-[500px] top-[400px]">
        <p className="font-fdecorated text-9xl">I’M</p>
        <p className="font-fdecorated text-9xl">DIJKSTRA</p>
      </div>
    </section>
  );
}
