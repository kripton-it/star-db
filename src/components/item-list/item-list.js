import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

class ItemList extends Component {
  state = {
    list: null,
  };

  componentDidMount() {

    const { getData } = this.props;

    getData().then(list => this.setState({ list })).catch(console.error);
  }

  onPersonClick(id) {
    this.props.onPersonClick(id);
  }

  _renderItems(arr) {
    return arr.map(({name, id}) => (
      <li
        className="list-group-item"
        key={id}
        onClick={() => this.onPersonClick(id)}
      >
        {name}
      </li>
    ));
  }

  render() {
    const { list } = this.state;

    if (!list) {
      return <Spinner />;
    }

    const items = this._renderItems(list);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export default ItemList;