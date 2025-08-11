import index from "../../assets/images/index";

function ManagementComponent() {
  return (
    <>
      <div id="section2" className="title-container-1">
        <h2 className="title-1">Management</h2>
      </div>
      <div className="card-container-v1">
        <div className="card-column left-column">
          <div className="color-bg-v1 card-content">
            <h2 className="title-2">Werner GOEMINNE – Owner - CEO</h2>
            <ul>
              <li>
                More than 35 years of experience in IT Services (HW and SW) and 25+
                years in facilitating E2E Offshore Software Development
                Services.
              </li>
              <li>Belgium Nationality</li>
            </ul>
          </div>
        </div>
        <div className="card-column right-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["ceo1"]}
                alt="Web Development"
                className="service-image"
              />
              <p className="image-caption">Owner - CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container-v1">
        <div className="card-column left-column">
          <div className="color-bg-v1 card-content">
            <h2 className="title-2">Albert SMETS – CTO</h2>
            <ul>
              <li>
                More than 35 years of experience in Software Development
                Services National and International.
              </li>
              <li>Dutch Nationality</li>
              <li>
                Leading as CTO multiple, dependent development teams (up to 300
                people) located in different geographical locations in Europe
                and Asia for multiple business applications.
              </li>
              <li>
                Has a master&#39;s degree MSc in Computer Science of the Technical University of Eindhoven - NL, an
                MBA degree of TiasNimbas - NL, an MBA degree of Krannert
                Business School - USA and completed the Leadership TGM on INSEAD - FR.
              </li>
            </ul>
          </div>
        </div>
        <div className="card-column right-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["cto1"]}
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
