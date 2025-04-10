import React, { useState } from "react";
import "./Management.css";
import AboutUsFooter from './AboutUsFooter';
import index from "../../assets/images/index";

const Management = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);

  const managers = [
    {
      name: "John Doe",
      position: "CEO",
      image: `${index['ceo1']}`,
      details:
        "John Doe is the CEO with over 20 years of experience in the industry.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: `${index['cto1']}`,
      details:
        "Jane Smith is the CTO with a strong background in technology and innovation.",
    },
  ];

  const handleShowModal = (manager) => {
    setSelectedManager(manager);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedManager(null);
  };

  const services = [
    {
      title: "Service 1",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Service 2",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Service 3",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

  return (
    <div className="">
      <div className="header-section">
        <h2>OUR SERVICES</h2>
        <p className="header-description">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <div className="instructor-info">
          {/* <img src={index['backgroundService']} alt="Miss Tan" className="instructor-avatar" /> */}
          {/* <div>
            <p>John Doe</p>
            <p className="instructor-title">CEO</p>
          </div> */}
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="board-member-title">Our managers</h3>
        <div className="board-member">
          {managers.map((manager, index) => (
            <div className="member-card">
              <div
                className="member-card-content"
                key={index}
                onClick={() => handleShowModal(manager)}
              >
                <div className="member-card-img">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="member-avatar"
                  />
                </div>
                <div className="member-card-info">
                  <h4>{manager.name}</h4>
                  <p className="member-role">{manager.position}</p>
                  <div className="contact-info">
                    <span className="icon">📞: 999999999999</span>
                    <span className="icon">📧: email@email</span>
                  </div>
                  <p className="contact-description">{manager.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedManager && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" style={{ maxWidth: "735px" }}>
              <div className="modal-content" style={{ height: "490px" }}>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedManager.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{selectedManager.details}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="services-section">
          <div className="ceo-info">
            <p className="ceo-title">CEO</p>
            <img src={index['ceo1']} alt="CEO" className="ceo-avatar" />
          </div>
          <div className="service-cards">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="services-section">
          <div className="ceo-info">
            <p className="ceo-title">CEO</p>
            <img src={index['cto1']} alt="CEO" className="ceo-avatar" />
          </div>
          <div className="service-cards">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutUsFooter/>
    </div>
  );
};

export default Management;
