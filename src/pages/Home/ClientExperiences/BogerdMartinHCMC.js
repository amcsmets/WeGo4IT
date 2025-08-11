import index from "../../../assets/images/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ServiceComponent.css";

function BogerdMartinHCMC() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="card-content color-bg-v1">
          <h2 className="title-2">
            BOGERD MARTIN – Marine Development – Stella Polaris Project - HCMC{" "}
          </h2>
          <p>
            With years’ worth of experience in serving mariners worldwide,
            Bogerd Martin is helping fleets adapt to the challenges of
            modern-day shipping, providing a steady and stable haven in a sea of
            digital changes. Bogerd Martin is helping its clients achieve
            compliance standards and work more efficiently by investing in
            research, development, and continuously improving their range of
            integrated solutions, products, and services.
          </p>
          <p>
            Bogerd Martin has now teamed up with experts such as Theyr, DNV,
            Verifavia, UKHO, Maritrace, Spire, and others, to provide a
            user-friendly, time-efficient solution for Fleet Managers: CT
            Insights! All the data, one platform.
          </p>
          <p>
            One single platform that allows you to plan, optimise, verify, and
            analyse while factoring in additional data such as the vessel model,
            weather, piracy, hurricanes, navigational areas, environmental
            regulations, Mean Daily Low Temperature and even whale collision
            risk!
          </p>
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
        )}
      </div>
      <div className="card-column">
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
      </div>
    </div>
    <div className="card-container-v1">
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
      </div>
    </>
  );
}

export default BogerdMartinHCMC;
