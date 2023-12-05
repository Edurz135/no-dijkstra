import React, { useEffect, useRef, useState } from "react";
import {
  HomeSection,
  DescriptionSection,
  AlgorithmSection,
  AboutSection,
} from "./index.js";
import CustomFooter from "../../Components/CustomFooter/CustomFooter.jsx";
import CustomNavbar from "../../Components/CustomNavbar/CustomNavbar.jsx";

export default function HomePage() {
  const homeSectionRef = useRef(null);
  const [userOnHomeSection, SetUserOnHomeSection] = useState(true);
  const offset = 70;

  const checkScrollOutsideHomeSection = () => {
    if (homeSectionRef.current) {
      const homeSectionBottom =
        homeSectionRef.current.getBoundingClientRect().bottom;
      SetUserOnHomeSection(homeSectionBottom > offset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollOutsideHomeSection);

    // Cleanup
    return () =>
      window.removeEventListener("scroll", checkScrollOutsideHomeSection);
  }, []);

  return (
    <div className="p-0 m-0">
      <CustomNavbar userOnHomeSection={userOnHomeSection} />
      <div ref={homeSectionRef}>
        <HomeSection />
      </div>
      <DescriptionSection />
      <AlgorithmSection />
      <AboutSection />
      <CustomFooter />
    </div>
  );
}
