import React from "react";
import {
  HomeSection,
  DescriptionSection,
  AlgorithmSection,
  AboutSection,
} from "./index.js";

export default function HomePage() {
  return (
    <div className="p-0 m-0">
      <HomeSection />
      <DescriptionSection />
      <AlgorithmSection />
      <AboutSection />
    </div>
  );
}
