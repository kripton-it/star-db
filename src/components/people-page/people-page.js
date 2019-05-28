import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import "./people-page.css";
import SwapiService from "./../../services/swapi-service";

class PeoplePage extends Component {
  _swapi = new SwapiService();

  state = {
    selectedPersonId: 3,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onPersonClick = id => {
    this.setState({
      selectedPersonId: id
    });
  };

  render() {
    const { selectedPersonId, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onPersonClick={this.onPersonClick} getData={this._swapi.getAllPeople}/>
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPersonId={selectedPersonId} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
