import React from "react";
// import "./home.section.css";

const CustomWaterMark = (props) => {
  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        transform: `translateX(${props.translateX})`,
      }}
    >
      <span className="opacity-50">
        <p
          className="font-fheader"
          style={{
            WebkitTextStroke: "3px " + props.color,
            WebkitTextFillColor:
              props.variant == "outlined" ? "transparent" : props.color,
            fontSize: "5.8rem",
            lineHeight: "5.5rem",
            letterSpacing: "0.6rem",
          }}
        >
          PUB. IN
        </p>
        <p
          className="font-fheader"
          style={{
            WebkitTextStroke: "3px " + props.color,
            WebkitTextFillColor:
              props.variant == "outlined" ? "transparent" : props.color,
            fontSize: "12rem",
            lineHeight: "8rem",
          }}
        >
          1956
        </p>
      </span>
    </span>
  );
};

export default function AlgorithmSection() {
  return (
    <section className="relative h-screen bg-con-primary" id="algorithm">
      <div className="relative h-full w-full p-20 z-30 flex items-center justify-center">
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
            <img
              className="translate-x-[-1%] translate-y-[-38.5%]"
              src="/EdgerNecklace.png"
            />
          </div>
        </div>
        <div className="absolute z-0">
          <div className="flex flex-column w-screen">
            <div>
              <CustomWaterMark
                translateX={"-50%"}
                variant={"outlined"}
                color={"#dc2510"}
              />
            </div>
            <div>
              <CustomWaterMark
                translateX={"10%"}
                variant={"filled"}
                color={"#f9c42c"}
              />
            </div>
            <div>
              <CustomWaterMark
                translateX={"70%"}
                variant={"outlined"}
                color={"#dc2510"}
              />
            </div>
            <div>
              <CustomWaterMark
                translateX={"130%"}
                variant={"filled"}
                color={"#f9c42c"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
