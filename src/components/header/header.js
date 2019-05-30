import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
      <button
        className="btn btn-primary btn-small change-service"
        onClick={onServiceChange}
      >
        Change Service
      </button>
    </div>
  );
};

export default Header;
