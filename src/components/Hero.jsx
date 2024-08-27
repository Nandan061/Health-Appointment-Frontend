import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Medanta Medical Institute is a state-of-the-art facility
          dedicated to providing comprehensive healthcare services with compassion and expertise.
          Our team of highly skilled professionals is committed to delivering personalized care
          tailored to each patient’s unique needs. At Medanta, we prioritize your well-being,
          guiding you through a seamless journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
