import React from "react";

import "./item-list.css";
import withData from "./../../hocs/with-data";
import SwapiService from "./../../services/swapi-service";

const ItemList = props => {
  const { data, getData, onItemClick, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const content = renderLabel(item);

    return (
      <li className="list-group-item" key={id} onClick={() => onItemClick(id)}>
        {content}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
