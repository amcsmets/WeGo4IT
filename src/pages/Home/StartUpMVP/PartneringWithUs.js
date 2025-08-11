import index from "../../../assets/images/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ServiceComponent.css";

function PartneringWithUs() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="section6">
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="card-content color-bg-v1">
          <h2 className="title-2">
            Start-up MVP software development Service{" "}
          </h2>
          <h3 className="title-3">
            Why partnering with US?
          </h3>
          <ul>
            <li>
              We have more than 25 years of proven experience in E2E offshore Development with our worldwide clients.
            </li>
            <li>
              Our Business Analysts, Developers and Quality Assurance officers have proven experience to handle from the Business and Functional requirements (for any Business application ) the full cycle to develop your MVP project.
            </li>
            <li>
              Your MVP will have a sustainable/ reusable architecture and technology to assure further build of  additional requirements and complexity. 
            </li>
            <li>
             We have the flexibility to scale - up and down very rapidly to shorten your time to go to market and to implement your initial and future roadmap.
            </li>
            <li>
              Your chosen development team will not be a stand-alone team but can fall back on the total experience of our company E2E software development Service. Sudden imminent ( Temporally or continuous )needs for other Technology knowledge/experience and/or additional needs for IT experts are swiftly present. 
            </li>
            <li>
              We will commit you very competitive daily rates and forecast you a monthly cost based for the projected scoped workload ( IT experts needed) with a detailed Sprint and Delivery planning. 
            </li>
          </ul>
          {/* <button
            className="expand-button"
            onClick={toggleExpand}
            aria-label={expanded ? "Collapse paragraph" : "Expand paragraph"}
          >
            <span className={`plus-icon ${expanded ? "expanded" : ""}`}>
              {expanded ? "−" : "+"}
            </span>
            <span>more details…</span>
          </button> */}
        </div>
        {/* {expanded && (
          <div className="color-bg-v2 card-content">
            <p>
              November 2023 BOGERD MARTIN ( Marine Software development) reached
              out to WeGo4it for E2E software development Services for the
              creation, development and integration of the new CT Insights chart
              Track Platform.
            </p>
            <p>
              WeGo4it started up an offshore software development team of 7
              people in Ho Chi Minh City.
            </p>
            <div>
              <ul>
                <li>1 Business Analyst</li>
                <li>
                  4 Senior Software Developers ( 2 Back-end / 2 Fullstack)
                </li>
                <li>2 Senior Quality Assurance officers</li>
              </ul>
            </div>
            <p>
              We Started up in November 2023, and our BA travelled to Belgium
              for 2 weeks working together with BM business owner to transfer
              the initial Business knowledge. In the meantime we started up the
              Offshore team in Ho Chi Minh and became full operational by 15th
              of December 2023.
            </p>
            <p>The Technology & Business needs </p>
          </div>
        )} */}
      </div>
      {/* <div className="card-column">
        <div className="image-stack">
          <div className="service-image-container">
            <img
              src={index["CTILogon"]} 
              alt="CT Insights"
              className="service-image"
            />
            <p className="image-caption">
              CTInsights, the value of integration
            </p>
          </div>
        </div>
      </div> */}
    </div>
    {/* <div className="card-container-v1">
        <div className="card-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["CTIMap"]}
                alt="CT Insights Map"
                className="service-image-large"
              />
              <p className="image-caption">
                CT Insights Platform - Bogerd Martin
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PartneringWithUs;
