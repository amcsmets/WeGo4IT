import index from "../../../assets/images/index";
import React from "react";
import "./../styles/ServiceComponent.css";

function IntegrationPartner() {
  return (
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="color-bg-v1 card-content">
          <p className="title-2">
            <strong>
              WeGo<span className="color-red">4</span>it - Unifiedpost
              Integration partner
            </strong>
          </p>
          <ul>
            <li>
              Has since 2019 the hands-on build-up experience of the Unifiedpost
              Software solutions and stays involved in ongoing development
            </li>
            <li>
              Can take on integrations projects on short notice and execute and
              implement them seamsly based on internal knowledge and user
              experience
            </li>
            <li>
              The integration projects will be assesed by us and a Sprint
              planning will be set-up with estimation of the total workload,
              team effort and delivery milestones.
            </li>
            <li>
              A T/M proposal will be made with estimated Workload and cost for
              the project
            </li>
            <li>
              We will work in an offshore Development mode and set-up daily,
              weekly video conference working with the end client
            </li>
          </ul>
        </div>
      </div>
      <div className="card-column">
        <div className="image-stack">
          <div className="service-image-container">
            <img
              src={index["UnifiedpostIntegrationPartner"]}
              alt="Web Development"
              className="service-image"
            />
            <p className="image-caption">
              WeGo4it - Unifiedpost Integration partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationPartner;
