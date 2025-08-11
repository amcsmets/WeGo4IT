import React from "react";
import UnifiedPostODCHCMC from "./ClientExperiences/UnifiedPostODCHCMC";
import BogerdMartinHCMC from "./ClientExperiences/BogerdMartinHCMC";
import "./styles/ServiceComponent.css";

function ClientExperiences() {
  return (
    <div id="section5">
      <div className="title-container-1">
        <h2 className="title-1">Our Client Experiences</h2>
      </div>
      <UnifiedPostODCHCMC />
      <BogerdMartinHCMC />
    </div>
  );
}

export default ClientExperiences;
