import React from "react";
import ItemList from "../item-list";
import withData from "../../hocs/with-data";
import withSwapiService from "../../hocs/with-swapi-service";
import withRenderFunction from "../../hocs/with-render-function";

const renderPerson = person => (
  <span>
    <button>!</button>
    {person.name}
  </span>
);

const PersonList = withData(withRenderFunction(ItemList, renderPerson));

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

export default withSwapiService(PersonList, mapMethodsToProps);
