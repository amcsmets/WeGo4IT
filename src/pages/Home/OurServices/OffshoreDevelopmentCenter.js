import React, { useState } from "react";
import "./../styles/ServiceComponent.css";
import index from "../../../assets/images/index";

function OffshoreDevelopmentCenter() {
  const [clientExpanded, setClientExpanded] = useState(false);
  const toggleExpand = () => {
    setClientExpanded(!clientExpanded);
  };

  return (
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="card-content color-bg-v1">
          <p className="title-2">
            Dedicated Client Offshore Development centre (ODC)
          </p>
          <h2 className="title-2">What is an ODC</h2>
          <p>
            Client requires a dedicated R&D operational center at lower cost
            that is 100% focusing on his existsing and longterm ongoing Software
            development needs. The ODC will be a secured and privated working
            area only accessible for the client. WeGo4it will employ the needed
            resources, facilitate, manage and govern the ODC requirements for
            the client Software development products.
          </p>
          <button
            className="expand-button"
            onClick={toggleExpand}
            aria-label={
              clientExpanded ? "Collapse paragraph" : "Expand paragraph"
            }
          >
            <span className={`plus-icon ${clientExpanded ? "expanded" : ""}`}>
              {clientExpanded ? "−" : "+"}
            </span>
            <span>more details…</span>
          </button>
        </div>
        {clientExpanded && (
          <div className="color-bg-v2 card-content">
            <p className="title-2">
              <strong>
                Dedicated Client Offshore Development centre (ODC):
              </strong>
            </p>
            <div>
              <ul>
                <li>
                  We provide for the client a total secured environment for all
                  his required E2E software development
                </li>
                <li>
                  We facilitate and engage for mid- and long-term to employ his
                  neccesary IT work force for exclusive services.
                </li>
                <li>
                  The client will drive his roadmap, workload and plan longterm
                  with periodical revisions and replanning
                </li>
                <li>
                  There will be an SLA agreement for up- and down-scaling
                  resources.
                </li>
                <li>
                  The client can also have own staff working in this environment
                  on temporally- or permenant basis.
                </li>
                <li>
                  There will be a longterm agreement with the client for these
                  ODC services and will be based on the engaged workforce on a
                  T/M Daily Rate related to the functions and level of
                  resources. Included will be Office working space, office
                  facilities, HW &amp; SW, network connectivity and overhead of
                  the rendered Management Services of the ODC.
                </li>
                <li>
                  We will also guarantee the knowledge retention of the buildup
                  teams resources and work out a longterm continuous plan for
                  maintenance of the developed software.
                </li>
                <li>
                  Best practices model between client and Off-shore team will be
                  applied as working process.
                </li>
                <li>
                  Typicaly teams depending on the size and complexity of the
                  total needs would be:
                  <ul>
                    <li>
                      One dedicated ODC Manager - overall responsibility of all
                      IT resources and teams
                    </li>
                    <li>
                      1 BA / 4 DEV ( 2 FE / 2 BE) / 2 QA - team of 7 people
                    </li>
                    <li>
                      If the scope of the projects requires many dependant teams
                      we will add per 3 teams a PM
                    </li>
                  </ul>
                </li>
                <li>
                  Daily Stand-up video call meeting by client working close with
                  the offshore team.
                </li>
                <li>
                  Weekly Planning and Project status meeting, Demo&#39;s ....
                </li>
                <li>
                  The client will drive his requirements for new or change in
                  projects projects and communicated with us their needs and
                  requirements
                </li>
                <li>
                  There will be an agreed working process for engaging new IT
                  profiles:
                  <ul>
                    <li>Demanded and final approved by client</li>
                    <li>We will recrute and mange the whole HR cycle</li>
                    <li>
                      We will technically screen and evaluate the potential
                      candidates and facilitate interviews with client for final
                      approval by client.
                    </li>
                    <li>
                      After approval the people will be onboarded following the
                      workprocess of the client.
                    </li>
                    <li>
                      The client will be provide every month with the working
                      hours off all the teams and these working hours will be
                      approved by the responsible client persons and billed on a
                      monthly basis.
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
              src={index["odc"]}
              alt="Web Development"
              className="service-image"
            />
            <p className="image-caption">
              Dedicated Client Offshore Development centre
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffshoreDevelopmentCenter;
