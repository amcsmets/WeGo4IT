import React from "react";

function ScrollMenu({ handleScrollTo, activeSection }) {
  return (
    <div className="scroll-menu">
      <button
        onClick={() => handleScrollTo("section1")}
        className={activeSection === "section1" ? "active" : ""}
      >
        Agile Organization
      </button>
      <button
        onClick={() => handleScrollTo("section2")}
        className={activeSection === "section2" ? "active" : ""}
      >
        What Is Agile
      </button>
      <button
        onClick={() => handleScrollTo("section3")}
        className={activeSection === "section3" ? "active" : ""}
      >
        Methodologies
      </button>
      <button
        onClick={() => handleScrollTo("section4")}
        className={activeSection === "section4" ? "active" : ""}
      >
        Key Success Factors
      </button>
    </div>
  );
}

export default ScrollMenu;
