import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapiService from "../../hocs/with-swapi-service";

const PersonDetails = ({ itemId, swapiService }) => {
  const {getPerson, getPersonImage} = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getItem={getPerson}
      getImage={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
