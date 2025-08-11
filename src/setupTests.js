// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// It imports @testing-library/jest-dom, which is a library that extends Jest’s default assertions.
// This adds custom matchers that make it easier to test React components and DOM elements.


// Examples of what jest-dom lets you do

// Instead of writing:
// expect(element.textContent).toMatch(/react/i);
// You can write:
// expect(element).toHaveTextContent(/react/i);
// Other useful matchers provided include:
// toBeInTheDocument() — check if element is present in the DOM.
// toHaveAttribute(name, value) — check if element has an attribute.
// toBeVisible() — check if element is visible to the user.
// toHaveClass(className) — check if element has a CSS class.
// toBeDisabled(), toBeEnabled(), toHaveFocus(), etc.

// Why is this helpful?
// Makes test code more readable and expressive.
// Simplifies common assertions when testing React components.
// Encourages writing clearer test intentions.

// When and how is it used?
// setupTests.js is automatically run once before all tests if you use Create React App or have configured Jest to use it as a setup file.
// This means you don’t need to import @testing-library/jest-dom in every single test file — it’s globally available.