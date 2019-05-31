import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapiService from "../../hocs/with-swapi-service";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
