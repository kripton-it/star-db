import React, { Component } from "react";

import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";
import SwapiService from "./../../services/swapi-service";

class RandomPlanet extends Component {
  static defaultProps = {
    interval: 10000,
  };
  
  _swapi = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    const { interval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoading: false,
      error: false,
    });
  }

  _onPlanetError = (error) => {
    this.setState({
      error: true,
      isLoading: false,
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1;
    this.setState({
      isLoading: true,
    });
    this._swapi.getPlanet(id).then(this._onPlanetLoaded).catch(this._onPlanetError);
  }

  render() {
    const { planet, isLoading, error } = this.state;

    const hasData = !isLoading && !error;

    const errorMessage = error ? <ErrorIndicator /> : null;

    const spinner = isLoading ? <Spinner /> : null;

    const planetView = hasData ? <PlanetView planet={planet}/> : null;
    
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {planetView}
      </div>
    );
  }
}

/*
RandomPlanet.defaultProps = {
  interval: 5000,
};*/

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
