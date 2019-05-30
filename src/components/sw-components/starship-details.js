import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapiService from "../../hocs/with-swapi-service";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="length" label="Length" />
      <Record field="model" label="Model" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getItem: swapiService.getStarship,
    getImage: swapiService.getStarshipImage
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
