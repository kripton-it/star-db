import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>Star DB</h3>
      <ul className="d-flex">
        <li>
          <a href="/people">People</a>
        </li>
        <li>
          <a href="/planets">Planets</a>
        </li>
        <li>
          <a href="/starships">Starships</a>
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
