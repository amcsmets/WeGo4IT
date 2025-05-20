import ScrollMenu from "./ScrollMenu";
import AgileOrganizationSection from "./AgileOrganizationSection";
import WhatIsAgileSection from "./WhatIsAgileSection";
import MethodologiesSection from "./MethodologiesSection";
import KeySuccessFactorsSection from "./KeySuccessFactorsSection";

function AgileOrganization() {
  return (
    <div className="app">
      <h2 className="page-title">Agile Organization</h2>
      <AgileOrganizationSection id="section1" title="Agile Organization" />
      <WhatIsAgileSection id="section2" title="What Is Agile" />
      <MethodologiesSection id="section3" title="Methodologies" />
      <KeySuccessFactorsSection id="section4" title="Key Success Factors" />
      <ScrollMenu />
    </div>
  );
}

export default AgileOrganization;
