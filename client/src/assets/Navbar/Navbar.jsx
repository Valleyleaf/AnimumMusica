import React from "react";
import PropTypes from 'prop-types';
import image from "../../assets/react.svg";
import './css/navbar.css';

const Navbar = () => {
  const handleButtonClick = (buttonName) => {
    console.log(buttonName);
  };

  return (
    <div className="navbar">
      <button onClick={() => handleButtonClick('Mood')}>Mood</button>
      <button onClick={() => handleButtonClick('Genre')}>Genre</button>
      <button onClick={() => handleButtonClick('Weather')}>Weather</button>
      <button onClick={() => handleButtonClick('History')}>History</button>
    </div>
  );
};

Navbar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Navbar;
