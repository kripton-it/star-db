import React, { Component, Children, cloneElement } from "react";

import "./item-details.css";
import Spinner from "../spinner";

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
      this._updateItem();
    }
  }

  _updateItem() {
    const { itemId, getItem, getImage } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({
      isLoading: true
    });

    getItem(itemId).then(item =>
      this.setState({
        item,
        image: getImage(item),
        isLoading: false
      })
    );
  }

  render() {
    const { item, isLoading, image } = this.state;
    const { children } = this.props;

    if (!item) {
      return <span>Select an item from a list</span>;
    }

    const spinner = isLoading ? <Spinner /> : null;

    const content = isLoading ? null : (
      <Content item={item} image={image}>
        {Children.map(children, child => {
          return cloneElement(child, { item });
        })}
      </Content>
    );

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
  const { item, image, children } = props;
  const { name } = item;

  return (
    <>
      <img className="item-image" src={image} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {Children.map(children, child => {
            // console.log(child);
            return child;
          })}
        </ul>
        {/* <ErrorButton /> */}
      </div>
    </>
  );
};
