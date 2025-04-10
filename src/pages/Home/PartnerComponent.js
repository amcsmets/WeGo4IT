import index from "../../assets/images/index";
import React, { useState } from "react";
import "./styles/ServiceComponent.css";

function PartnerComponent() {
  const [unifiedpostExpanded, setUnifiedpostExpanded] = useState(false);
  const [fptExpanded, setFptExpanded] = useState(false);

  const toggleExpandUnifiedpost = () => {
    setUnifiedpostExpanded(!unifiedpostExpanded);
  };
  const toggleFptExpanded = () => {
    setFptExpanded(!fptExpanded);
  };

  return (
    <div id="section5">
      <div className="service-title-container">
        <h2 className="service-title color-primary-900">Partner</h2>
      </div>
      <div className="service-container">
        <div className="service-column left-column">
          <div className="service-content">
            <p>
              <strong>
                WeGo<span className="color-red">4</span>it - Integration partner
              </strong>
            </p>
            <ul>
              <li>
                Has since 2019 the hands-on build-up experience of the
                Unifiedpost Software solutions and stays involved in ongoing
                development
              </li>
              <li>
                Can take on integrations projects on short notice and execute
                and implement them seamsly based on internal knowledge and user
                experience
              </li>
              <li>
                The integration projects will be assesed by us and a Sprint
                planning will be set-up with estimation of the total workload,
                team effort and delivery milestones.
              </li>
              <li>
                The integration projects will be assesed by us and a Sprint
                planning will be set-up with estimation of the total workload,
                team effort and delivery milestones.
              </li>
              <li>
                We will work in an offshore Development mode and set-up daily,
                weekly video conference working with the end client
              </li>
            </ul>
            <p>
              <strong>Consultancy services</strong>
            </p>
            <ul>
              <li>to be filled</li>
            </ul>
          </div>
        </div>
        <div className="service-column right-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["teamExtensionBlue"]}
                alt="Web Development"
                className="service-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="service-content">
          <p>
            <strong>Working Partnership relations:</strong>
          </p>
          <div className="pt-3">
            <p>
              <strong>Unifiedpost:</strong>
            </p>
            <button
              className="expand-button"
              onClick={toggleExpandUnifiedpost}
              aria-label={
                unifiedpostExpanded ? "Collapse paragraph" : "Expand paragraph"
              }
            >
              <span
                className={`plus-icon ${unifiedpostExpanded ? "expanded" : ""}`}
              >
                {unifiedpostExpanded ? "−" : "+"}
              </span>
            </button>
            {unifiedpostExpanded && (
              <>
                <p>
                  <strong>Corporate Profile:</strong>
                </p>
                <p>
                  At Unifiedpost, they make business easy and smart by offering
                  enterprises tools to build strong digital connections with
                  customers, suppliers and other stakeholders. By doing so, they
                  help their customers to become more efficient, cost effective
                  and compliant. Digitising ecosystems of consumers and
                  organisations has been the mission of Unifiedpost ever since
                  its foundation in 2001. Today that has evolved in a full
                  support of collaboration, digital interactions, document
                  exchanges, electronic payments and cash flow optimisation for
                  all types of companies. This way we allow organisations to
                  optimise and automate their purchase and sales processes,
                  which will save them time and money. Finally, we want to
                  support companies to be compliant with VAT regulations and
                  other regulatory requirements they are subjected to. Within
                  their trusted network, they equip every verified participant
                  with the right tools to digitise and automate business
                  processes including order-to-cash and procure-to-pay
                  processes. Those tools range from web platforms and smart
                  mobile applications over software integrations all the way to
                  fully documented APIs. Unifiedpost Working partnership with
                  WeGo4it is based on E2E offshore Software development services
                  facilitation for various projects, but also on re-ussing this
                  Software development Knowledge and experience for Unifiedpost
                  end clients specific intergration projects.
                </p>
              </>
            )}
          </div>
          <div className="pt-3">
            <p>
              <strong>FPT Software</strong>
            </p>
            <p>
              Since its foundation in 1988, FPT Corporation has been the leading
              IT Services provider in Vietnam. In FY2024, FPT Corporation
              reported revenues of approximately US $ 3 billion and over 40,000
              employees, making it the largest technology company of the Vietnam
              IT industry. FPT specializes in Software Development, System
              Integration, IT Services, Manufacturing, Distribution and Retails
              of IT products. FPT owns FPT University, a leading institution
              providing accredited bachelor’s degreesin software engineering and
              business administration, attracting more than 80,000 students,
              including more than 5.000 International students. FPT partnership
              was signed in 1999 by Werner Goeminne (Share-holder and
              Board-member - for Harvey Nash) and his Belgium, UK and European
              clients. More than 25 years later a working partnership is stiil
              in place and actif.
            </p>
            <button
              className="expand-button"
              onClick={toggleFptExpanded}
              aria-label={
                fptExpanded ? "Collapse paragraph" : "Expand paragraph"
              }
            >
              <span className={`plus-icon ${fptExpanded ? "expanded" : ""}`}>
                {fptExpanded ? "−" : "+"}
              </span>
            </button>
            {fptExpanded && (
              <>
                <p>
                  <strong>Aurify</strong>
                </p>
                <ul>
                  <li>
                    At the beginning of 2024, a team of highly skilled IT
                    professionals with long-lasting professional relationships
                    founded Aurify. They came together because of their shared
                    mindset that was later written down as the Aurify Mission
                    Statement at the founding date of the company.
                  </li>
                  <li>
                    The Aurify Mission is to empower businesses to excel in the
                    digital landscape with cutting-edge, secure, and seamless
                    cloud and DevOps solutions, 24/7, around the globe, while
                    ensuring financial efficiency and strict adherence to
                    security compliance.
                  </li>
                  <li>
                    Thereby, it is Aurify’s Goal to become a leading IT service
                    provider with strong foundations in Belgium in order to
                    further extend our growth trajectory beyond Northern
                    Europe’s borders.
                  </li>
                  <li>
                    Unifiedpost being their ongoing client for many years there
                    is a Vietnamese Aurify tem of 20+ people in place in Ho Chi
                    Minh City
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerComponent;
