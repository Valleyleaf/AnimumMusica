import React from "react";
import PropTypes from 'prop-types';
import './css/navbar.css';
import {
  handleMoodClick,
  handleGenreClick,
  handleWeatherClick,
  handleHistoryClick,
} from './scripts/navbar'

const Navbar = () => {

  return (
    <div className="navbar">
      <button onClick={handleMoodClick}>Mood</button>
      <button onClick={handleGenreClick}>Genre</button>
      <button onClick={handleWeatherClick}>Weather</button>
      <button onClick={handleHistoryClick}>History</button>
    </div>
  );
};
//Button onClick leads to scripts/navbar.js

Navbar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Navbar;
