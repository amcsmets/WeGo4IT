import React, { useState, useEffect } from "react";

function ScrollMenuHome() {
  const [activeSection, setActiveSection] = useState("section1");
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleScroll = () => {
    const sections = [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
    ];
    let currentSection = "";

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-menu">
      <button
        onClick={() => handleScrollTo("section1")}
        className={activeSection === "section1" ? "active" : ""}
      >
        COMPANY
      </button>
      <button
        onClick={() => handleScrollTo("section2")}
        className={activeSection === "section2" ? "active" : ""}
      >
        MANAGEMENT
      </button>
      <button
        onClick={() => handleScrollTo("section3")}
        className={activeSection === "section3" ? "active" : ""}
      >
        OUR SERVICES
      </button>
      <button
        onClick={() => handleScrollTo("section4")}
        className={activeSection === "section4" ? "active" : ""}
      >
        CLIENT OFFSHORE DEVELOPMENT
      </button>
      <button
        onClick={() => handleScrollTo("section5")}
        className={activeSection === "section5" ? "active" : ""}
      >
        PARTNERSHIP
      </button>
    </div>
  );
}

export default ScrollMenuHome;
