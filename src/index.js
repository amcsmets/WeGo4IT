// 📌 Flow in plain English:
// Load React and ReactDOM.
// Load styles and your App component.
// Find the root element in HTML.
// Render your App inside it.
// Optionally track performance.

import React from "react";
// React — Needed because JSX (<App />) is converted into React.createElement() calls behind the scenes.
import ReactDOM from "react-dom/client";
// ReactDOM — The part of React responsible for rendering components into the DOM (the HTML page)
import "./styles/global.css";
import "./styles/styles.css";
// These import your CSS stylesheets so the whole app gets the defined styles.
// In React, importing CSS this way works because of the Webpack bundler, which processes and injects styles into the page.
import App from "./App";
// Imports the main React component for your app — App.js in the same folder.
// This component is what gets rendered at the very top of your UI.
import reportWebVitals from "./reportWebVitals";
// This is a helper from Create React App that can measure your app’s performance (like page load times, interaction speeds).
// By default, it does nothing unless you pass a logging or analytics function to it.
// import "bootstrap/dist/css/bootstrap.min.css";
//If enabled, it would load Bootstrap CSS so you can use Bootstrap styles in your React components.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Finds the <div id="root"></div> in your public/index.html.
// Creates a React root there — this is where your whole React app will be inserted.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode> is a development tool that:
// Highlights potential problems
// Runs some lifecycle methods twice in dev mode to catch side effects
// <App /> is your entire app UI starting point.
// This mounts the App component into the root DOM element. 
reportWebVitals();
// Optional — measures performance and can log results or send them to analytics.