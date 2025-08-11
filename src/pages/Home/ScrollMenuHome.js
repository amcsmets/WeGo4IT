
//Purpose: A scroll-aware navigation menu that highlights the currently viewed section and 
// lets users jump smoothly between sections.
// Key features:
// - Smooth scrolling to sections on button click.
// - Real-time highlighting based on scroll position.
// - Clean setup with event listener management in useEffect.
import React, { useState, useEffect } from "react";

// { useState, useEffect } These are named imports from React.
// They bring in two important React hooks:
// useState:
// Lets you add state (data that changes over time) inside a functional component.
// Example: const [count, setCount] = useState(0); sets up a state variable count.
// useEffect:
// Lets you run side effects (like API calls, subscriptions, event listeners) in functional components.
// It runs after render and can clean up when the component unmounts.


function ScrollMenuHome() {
  const [activeSection, setActiveSection] = useState("section1");
//   Keeps track of which section (by id) is currently active/visible.
// Starts with "section1" as the default active section.
  const handleScrollTo = (id) => {
    // When a button is clicked, this function:
    const element = document.getElementById(id);
    // Finds the DOM element with the given id (e.g. "section3").
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Scrolls smoothly to that element.
      setActiveSection(id);
      // Updates the activeSection state to highlight the clicked section.
    }
  };

  const handleScroll = () => {
    // This function is called whenever the user scrolls the page.
    const sections = [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
    ];
    let currentSection = "";

    sections.forEach((sectionId) => {
      // Loops over all section IDs.
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          // Checks if the top of the section is within the top half of the visible window (rect.top < window.innerHeight / 2).
          currentSection = sectionId;
          // The last matching section in the list is considered the currentSection.
        }
      }
    });
    // Updates activeSection to the current visible section.
    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Adds the handleScroll function as a listener to the window’s scroll event when the component mounts.
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Removes the listener when the component unmounts to avoid memory leaks.
    };
  }, []);

  //Rendering the buttons
//   Renders one button per section.
// The className of the button becomes "active" if the activeSection matches the button’s section id.
// Clicking a button scrolls to the corresponding section.
  return (
    <div className="scroll-menu">
      {/* button COMPANY */}
      <button
        onClick={() => handleScrollTo("section1")}
        className={activeSection === "section1" ? "active" : ""}
      >
        COMPANY
      </button>
      {/* button MANAGEMENT */}
      {/* <button
        onClick={() => handleScrollTo("section2")}
        className={activeSection === "section2" ? "active" : ""}
      >
        MANAGEMENT
      </button> */}
      {/* button OUR SERVICES */}
      <button  
        onClick={() => handleScrollTo("section3")}
        className={activeSection === "section3" ? "active" : ""}
      >
        OUR SERVICES
      </button>
      {/* button Business Partner Working relationships */}
      <button
        onClick={() => handleScrollTo("section4")}
        className={activeSection === "section4" ? "active" : ""}
      >
        {"Business Partner Working relationships".toUpperCase()}
      </button>
      {/* button OUR CLIENT EXPERIENCES */}
      <button
        onClick={() => handleScrollTo("section5")}
        className={activeSection === "section5" ? "active" : ""}
      > 
        OUR CLIENT EXPERIENCES
      </button>
      {/* button PARTNERING WITH US */}
      <button
        onClick={() => handleScrollTo("section6")}
        className={activeSection === "section6" ? "active" : ""}
      >
        PARTNERING WITH US
      </button>
    </div>
  );
}

export default ScrollMenuHome;
