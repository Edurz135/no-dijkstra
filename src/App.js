import React from "react";
import OverviewFlow from "./Components/MainFlow/MainFlow.component";
import EdgerPortrait from "./assets/imgs/EdgerPortrait.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="head-container">
        <span className="head-container-title">DIJKSTRA</span>
        <br />
        <span className="head-container-subtitle">Algorithm - 1956</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="head-container-arrow-svg"
          >
            <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z"></path>
            <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z"></path>
          </svg>
        </div>
        <br />
      </div>
      <div className="intro-container">
        <div className="intro-container-img-bg">
          <img src={EdgerPortrait} style={{ height: "100%" }} />
        </div>
        <div className="intro-container-one">
          <div className="intro-container-card">
            <span className="title">What's Dijkstra?</span>
            <br />
            <span className="desc">
              Dijkstra's algorithm is an algorithm for finding the shortest
              paths between nodes in a weighted graph, which may represent, for
              example, road networks. It was conceived by computer scientist
              Edsger W. Dijkstra in 1956 and published three years later.
            </span>
          </div>
          <br/>
          <div className="intro-container-card">
            <span className="title">Why was this page created?</span>
            <br />
            <span className="desc">
              It's created to showcase the power of the Dijkstra algorithm
              through a visually interactive graphical interface. This
              university project page offers a user-friendly platform for
              understanding and exploring the algorithm's functionality. With
              intuitive controls and captivating visualizations, users can input
              their own graphs, select source and destination nodes, and witness
              the algorithm dynamically calculate the shortest path. This page
              provides an engaging and educational experience focused on the
              Dijkstra algorithm.
            </span>
          </div>
        </div>
        <div className="intro-container-two"></div>
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <OverviewFlow />
      </div>
    </div>
  );
}

export default App;
