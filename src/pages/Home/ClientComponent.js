import index from "../../assets/images/index";
import React, { useState } from "react";
import "./styles/ServiceComponent.css";

function ClientComponent() {
  const [clientExpanded, setClientExpanded] = useState(false);
  const toggleExpand = () => {
    setClientExpanded(!clientExpanded);
  };

  return (
    <div id="section4">
      <div className="service-title-container">
        <h2 className="service-title color-primary-900">
          CLIENT OFFSHORE DEVELOPMENT
        </h2>
      </div>
      <div className="service-container">
        <div className="service-content">
          <h4>What is an ODC</h4>
          <p
            className={`service-paragraph ${clientExpanded ? "expanded" : ""}`}
          >
            What is team extension Augmenting your team with Offshore developers
            to provide stability, efficiency, fill glaring skill gaps and
            missing manpower to deliver Software products.
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
          </button>
          {clientExpanded && (
            <>
              <p className="pt-3">
                <strong>
                  Dedicated Client Offshore Development centre (ODC):
                </strong>
              </p>
              <div>
                <ul>
                  <li>
                    We provide for the client a total secured environment for
                    all his required E2E software development
                  </li>
                  <li>
                    We facilitate and engage for mid- and long-term to employ
                    his neccesary IT work force for exclusive services.
                  </li>
                  <li>
                    The client will drive his roadmap, workload and plan
                    longterm with periodical revisions and replanning
                  </li>
                  <li>
                    There will be an SLA agreement for up- and down-scaling
                    resources.
                  </li>
                  <li>
                    The client can also have own staff working in this
                    environment on temporally- or permenant basis.
                  </li>
                  <li>
                    There will be a longterm agreement with the client for these
                    ODC services and will be based on the engaged workforce on a
                    T/M Daily Rate related to the functions and level of
                    resources. Included will be Office working space, office
                    facilities, HW &amp; SW, network connectivity and overhead
                    of the rendered Management Services of the ODC.
                  </li>
                  <li>
                    We will also guarantee the knowledge retention of the
                    buildup teams resources and work out a longterm continuous
                    plan for maintenance of the developed software.
                  </li>
                  <li>
                    Best practices model between client and Off-shore team will
                    be applied as working process.
                  </li>
                  <li>
                    Typicaly teams depending on the size and complexity of the
                    total needs would be:
                    <ul>
                      <li>
                        One dedicated ODC Manager - overall responsibility of
                        all IT resources and teams
                      </li>
                      <li>
                        1 BA  / 4 DEV ( 2 F-E / 2 B-E) / 2 QA - team of 7 people
                      </li>
                      <li>
                        If the scope of the projects requires many dependant
                        teams we will add per 3 teams a PM
                      </li>
                    </ul>
                  </li>
                  <li>
                    Daily Stand-up video call meeting by client working close
                    with the offshore team.
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
                        we will technically screen and evaluate the potential
                        candidates and facilitate interviews with client for
                        final approval by client.
                      </li>
                      <li>
                        After approval the people will be onboarded following
                        the workprocess of the client.
                      </li>
                      <li>
                        the client will be provide every month with the working
                        hours off all the teams and these working hours will be
                        approved by the responsible client persons and billed on
                        a monthly basis.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientComponent;
