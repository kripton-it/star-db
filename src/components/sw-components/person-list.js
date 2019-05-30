import React from "react";
import ItemList from "../item-list";
import compose from "../../hocs/compose";
import withData from "../../hocs/with-data";
import withSwapiService from "../../hocs/with-swapi-service";
import withRenderFunction from "../../hocs/with-render-function";

const renderItem = item => (
  <span>
    <button>!</button>
    {item.name}
  </span>
);

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const PersonList = compose(
  withSwapiService(mapMethodsToProps),
  withData,
  withRenderFunction(renderItem)
)(ItemList);

export default PersonList;
