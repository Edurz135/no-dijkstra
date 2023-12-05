import React from "react";
import {
  HomeSection,
  DescriptionSection,
  AlgorithmSection,
  AboutSection,
} from "./index.js";
import CustomFooter from "../../Components/CustomFooter/CustomFooter.jsx";

export default function HomePage() {
  return (
    <div className="p-0 m-0">
      <HomeSection />
      <DescriptionSection />
      <AlgorithmSection />
      <AboutSection />
      <CustomFooter />
    </div>
  );
}
