import React from "react";
import "./App.css";
// import { useTranslation } from 'react-i18next'
// import LanguageSelector from "./Components/LanguageSelector/LanguageSelector";
function App() {
  // const { translate } = useTranslation();
  return (
    <div>
      <div className="sec-container home-sec">
        <div className="content-layer">
          <div className="nav">
            <span className="logo">EDURZ</span>
            <span className="contact-btn">CONTACT ME</span>
          </div>
          <div className="body">
            <div className="header">
              <span className="title">DIJKSTRA ALGORITHM</span>
              <span className="description">
                A Web Page for understanding the concepts
              </span>
              <span className="description">
                and uses of Dijkstra Algorithm
              </span>
            </div>
            <div className="footer">
              <span className="a">PUB. IN</span>
              <span className="b">1956</span>
            </div>
          </div>
        </div>
        <div className="bg-layer">
          <img src="/EdgerPortraitWithoutMouth.png" />
        </div>
      </div>
      <div className="sec-container description-sec container-fluid">
        <div className="row align-items-center">
          <div className="row">
            <div className="col-md-6">
              <div className="board">
                <p className="title">ORIGIN</p>
                <p className="description">Created by Edsger Dijkstra on 1956</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="board">
                <p className="title">ALGORITHM</p>
                <p className="description">
                  An algorithm for finding the shortest paths between nodes in a
                  weighted graph
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="board">
                <p className="title">IMPORTANCE</p>
                <p className="description">
                  Most influential algorithms in the history of computer science
                  and graph theory. Had a significant impact on numerous fields of
                  study and technologies that we use today.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="board">
                <p className="title">APPLICATIONS</p>
                <p className="description">
                  Applied on route planning in maps, routing protocols in computer
                  networks, analysis of transportation, among others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-container algorithm-sec"></div>
      <div className="sec-container about-sec"></div>
    </div >
  );
}

export default App;
