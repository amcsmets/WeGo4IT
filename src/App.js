import Header from "./layout/Header";
// •	Header — a layout component (a navbar or top banner) that appears on all pages.
import Home from "./pages/Home/Home";
// •	Home — your homepage component.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// •	BrowserRouter (aliased as Router) — provides routing functionality using the browser's address bar.
// •	Routes — a container for multiple <Route> components.
// •	Route — maps a URL path to a component.
import Management from "./pages/About/Management";
// •	Management — a page for the “Management” section under “About”.
// Here no { } because Management is a default export from that file.
// In ./pages/About/Management.js, you’d likely see: export default function Management() { ......}
// THerefore Default export → You can import it with any name you want like import Banana from "./pages/About/Management"; // still works
import { AgileOrganization } from "./pages/AgileOrganization/Index";
// •	AgileOrganization — a page about agile organization (named export from its Index.js).
//Here you must use { } because AgileOrganization is a named export.
// In ./pages/AgileOrganization/Index.js, you’d likely see: 
// export function AgileOrganization() {....}
// or 
// export const AgileOrganization = () => { ... }
//Named export → You must use the exact name in curly braces: match capitals
// 💡 Rule of thumb:
// Default export → import Something from "..." (no { })
// Named export → import { Something } from "..." (with { })
// A file can have only one default export, but multiple named exports.
import {
  TeamExtensionSection,
  OutSourcingSection,
  ConsultancySection,
  Services,
} from "./pages/Services/Index";
// •	These are all service-related page components imported from a single Index.js file inside pages/Services.
import ContactUs from "./components/form/ContactForm";
//•	The “Contact Us” form component.
function App() {
  return (
    <>
      <Router basename="/WeGo4IT">
        <Header />
        <Routes>
          {/* •	When URL is /, show the Home page. */}
          <Route 
            path="/" 
            element={<Home />} 
          />
          {/* •	Each /services/... path renders a specific service page. */}
          <Route 
            path="/services/" 
            element={<Services />} />
          <Route
            path="/services/team-extension"
            element={<TeamExtensionSection />}
          />
          <Route path="/services/outsource" 
            element={<OutSourcingSection />} />
          <Route
            path="/services/consultancy"
            element={<ConsultancySection />}
          />
          <Route
            path="/services/agile-organization"
            element={<AgileOrganization />}
          />
          {/* •	Show the management page under “About”. */}
          <Route 
            path="/about/management" 
            element={<Management />} 
          />
          •	Show the contact form page.
          <Route 
            path="/contact" 
            element={<ContactUs />} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// •	Makes the App component available for use in index.js.