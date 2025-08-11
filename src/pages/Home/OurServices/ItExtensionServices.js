import index from "../../../assets/images/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ServiceComponent.css";

function ItExtensionServices() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [extensionExpanded, setExtensionExpanded] = useState(false);
  const toggleExpandExtension = () => {
    setExtensionExpanded(!extensionExpanded);
  };

  return (
    <div className="card-container-v1">
      <div className="card-column left-column">
        <div className="color-bg-v1 card-content">
          <h2 className="title-2">IT EXTENSION - Services</h2>
          <p>
            Team extension means augmenting your team with Offshore developers
            to provide stability, efficiency, fill glaring skill gaps and
            missing manpower to deliver Software products.
          </p>
          <p>
            WeGo4it can build up an extension of these teams with Offshore IT
            resources that will be fully integrated with the Client existing
            team. The offshore team will be working under the leadership of the
            clients Business Owner/PM/... and join the daily stand-up meetings,
            tasks, deliveries and execute from the remote Offshore location.
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
            <span>more details…</span>
          </button>
        </div>
        {extensionExpanded && (
          <div className="color-bg-v2 card-content">
            <p className="title-1">
              WeGo<span className="color-red">4</span>it Provides
            </p>
            <div>
              <ul>
                <li>
                  Skilled and Experienced IT experts (PM, Solution &amp; Design
                  Architects, Business Analists, DEV (Front/Back/fullstack), 
                  Quality Assurance - English speaking)
                </li>
                <li>
                  Off-shore IT team is an extension of the client team and is
                  steared by client on daily basis
                </li>
                <li>
                  Best practices model between client and Off-shore team will be
                  applied as working process
                </li>
                <li>
                  A longterm planning (1 year roadmap) will be established and
                  the workload will be assed and agreed by WeGo4it and client
                </li>
                <li>
                  An assesement will be made by WeGo4it of the total workload
                  and resources needed with detailed overall sprint planning.
                </li>
                <li>
                  Based on this we will propose a monthly T&amp;M budget of the
                  planned resources for monthly billing
                </li>
                <li>
                  A quaterly or 6 month review of the roadmap and workscope will
                  be applied to adjust resources
                </li>
                <li>
                  A Service Level agreement will be in place defining the up-
                  and down scaling of resources.
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
  );
}

export default ItExtensionServices;
