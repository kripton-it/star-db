import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundary from "../error-boundary";
import Row from "../row";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";

class PeoplePage extends Component {
  _swapi = new SwapiService();

  state = {
    selectedPersonId: 3
  };

  onPersonClick = id => {
    this.setState({
      selectedPersonId: id
    });
  };

  render() {
    const { selectedPersonId } = this.state;

    const itemList = (
      <ErrorBoundary>
        <ItemList
          onPersonClick={this.onPersonClick}
          getData={this._swapi.getAllPeople}
        >
          {item => {
            return (
              <span>
                <button>!</button>
                {item.name}
              </span>
            );
          }}
        </ItemList>
      </ErrorBoundary>
    );

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails selectedPersonId={selectedPersonId} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}

export default PeoplePage;
