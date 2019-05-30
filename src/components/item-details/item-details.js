import React, { Component, Children, cloneElement } from "react";

import "./item-details.css";
// import Spinner from "../spinner";

class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    // isLoading: false
  };

  componentDidMount() {
    this._updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId, getData, getImage } = this.props;
    if (
      itemId !== prevProps.itemId ||
      getData !== prevProps.getData ||
      getImage !== prevProps.getImage
    ) {
      this._updateItem();
    }
  }

  _updateItem() {
    const { itemId, getData, getImage } = this.props;

    if (!itemId) {
      return;
    }

    console.log(itemId);

    /*this.setState({
      isLoading: true
    });*/

    getData(itemId).then(item =>
      this.setState({
        item,
        image: getImage(item),
        // isLoading: false
      })
    );
  }

  render() {
    const { item, isLoading, image } = this.state;
    const { children } = this.props;

    if (!item) {
      return <span>Select an item from a list</span>;
    }

    // const spinner = isLoading ? <Spinner /> : null;

    const content = isLoading ? null : (
      <Content item={item} image={image}>
        {Children.map(children, child => {
          return cloneElement(child, { item });
        })}
      </Content>
    );

    return (
      <div className="card item-details">
        {/* {spinner} */}
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
      <img className="item-image" src={image} alt="item"/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {Children.map(children, child => {
            return child;
          })}
        </ul>
      </div>
    </>
  );
};
