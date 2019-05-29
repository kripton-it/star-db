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
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails } from "../sw-components/item-details";
import { SwapiServiceProvider } from "../swapi-service-context";

class App extends Component {
  _swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    itemId: 1,
  };

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  onItemClick = (id) => {
    this.setState({
      itemId: id,
    });
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { showRandomPlanet, hasError, itemId } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    const personList = <PersonList onItemClick={this.onItemClick}/>;
    const persondetails = <PersonDetails itemId={itemId}/>;

    const starshipList = <StarshipList onItemClick={this.onItemClick}/>;

    const personPage = <Row left={personList} right={persondetails} />

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this._swapi}>
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
  
            {personPage}
  
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
