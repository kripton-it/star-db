import React from "react";
import ItemList from "../item-list";
import withData from "../../hocs/with-data";
import withSwapiService from "../../hocs/with-swapi-service";
import withRenderFunction from "../../hocs/with-render-function";

const renderStarship = starship => (
  <span>
    <button>!!!</button>
    {starship.name}
  </span>
);

const StarshipList = withData(withRenderFunction(ItemList, renderStarship));

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

export default withSwapiService(StarshipList, mapMethodsToProps);
