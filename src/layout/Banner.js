import React from "react";
import './Banner.css';
import images from '../assets/images';
// Importing images from the assets directory

function Banner({ handleScrollTo }) {
  console.log("Banner received handleScrollTo:", handleScrollTo);
  return (
    <div className="background-image">
      <div className="text-over-image">
        <p>Want to develop software successfully</p>
        <p className="small-text">
          with high quality, efficiently, and for low cost?
        </p>
        <div>
          <button
            onClick={() => handleScrollTo("section3")}
             className="explore-our-solutions-button"
          >
            Explore our solutions
          </button>
          <img
            src={images.partnerwithus}
            alt="Partner with Us"
            style={{ marginTop: '1rem', width: '180px' }}
            onClick={() => handleScrollTo("section6")}
          />  
        </div>
      </div>
    </div>
  );
}

export default Banner;
