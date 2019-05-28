import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from './../error-button/index';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';

import './app.css';
import SwapiService from "./../../services/swapi-service";

class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  }

  _swapi = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {
        showRandomPlanet: !showRandomPlanet,
      }
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
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

        {/* <PlanetPage /> */}
      </div>
    );
  }
}

export default App;