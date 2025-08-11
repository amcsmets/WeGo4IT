import React, { useState, useEffect } from "react";
import ScrollMenu from "../AgileOrganization/ScrollMenu"; // adjust path as needed
import Banner from "../layout/Banner"; // adjust path as needed

function AgilePage() {
  console.log("AgilePage loaded"); // ✅ This should appear on page load
  const [activeSection, setActiveSection] = useState("section1");

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleScroll = () => {
    const sections = ["section1", "section2", "section3", "section4", "section5", "section6"];
    let currentSection = "";

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Banner handleScrollTo={handleScrollTo} />

      <ScrollMenu
        handleScrollTo={handleScrollTo}
        activeSection={activeSection}
      />

      {/* Section content - for demonstration */}
      <div id="section1" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 1: Agile Organization</h2>
      </div>
      <div id="section2" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 2: What Is Agile</h2>
      </div>
      <div id="section3" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 3: Methodologies</h2>
      </div>
      <div id="section4" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 4: Key Success Factors</h2>
      </div>
            <div id="section5" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 5: Key Success Factors</h2>
      </div>
            <div id="section6" style={{ height: "100vh", padding: "100px" }}>
        <h2>Section 6: Key Success Factors</h2>
      </div>
    </>
  );
}

export default AgilePage;
