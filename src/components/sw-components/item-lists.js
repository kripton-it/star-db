import React from "react";
import ItemList from "../item-list";
import withData from "../../hocs/with-data";
import SwapiService from "./../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const renderPerson = person => (
  <span>
    <button>!</button>
    {person.name}
  </span>
);

const renderPlanet = planet => (
  <span>
    <button>!!</button>
    {planet.name}
  </span>
);

const renderStarship = starship => (
  <span>
    <button>!!!</button>
    {starship.name}
  </span>
);

const withRenderFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props} renderItem={fn} />;
  };
};

const PersonList = withData(
  withRenderFunction(ItemList, renderPerson),
  getAllPeople
);

const PlanetList = withData(
  withRenderFunction(ItemList, renderPlanet),
  getAllPlanets
);

const StarshipList = withData(
  withRenderFunction(ItemList, renderStarship),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
