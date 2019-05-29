import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import Record from "./../record";

import "./page.css";
import SwapiService from "../../services/swapi-service";

class Page extends Component {
  _swapi = new SwapiService();

  state = {
    itemId: 3
  };

  onItemClick = id => {
    this.setState({
      itemId: id
    });
  };

  renderPerson(item) {
    return (
      <span>
        <button>!</button>
        {item.name}
      </span>
    );
  }

  renderStarship(item) {
    return (
      <span>
        <button>!!!</button>
        {item.name}
      </span>
    );
  }

  renderPlanet(item) {
    return (
      <span>
        <button>!!</button>
        {item.name}
      </span>
    );
  }

  render() {
    const { itemId } = this.state;
    const { getData, getImage, getItem, type } = this.props;
    const types = [
      {
        type: "person",
        field: "gender",
        label: "Gender"
      },
      {
        type: "person",
        field: "birthYear",
        label: "Birth"
      },
      {
        type: "starship",
        field: "model",
        label: "Model"
      },
      {
        type: "planet",
        field: "name",
        label: "Name"
      }
    ];

    const itemList = (
      <ErrorBoundary>
        <ItemList onItemClick={this.onItemClick} getData={getData}>
          {item => {
            switch (type) {
              case "person":
                return this.renderPerson(item);
              case "starship":
                return this.renderStarship(item);
              case "planet":
                return this.renderPlanet(item);
              default:
                return null;
            }
          }}
        </ItemList>
      </ErrorBoundary>
    );

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={itemId} getItem={getItem} getImage={getImage}>
          {types
            .filter(item => item.type === type)
            .map((item, index) => {
              return <Record key={index} field={item["field"]} label={item["label"]} />;
            })}
        </ItemDetails>
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}

export default Page;
