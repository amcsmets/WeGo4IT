import "./AboutUsFooter.css";
import index from "../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function AboutUsFooter() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="information-container">
          <div className="">
            <div className="logo logo-footer">
              <img src={index["WeGo4ITLogo"]} alt="WeGo4IT Logo" />
            </div>
          </div>
          <div className="address-footer">
            <h5>
              <FontAwesomeIcon icon={faHome} /> Address
            </h5>
            <p>28th Floor, Opal Tower</p>
            <p>92 Nguyen Huu Canh Street</p>
            <p>Binh Thanh District, Ho Chi Minh City</p>
            <p>Vietnam</p>
          </div>
          <a
            className="image-location-icon"
            href="https://maps.app.goo.gl/hGqErW2kH9YmW7ot6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={index["buildingLocation"]} alt="building location" />
            <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
          </a>
          <div className="email-footer">
            <h5>
              <a
                href="mailto:info@wego4itservices.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>{" "}
            </h5>
            <p>info@wego4itservices.com</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone number
            </p>
            <p>+840937347544</p>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/albert.smets.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/albert.smets/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="instagram-icon"
                  icon={faInstagram}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="col">
            <p className="wego4it-footer-text">&copy; 2024 WeGo4itServices</p>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AboutUsFooter;
