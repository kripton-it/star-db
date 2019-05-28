import React, { Component } from 'react';

import './item-list.css';
import SwapiService from './../../services/swapi-service';
import Spinner from '../spinner';

class ItemList extends Component {
  _swapi = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this._swapi.getAllPeople().then(peopleList => this.setState({
      peopleList,
    })).catch(console.error); // необходимо обработать ошибку
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
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this._renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export default ItemList;