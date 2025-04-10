import index from "../../assets/images/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ServiceComponent.css";

function ServiceComponent() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [outsourcingExpanded, setOutsourcingExpanded] = useState(false);
  const [extensionExpanded, setExtensionExpanded] = useState(false);
  const toggleExpandExtension = () => {
    setExtensionExpanded(!extensionExpanded);
  };

  const toggleExpandOutsourcing = () => {
    setOutsourcingExpanded(!outsourcingExpanded);
  };

  return (
    <div id="section3">
      <div className="service-title-container">
        <h2 className="service-title color-primary-900">Our Services</h2>
      </div>
      <div className="service-container">
        <div className="service-column left-column">
          <div className="service-content">
            <h4>IT EXTENSION - Services</h4>
            <p
              className={`service-paragraph ${
                extensionExpanded ? "expanded" : ""
              }`}
            >
              What is team extension Augmenting your team with Offshore
              developers to provide stability, efficiency, fill glaring skill
              gaps and missing manpower to deliver Software products.
            </p>
            <p>
              WeGo4it can build up an extension of these teams with Offshore IT
              resources that will be fully integrated with the Client existing
              team. The offshore team will be working under the leadership of
              the clients Business Owner/PM/... and join the daily stand-up
              meetings, tasks, deliveries and execute from the remote Offshore
              location.
            </p>
            <button
              className="expand-button"
              onClick={toggleExpandExtension}
              aria-label={
                extensionExpanded ? "Collapse paragraph" : "Expand paragraph"
              }
            >
              <span
                className={`plus-icon ${extensionExpanded ? "expanded" : ""}`}
              >
                {extensionExpanded ? "−" : "+"}
              </span>
            </button>
            {extensionExpanded && (
              <>
                <h5 className="color-primary-900">
                  WeGo<span className="color-red">4</span>it Provides
                </h5>
                <div>
                  <ul>
                    <li>
                      Skilled and Experienced IT experts ( PM, Solution &amp;
                      Design Architects, Business Analists, DEV
                      (Front/Back/fullstack),  Quality Assurance - English
                      speaking
                    </li>
                    <li>
                      Off-shore IT team is an extension of the client team and
                      is steared by client on daily basis
                    </li>
                    <li>
                      Best practices model between client and Off-shore team
                      will be applied as working process
                    </li>
                    <li>
                      A longterm planning ( 1 year roadmap) will be established
                      and the workload will be assed and agreed by WeGo4it and
                      client
                    </li>
                    <li>
                      An assesement will be made by WeGo4it of the total
                      workload and resources needed with detailed overall sprint
                      planning.
                    </li>
                    <li>
                      Based on this we will propose a monthly T&amp;M budget of
                      the planned resources for monthly billing
                    </li>
                    <li>
                      A quaterly or 6 month review of the roadmap and workscope
                      will be applied to adjust resources
                    </li>
                    <li>
                      A Service Level agreement will be in place defining the
                      up- and down scaling of resources.
                    </li>
                  </ul>
                </div>
              </>
            )}
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
              <p
                className="image-caption"
                onClick={() => handleClick("/services/team-extension")}
              >
                IT EXTENSION - Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="service-column left-column">
          <div className="service-content">
            <h3>OUTSOURCING - Services</h3>
            <p
              className={`service-paragraph ${
                outsourcingExpanded ? "expanded" : ""
              }`}
            >
              What is IT Outsourcing
            </p>
            <p>
              Is the use of external service providers to effectively deliver
              IT-enabled business process, application service and
              infrastructure solutions for business outcomes. The lack and cost
              of experienced IT experts on local markets drives most companies
              towards It outsourcing. Vietnam growth over the last 25 years to a
              leading worldwide outsourcing destination in South East Asia as it
              provides the best cost-efficient outsourcing services with proven
              high performance and quality deliveries.
            </p>
            <button
              className="expand-button"
              onClick={toggleExpandOutsourcing}
              aria-label={
                outsourcingExpanded ? "Collapse paragraph" : "Expand paragraph"
              }
            >
              <span
                className={`plus-icon ${outsourcingExpanded ? "expanded" : ""}`}
              >
                {outsourcingExpanded ? "−" : "+"}
              </span>
            </button>
            {outsourcingExpanded && (
              <>
                <h5 className="color-primary-900">
                  WeGo<span className="color-red">4</span>it Provides
                </h5>
                <div>
                  <ul>
                    <li>
                      Based on the Project scope requirements of the client we
                      will provide an IT Team capable of facilitating the E2E
                      software development and delivery of the scoped Project.
                    </li>
                    <li>
                      The Project could be a development from:
                      <ul>
                        <li>
                          scratch and/or based on procured Bunsiness analysis
                        </li>
                        <li>
                          existing application
                          <ul>
                            <li>
                              to enhanced and migrated or converted ?
                              <ul>
                                <li>
                                  change of architecture / Change of programming
                                  lanaguage
                                </li>
                              </ul>
                            </li>
                            <li>new features implementation ?</li>
                            <li>maintenance ?</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      The total scope will be assessed and broken down in
                      delivery milestones, ending up into a overall sprint
                      planning
                    </li>
                    <li>
                      A  planning ( 1 year roadmap) will be established and the
                      workload will be assed and agreed by WeGo4it and client
                      Based on this we will propose a monthly T&amp;M budget of
                      the planned resources for monthly billing
                    </li>
                    <li>
                      A quaterly or 6 month review of the roadmap and workscope
                      will be applied to adjust resources
                    </li>
                    <li>
                      We will also guarantee the knowledge retention of the
                      buildup teams resources and work out a longterm continuous
                      plan for maintenance of the project
                    </li>
                    <li>
                      Best practices model between client and Off-shore team
                      will be applied as working process.
                    </li>
                    <li>
                      Best practices model between client and Off-shore team
                      will be applied as working process.
                      <ul>
                        <li>
                          1 BA  / 4 DEV ( 2 F-E / 2 B-E) / 2 QA - team of 7
                          people
                        </li>
                        <li>
                          If the scope of the projects requires many dependant
                          teams we will add per 3 teams a PM
                        </li>
                        <li>
                          Daily Stand-up video call meeting with the client
                          Project Leader working close with the offshore team.
                          <ol>
                            <li>
                              we favorize a strong involvement from the client
                              by periodical participation offshore with the team
                            </li>
                          </ol>
                        </li>
                        <li>
                          Daily Stand-up video call meeting with the client
                          Project Leader working close with the offshore team.
                        </li>
                        <li>
                          A Service Level agreement will be in place defining
                          the up- and down scaling of resources.
                        </li>
                        <li>
                          Skilled and Experienced IT experts ( PM, Solution
                          &amp; Design Architects, Business Analists, DEV
                          (Front/Back/fullstack),  Quality Assurance - English
                          speaking
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </>
            )}
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
              <p
                className="image-caption"
                onClick={() => {
                  handleClick("services/outsource");
                }}
              >
                OUTSOURCING - Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
