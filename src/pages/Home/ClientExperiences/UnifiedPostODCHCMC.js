import index from "../../../assets/images/index";
import React, { useState } from "react";
import "./../styles/ServiceComponent.css";

function UnifiedPostODCHCMC() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="card-container-v1">
        <div className="card-column left-column">
          <div className="color-bg-v1 card-content">
            <p className="title-2">
              Unifiedpost Offshore Development Center - HCMC
            </p>
            <ul>
              <li>
                November 2019 Unifiedpost decided to start-up a dedicated
                Offshore Development Center in Ho Chi Minh city and we initial
                started with a Team of 22 people, that was upscaled to a team of 100 persons.
              </li>
              <li>
                The focus of the ODC was to build up different Teams for
                different Application environments part of the Unifiedpost 
                Business solution. These teams would develop E2E software
                solutions cooperating with other development teams located in
                Roumania, Estonia, Moldavia, Belgium, the Netherlands, ...
              </li>
              <li>
                In November 2019 the following teams were set-up :{" "}
                <strong>total  resources 24</strong>
                <ul>
                  <li>Xribe Team - Templates application </li>
                  <li>Micro Services - Validation and look up services for VAT, company and bank account numbers  </li>
                  <li>App Store</li>
                  <li>UP delivery</li>
                </ul>
              </li>
            </ul>
            <button
              className="expand-button"
              onClick={toggleExpand}
              aria-label={expanded ? "Collapse paragraph" : "Expand paragraph"}
            >
              <span className={`plus-icon ${expanded ? "expanded" : ""}`}>
                {expanded ? "−" : "+"}
              </span>
              <span>more details…</span>
            </button>
          </div>
          {expanded && (
            <div className="card-container-v2 color-bg-v2">
              <div className="image-container">
                <img
                  src={index["UpResources2019"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2019</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2020"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2020</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2021"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2021</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2022"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2022</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2023"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2023</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2024"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2024</p>
              </div>
              <div className="image-container">
                <img
                  src={index["UpResources2025"]}
                  alt="Web Development"
                  className="resource-image"
                />
                <p className="image-caption">Up Resources 2025</p>
              </div>
            </div>
          )}
        </div>
        {/* <div className="card-column right-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["UpResources2019"]}
                alt="Web Development"
                className="service-image"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="card-container-v1">
        <div className="card-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["UpOffshoreDevelopmentCenterHCMC"]}
                alt="Web Development"
                className="service-image-large"
              />
              <p className="image-caption">
                Unifiedpost Offshore Development Center - HCMC
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnifiedPostODCHCMC;
