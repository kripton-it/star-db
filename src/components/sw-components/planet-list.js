import React from "react";
import ItemList from "../item-list";
import withData from "../../hocs/with-data";
import withSwapiService from "../../hocs/with-swapi-service";
import withRenderFunction from "../../hocs/with-render-function";

const renderPlanet = planet => (
  <span>
    <button>!!</button>
    {planet.name}
  </span>
);

const PlanetList = withData(withRenderFunction(ItemList, renderPlanet));

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

export default withSwapiService(PlanetList, mapMethodsToProps);
