import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "./../error-button/index";
import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "./../../services/swapi-service";
import Row from "../row";
import ItemDetails from "./../item-details/index";
import ErrorBoundary from "../error-boundary";

class App extends Component {
  _swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this._swapi;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImage={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImage={getStarshipImage}
      />
    );

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          {/* <Header />
        {randomPlanet}

        <div className="row mb2 button-row">
          <button
            className="btn btn-warning btn-lg toggle-planet"
            type="button"
            onClick={this.toggleRandomPlanet}
          >Toggle</button>
          <ErrorButton />
        </div>
  
        <PeoplePage />

        <PlanetPage /> */}
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
