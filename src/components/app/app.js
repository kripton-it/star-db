import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "./../error-button";
import ItemList from "../item-list";

import "./app.css";
import SwapiService from "./../../services/swapi-service";
import Row from "../row";
import Page from "../page";
import ItemDetails from "./../item-details";
import Record from "./../record";
import ErrorBoundary from "../error-boundary";

class App extends Component {
  _swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
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

    const {
      getAllPeople,
      getAllStarships,
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this._swapi;

    /*const personList = (
      <ItemList
        onItemClick={this.onItemClick}
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

    const starshipList = (
      <ItemList
        onItemClick={this.onItemClick}
        getData={this._swapi.getAllStarships}
      >
        {item => {
          return <span>{item.name}</span>;
        }}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={9} getData={getStarship} getImage={getStarshipImage}>
        <Record field="length" label="Length" />
        <Record field="model" label="Model" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );*/

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          {randomPlanet}

          <div className="row mb2 button-row">
            <button
              className="btn btn-warning btn-lg toggle-planet"
              type="button"
              onClick={this.toggleRandomPlanet}
            >
              Toggle
            </button>
            <ErrorButton />
          </div>

          <Page
            getData={getAllPeople}
            getImage={getPersonImage}
            getItem={getPerson}
            type="person"
          />

          <Page
            getData={getAllStarships}
            getImage={getStarshipImage}
            getItem={getStarship}
            type="starship"
          />

          {/* <Row left={personList} right={personDetails} />
          <Row left={starshipList} right={starshipDetails} /> */}

          {/*<PlanetPage />
           <Row left={personDetails} right={starshipDetails} /> */}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
