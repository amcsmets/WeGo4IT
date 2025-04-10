import index from "../../assets/images/index";

function ManagementComponent() {
  return (
    <>
      <div id="section2" className="service-title-container">
        <h2 className="service-title color-primary-900">
          Introduction of Management People
        </h2>
      </div>
      <div className="service-container">
        <div className="service-column left-column">
          <h5>Werner GOEMINNE – Owner - CEO</h5>
          <div className="service-content">
            <ul>
              <li>
                Business Founder and Owner of several IT related Services
                Companies
              </li>
              <li>
                More than 35 years of experience in IT Services (HW -SW) and 25+
                years in facilitating E2E Offshore Software Development
                Services.
              </li>
              <li>
                Belgium Nationality - Flemish/ French/English/German fluent
              </li>
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
              <p className="image-caption">Owner - CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="service-column left-column">
          <h5>Albert SMETS – CTO</h5>
          <div className="service-content">
            <ul>
              <li>
                35+ years of experience in Software Development Services
                National and International.
              </li>
              <li>Dutch Nationality - Dutch/English fluent</li>
              <li>
                Leading as CTO multiple, dependent development teams ( up to 300
                people) located in different geographical locations in Europe
                and Asia for multiple business applications.
              </li>
              <li>
                has a master&#39;s degree MSc in Computer Science TUE - NL,  an
                MBA degree of TiasNimbas - NL, an MBA  degree of Krannert
                Business School - USA and completed the Leadership TGM on INSEAD
              </li>
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
              <p className="image-caption">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagementComponent;
