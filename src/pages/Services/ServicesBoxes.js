import { useNavigate } from "react-router-dom";
import index from "../../assets/images/index";

function ServicesBoxes() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="white-boxes-container">
        <div className="clickable-box" onClick={() => handleClick('/services/team-extension')}>
          <div className="white-box">
            <img
              src={index['teamExtensionBlue']}
              alt="Team extension Icon"
              className="white-box-icon"
            />
            <div className="white-box-text">
              <p>Software Development</p>
              <p>
                <b>Team extension</b>
              </p>
            </div>
          </div>
        </div>
        <div className="clickable-box" onClick={() => handleClick('/services/outsource')}>
          <div className="white-box">
            <img
              src={index['outsourcingBlue']}
              alt="Outsourcing Icon"
              className="white-box-icon"
            />
            <div className="white-box-text">
              <p>Software Development</p>
              <p>
                <b>Outsourcing</b>
              </p>
            </div>
          </div>
        </div>
        <div onClick={() => handleClick('/services/consultancy')}>
          <div className="white-box">
            <img
              src={index['consultancyBlue']}
              alt="Consultancy Icon"
              className="white-box-icon"
            />
            <div className="white-box-text">
              <p>Software Development</p>
              <p>
                <b>Consultancy</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesBoxes;
