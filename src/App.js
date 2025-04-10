import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Management from "./pages/About/Management";
import { AgileOrganization } from "./pages/AgileOrganization/Index";
import {
  TeamExtensionSection,
  OutSourcingSection,
  ConsultancySection,
  Services,
} from "./pages/Services/Index";
import ContactForm from "./components/form/ContactForm";

const basename = process.env.NODE_ENV === "production" ? "/WeGo4IT" : "/";

function App() {
  return (
    <>
      <Router basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" element={<Services />} />
          <Route
            path="/services/team-extension"
            element={<TeamExtensionSection />}
          />
          <Route path="/services/outsource" element={<OutSourcingSection />} />
          <Route
            path="/services/consultancy"
            element={<ConsultancySection />}
          />
          <Route
            path="/services/agile-organization"
            element={<AgileOrganization />}
          />
          <Route path="/about/management" element={<Management />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
