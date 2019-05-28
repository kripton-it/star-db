import React, { Component } from "react";

import "./item-details.css";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    isLoading: false
  };

  componentDidMount() {
    this._updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this._updatePerson();
    }
  }

  _updateItem() {
    const { itemId, getData, getImage } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({
      isLoading: true
    });

    getData(itemId).then(item =>
      this.setState({
        item,
        image: getImage(item),
        isLoading: false
      })
    );
  }

  render() {
    const { item, isLoading, image } = this.state;

    if (!item) {
      return <span>Select an item from a list</span>;
    }

    const spinner = isLoading ? <Spinner /> : null;

    const content = isLoading ? null : <Content item={item} image={image}/>

    return (
      <div className="card item-details">
        {spinner}
        {content}
      </div>
    );
  }
}

export default ItemDetails;

const Content = props => {
  const { name, gender, birthYear, eyeColor } = props.item;
  const { image } = props;

  return (
    <>
      <img
        className="item-image"
        src={image}
        alt="person"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};
