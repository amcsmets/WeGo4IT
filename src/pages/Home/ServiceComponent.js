import React from "react";
import OffshoreDevelopmentCenter from "./OurServices/OffshoreDevelopmentCenter";
import ItExtensionServices from "./OurServices/ItExtensionServices";
import OutSourcingServices from "./OurServices/OutSourcingServices";
import IntegrationPartner from "./OurServices/IntegrationPartner";
import "./styles/ServiceComponent.css";

function ServiceComponent() {
  return (
    <div id="section3">
      <div className="title-container-1">
        <h2 className="title-1">Our Services</h2>
      </div>
      <ItExtensionServices></ItExtensionServices>
      <OutSourcingServices></OutSourcingServices>
      <OffshoreDevelopmentCenter></OffshoreDevelopmentCenter>
      <IntegrationPartner></IntegrationPartner>
    </div>
  );
}

export default ServiceComponent;
