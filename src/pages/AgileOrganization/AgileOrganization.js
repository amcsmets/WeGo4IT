import ScrollMenu from "./ScrollMenu";
import AgileOrganizationSection from "./AgileOrganizationSection";
import WhatIsAgileSection from "./WhatIsAgileSection";
import MethodologiesSection from "./MethodologiesSection";
import KeySuccessFactorsSection from "./KeySuccessFactorsSection";

function AgileOrganization() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="app">
      <h2 className="page-title">Agile Organization</h2>
      <AgileOrganizationSection id="section1" title="Agile Organization" />
      <WhatIsAgileSection id="section2" title="What Is Agile" />
      <MethodologiesSection id="section3" title="Methodologies" />
      <KeySuccessFactorsSection id="section4" title="Key Success Factors" />
      <ScrollMenu handleScrollTo={handleScrollTo} />
    </div>
  );
}

export default AgileOrganization;
