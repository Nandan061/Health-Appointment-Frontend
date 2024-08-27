import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Medanta Medical Institute stands as a beacon of excellence in the healthcare sector,
          known for its unwavering commitment to quality care and patient-centered services.
          Founded with the vision of bringing the highest standards of medical expertise and
          advanced technology to India, Medanta has grown into a world-class institution that
          offers comprehensive healthcare solutions across a wide range of specialties.
          </p>
          <p>We are all in 2024!</p>
          
          <p>
          Medanta’s commitment to excellence extends beyond patient care to encompass the training
          of future medical professionals, fostering a culture of continuous learning and development.
          As a leader in the healthcare industry, Medanta is not just a place for healing but a trusted
          partner in your journey towards better health and well-being.
          </p>
          <p>
          Medanta is where cutting-edge medicine meets compassionate
          care, ensuring every patient's well-being is our highest priority.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
