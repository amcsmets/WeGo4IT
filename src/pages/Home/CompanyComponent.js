import index from "../../assets/images/index";

function CompanyComponent() {
  return (
    <div id="section1">
      <div className="title-container-1">
        <h2 className="title-1">Our Story</h2>
      </div>
      <div className="card-container-v1">
        <div className="card-column left-column">
          <div className="color-bg-v1 card-content">
            <p>
              WeGo4it - Founder and Owner finds his origins and roots based on a
              35+ years experience in delivering IT services and 25+ years
              experience of E2E Software Development Services facilitating from
              Vietnam.
            </p>
            <p>
              WeGo4it VN has been created based on a working Partnership between
              with Unifiedpost. On one hand based on the experience and knowhow
              of E2E Software Development Offshore Services since 1999 by Werner
              Goeminne working in Partnership with FPT Software for his European
              Clients . On the other hand based on customer experience with
              Unifiedpost since 2019 and AURIFY, who is the Unifiedpost DEVops,
              SECops and Cloud operational solutions partner. These alliances
              makes that WeGo4it offers an unique E2E Software Development and
              operational solution for multiple World Wide Clients needs.
            </p>
          </div>
        </div>
        <div className="card-column right-column">
          <div className="image-stack">
            <div className="service-image-container">
              <img
                src={index["offshoreDevelopment"]}
                alt="Web Development"
                className="service-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyComponent;
