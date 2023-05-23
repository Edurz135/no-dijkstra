import React from "react";
import OverviewFlow from "./Components/MainFlow/MainFlow.component";
import './App.css';

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f9c42c",
          height: "100vh",
          paddingLeft: "40px",
        }}
      >
        <span className="head-title">DIJKSTRA</span>
        <br/>
        <span className="head-subtitle">Algorithm - 1956</span>
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <OverviewFlow />
      </div>
    </div>
  );
}

export default App;
