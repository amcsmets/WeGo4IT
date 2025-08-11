import index from "../../../assets/images/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ServiceComponent.css";

function OutSourcingServices() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [outsourcingExpanded, setOutsourcingExpanded] = useState(false);
  const toggleExpandOutsourcing = () => {
    setOutsourcingExpanded(!outsourcingExpanded);
  };

  return (
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="card-content color-bg-v1">
          <h2 className="title-2">OUTSOURCING - Services</h2>
          <p className="title-2">What is IT Outsourcing</p>
          <p>
            IT outsourcing is the use of external service providers to
            effectively deliver IT-enabled business process, application service
            and infrastructure solutions for business outcomes.
          </p>
          <p>
            The lack and cost of experienced IT experts on local markets drives
            most companies towards It outsourcing. Vietnam growth over the last
            25 years to a leading worldwide outsourcing destination in South
            East Asia as it provides the best cost-efficient outsourcing
            services with proven high performance and quality deliveries.{" "}
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
            <span>more details…</span>
          </button>
        </div>
        {outsourcingExpanded && (
          <div className="color-bg-v2 card-content">
            <p className="title-1">
              WeGo<span className="color-red">4</span>it Provides
            </p>
            <div>
              <ul>
                <li>
                  Based on the Project scope requirements of the client we will
                  provide an IT Team capable of facilitating the E2E software
                  development and delivery of the scoped Project.
                </li>
                <li>
                  The Project could be a development from:
                  <ul>
                    <li>scratch and/or based on procured Bunsiness analysis</li>
                    <li>
                      existing application
                      <ul>
                        <li>
                          to enhanced and migrated or converted?
                          <ul>
                            <li>
                              change of architecture / Change of programming
                              language
                            </li>
                          </ul>
                        </li>
                        <li>new features implementation?</li>
                        <li>maintenance?</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  The total scope will be assessed and broken down in delivery
                  milestones, ending up into a overall sprint planning
                </li>
                <li>
                  A planning (1 year roadmap) will be established and the
                  workload will be assed and agreed by WeGo4it and client Based
                  on this we will propose a monthly T&amp;M budget of the
                  planned resources for monthly billing
                </li>
                <li>
                  A quaterly or 6 month review of the roadmap and workscope will
                  be applied to adjust resources
                </li>
                <li>
                  We will also guarantee the knowledge retention of the buildup
                  teams resources and work out a longterm continuous plan for
                  maintenance of the project
                </li>
                <li>
                  Best practices model between client and Off-shore team will be
                  applied as working process.
                </li>
                <li>
                  Typicaly team depending on the size and complexity of the
                  project would be:
                  <ul>
                    <li>
                      1 BA / 4 DEV ( 2 FE / 2 BE) / 2 QA - team of 7 people
                    </li>
                    <li>
                      If the scope of the projects requires many dependant teams
                      we will add per 3 teams a PM
                    </li>
                    <li>
                      Daily Stand-up video call meeting with the client Project
                      Leader working close with the offshore team.
                      <ul>
                        <li>
                          we favorize a strong involvement from the client by
                          periodical participation offshore with the team
                        </li>
                      </ul>
                    </li>
                    <li>
                      Weekly Planning and Project status meeting, Demo's ....
                    </li>
                    <li>
                      A Service Level agreement will be in place defining the
                      up- and down scaling of resources.
                    </li>
                    <li>
                      Skilled and Experienced IT experts (PM, Solution &amp;
                      Design Architects, Business Analists, DEV
                      (Front/Back/fullstack), Quality Assurance - English
                      speaking)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="card-column right-column">
        <div className="image-stack">
          <div className="service-image-container">
            <img
              src={index["outsourcingService"]}
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
  );
}

export default OutSourcingServices;
