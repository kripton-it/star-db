import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import "./planet-page.css";
import SwapiService from "./../../services/swapi-service";

class PeoplePage extends Component {
  _swapi = new SwapiService();
  
  state = {
    selectedItemId: 3,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onItemClick = id => {
    this.setState({
      selectedItemId: id
    });
  };

  render() {
    const { selectedItemId, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemClick={this.onItemClick} getData={this._swapi.getAllPlanets}/>
        </div>
        <div className="col-md-6">
          <PersonDetails selectedItemId={selectedItemId} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
