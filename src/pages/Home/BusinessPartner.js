import React from "react";
import Unifiedpost from "./PartnerWorkingRelationships/Unifiedpost";
import FPTSoftware from "./PartnerWorkingRelationships/FPTSoftware";
import Aurify from "./PartnerWorkingRelationships/Aurify";
import "./styles/ServiceComponent.css";

function BusinessPartner() {
  return (
    <div id="section4">
      <div className="title-container-1">
        <h2 className="title-1">Business Partner Working Relationships</h2>
      </div>
      <Unifiedpost></Unifiedpost>
      <FPTSoftware></FPTSoftware>
      <Aurify></Aurify>
    </div>
  );
}

export default BusinessPartner;
