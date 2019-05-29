import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapiService from "../../hocs/with-swapi-service";

const PersonDetails = props => {
  return (
    <ItemDetails { ...props }>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getItem: swapiService.getPerson,
    getImage: swapiService.getPersonImage,
  };
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
