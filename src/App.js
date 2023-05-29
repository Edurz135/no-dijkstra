import React from "react";
import OverviewFlow from "./Components/MainFlow/MainFlow.component";
import EdgerPortrait from "./assets/imgs/EdgerPortrait.jpg";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div className="head-container">
        <span className="head-title">DIJKSTRA</span>
        <br />
        <span className="head-subtitle">Algorithm - 1956</span>
      </div>
      <div className="intro-container">
        <div className="sub-container1">
          <div className="intro-text">
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
          <br/>
          <br/>
          <div className="intro-text">
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
        <div className="sub-container2">
          <img src={EdgerPortrait} style={{height: "100%"}}/>
        </div>
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <OverviewFlow />
      </div>
    </div>
  );
}

export default App;
