import React from "react";
import "./App.css";
import CustomCard from "./Components/CustomCard/CustomCard";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import CustomLink from "./Components/CustomLink/CustomLink";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
// import { useTranslation } from 'react-i18next'
// import LanguageSelector from "./Components/LanguageSelector/LanguageSelector";
function App() {
  // const { translate } = useTranslation();
  return (
    <div>
      <CustomNavbar />
      <div className="sec-container home-sec" id="home">
        <div className="content-layer">
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
        <div className="bg-layer mouth">
          <img src="/EdgerPortraitMouth.png" />
        </div>
        <div className="bg-layer words">
          <span>I’M</span>
          <span>DIJKSTRA</span>
        </div>
      </div>
      <div className="sec-container description-sec" id="description">
        {/* <CustomNavbar /> */}
        <div className="row align-items-center">
          <div className="row">
            <div className="col-md-6">
              <CustomCard
                title="ORIGIN"
                description="Created by Edsger Dijkstra on 1956"
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="ALGORITHM"
                description="An algorithm for finding the shortest paths between nodes in a weighted graph"
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="IMPORTANCE"
                description="Most influential algorithms in the history of computer science and graph theory. Had a significant impact on numerous fields of study and technologies that we use today."
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="APPLICATIONS"
                description="Applied on route planning in maps, routing protocols in computer networks, analysis of transportation, among others."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-container algorithm-sec" id="algorithm">
        {/* <CustomNavbar /> */}
      </div>
      <div className="sec-container about-sec" id="about" style={{ position: "relative" }}>
        {/* <CustomNavbar /> */}
        <div className="row align-items-center">
          <div className="row row-lg-6 justify-content-center">
            <p className="title">I AM ON A MISSION TO PROVIDE AN</p>
            <p className="title">
              EASILY <span className="title-variant">ACCESSIBLE PLATFORM</span>
            </p>
            <p className="description">
              My mission is to provide an easily accessible platform for
              students to comprehend the workings of Dijkstra's algorithm in a
              simpler and more straightforward manner.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <CustomLink />
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default App;
