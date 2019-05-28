import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorBoundary from "../error-boundary";
import Row from "../row";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";

class PeoplePage extends Component {
  _swapi = new SwapiService();

  state = {
    selectedPersonId: 3,
  };

  onPersonClick = id => {
    this.setState({
      selectedPersonId: id
    });
  };

  render() {
    const { selectedPersonId } = this.state;

    const itemList = (
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
    );

    const details = (
      <ErrorBoundary>
        <PersonDetails selectedPersonId={selectedPersonId} />
      </ErrorBoundary>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={details} />
        <Row left={"itemList"} right={"details"} />
      </ErrorBoundary>
    );
  }
}

export default PeoplePage;
