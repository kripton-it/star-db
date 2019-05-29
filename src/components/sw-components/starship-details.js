import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImage }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getItem={getStarship}
            getImage={getStarshipImage}
          >
            <Record field="length" label="Length" />
            <Record field="model" label="Model" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
