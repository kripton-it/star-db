import React, { Component } from "react";

import Spinner from './../spinner';

import "./random-planet.css";
import SwapiService from "./../../services/swapi-service";

class RandomPlanet extends Component {
  _swapi = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, isLoading: false});
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 1;
    this._swapi.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { planet, isLoading } = this.state;

    const spinner = isLoading ? <Spinner /> : null;

    const planetView = !isLoading ? <PlanetView planet={planet}/> : null;
    
    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {planetView}
      </div>
    );
  }
}

export default RandomPlanet;

const PlanetView = ({planet}) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="random planet"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </>
  );
}
