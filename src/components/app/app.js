import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "./../error-button";
// import ItemList from "../item-list";

import "./app.css";
import SwapiService from "./../../services/swapi-service";
import DummySwapiService from "./../../services/dummy-swapi-service";
import Row from "../row";
/*import Page from "../page";
import ItemDetails from "./../item-details";
import Record from "./../record";*/
import ErrorBoundary from "../error-boundary";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context";

class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
    itemId: 9,
    swapiService: new SwapiService()
  };

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  onItemClick = id => {
    this.setState({
      itemId: id
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      }
    });
  };

  render() {
    const { showRandomPlanet, hasError, itemId, swapiService } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    const personList = <PersonList onItemClick={this.onItemClick} />;
    const persondetails = <PersonDetails itemId={itemId} />;

    const starshipList = <StarshipList onItemClick={this.onItemClick} />;
    const starshipdetails = <StarshipDetails itemId={itemId} />;

    const planetList = <PlanetList onItemClick={this.onItemClick} />;
    const planetdetails = <PlanetDetails itemId={itemId} />;

    const personPage = <Row left={personList} right={persondetails} />;

    const planetPage = <Row left={planetList} right={planetdetails} />;

    const starshipPage = <Row left={starshipList} right={starshipdetails} />;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
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

            {personPage}
            {planetPage}
            {starshipPage}

            {/* <Page
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
            /> */}

            {/* <Row left={personList} right={personDetails} />
            <Row left={starshipList} right={starshipDetails} /> */}

            {/*<PlanetPage />
             <Row left={personDetails} right={starshipDetails} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
