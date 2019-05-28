import React, { Children } from "react";

import "./record.css";

const Record = props => {
  const { label, field, item } = props;
  
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default Record;
