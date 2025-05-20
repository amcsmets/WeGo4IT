import ServicesBoxes from "./ServicesBoxes";
import ScrollMenuServices from "./ScrollMenuServices";
import TeamExtensionSection from "./TeamExtensionSection";
import OutSourcingSection from "./OutSourcingSection";
import ConsultancySection from "./ConsultancySection";
function Services() {
  return (
    <>
      <main>
        <div className="app">
          <h2 className="page-title">Service Page</h2>
          <TeamExtensionSection />
          <OutSourcingSection />
          <ConsultancySection />
          <ScrollMenuServices />
        </div>
        <ServicesBoxes />
      </main>
    </>
  );
}

export default Services;
