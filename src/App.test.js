import { render, screen } from '@testing-library/react';
// •	render → From React Testing Library. It mounts your React component in a fake DOM so tests can run without a real browser.
// •	screen → Utility to query elements in the rendered component (like getByText, getByRole, etc.).

import App from './App';
// •	App → Your main app component that’s being tested.

test('renders learn react link', () => {
  // •	test() is a Jest function (the default testing framework for CRA).
  // •	First parameter: test name — "renders learn react link".
  // •	Second parameter: the function containing the actual test steps.
  render(<App />);
  // •	This creates a virtual DOM and renders your <App /> into it.
  // •	Now the test can interact with your app’s HTML output.

  const linkElement = screen.getByText(/learn react/i);
  // •	screen.getByText(/learn react/i) → searches for an element whose text matches "learn react", case-insensitive (i flag).
  // •	The /.../ is a regular expression so it doesn’t have to match exactly "Learn React" — any casing works.

  expect(linkElement).toBeInTheDocument();
  // •	expect() is Jest’s assertion function.
  // •	.toBeInTheDocument() checks that the element exists in the rendered output.

});

// replace this with tests that:
// •	Check if the right components render on certain routes.
// •	Test form inputs and button clicks.
// •	Validate API call results show correctly.

// EXAMPLE 1
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';

// test('renders header and home page', () => {
//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <App />
//     </MemoryRouter>
//   );

//   // Check if the header is rendered
//   expect(screen.getByRole('banner')).toBeInTheDocument();

//   // Check if Home page content is visible
//   expect(screen.getByText(/home/i)).toBeInTheDocument();
// });

// test('navigates to Management page', () => {
//   render(
//     <MemoryRouter initialEntries={['/about/management']}>
//       <App />
//     </MemoryRouter>
//   );

//   // This assumes your Management component has "Management" text
//   expect(screen.getByText(/management/i)).toBeInTheDocument();
// });

// test('renders Contact page', () => {
//   render(
//     <MemoryRouter initialEntries={['/contact']}>
//       <App />
//     </MemoryRouter>
//   );

//   // Assuming ContactUs has "Contact Us" in it
//   expect(screen.getByText(/contact us/i)).toBeInTheDocument();
// });

// EXAMPLE 2
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';

// test('renders header and home page', () => {
//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <App />
//     </MemoryRouter>
//   );

//   // Header should be visible
//   expect(screen.getByRole('banner')).toBeInTheDocument();

//   // Home page text (change this to match your actual home page)
//   expect(screen.getByText(/home/i)).toBeInTheDocument();
// });

// test('navigates to Management page directly by URL', () => {
//   render(
//     <MemoryRouter initialEntries={['/about/management']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/management/i)).toBeInTheDocument();
// });

// test('navigates to Contact page via click', async () => {
//   const user = userEvent.setup();

//   render(
//     <MemoryRouter initialEntries={['/']}>
//       <App />
//     </MemoryRouter>
//   );

//   // Click the Contact link in the Header
//   await user.click(screen.getByRole('link', { name: /contact/i }));

//   // Check if Contact page content appears
//   expect(screen.getByText(/contact us/i)).toBeInTheDocument();
// });
