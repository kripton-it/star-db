import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import Row from "../row";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";

class PeoplePage extends Component {
  _swapi = new SwapiService();

  state = {
    selectedPersonId: 3,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonClick = id => {
    this.setState({
      selectedPersonId: id
    });
  };

  renderItem = ({ name }) => {
    return (
      <span>
        <button>!</button>
        {name}
      </span>
    );
  };

  render() {
    const { selectedPersonId, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onPersonClick={this.onPersonClick}
        getData={this._swapi.getAllPeople}
        renderItem={this.renderItem}
      />
    );

    const details = <PersonDetails selectedPersonId={selectedPersonId} />;

    return (
      <>
        <Row left={itemList} right={details} />
        <Row left={'itemList'} right={'details'} />
      </>
    );
  }
}

export default PeoplePage;
