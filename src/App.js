import React from "react";
import "./App.css";
// import { useTranslation } from 'react-i18next'
// import LanguageSelector from "./Components/LanguageSelector/LanguageSelector";

function App() {
  // const { translate } = useTranslation();
  return (
    <div>
      <div className="sec-container home-sec">
        <div className="home-nav">
          <span className="logo">EDURZ</span>
          <span className="contact-btn">CONTACT ME</span>
        </div>
        <div className="home-content">
          <span className="title">DIJKSTRA ALGORITHM</span>
          <span className="description">A Web Page for understanding the concepts</span>
          <span className="description">and uses of Dijkstra Algorithm</span>
          <br/>
          <br/>
          <br/>
          <br/>
          <span className="a">PUB. IN</span>
          <span className="b">1956</span>
        </div>
      </div>
      <div className="sec-container description-sec">

      </div>
      <div className="sec-container algorithm-sec">

      </div>
      <div className="sec-container about-sec">

      </div>
    </div>
  );
}

export default App;
