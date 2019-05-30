import React from "react";
import PropTypes from 'prop-types';

import "./item-list.css";

const ItemList = props => {
  const { data, onItemClick, renderItem } = props;

  const items = data.map(item => {
    const { id } = item;
    const content = renderItem(item);

    return (
      <li className="list-group-item" key={id} onClick={() => onItemClick(id)}>
        {content}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemClick: () => {},
};

ItemList.propTypes = {
  onItemClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired
};

export default ItemList;