import React, { Component } from "react";
import { SwapiServiceConsumer } from "../../components/swapi-service-context";

const withSwapiService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          return <Wrapped {...props} swapiService={swapiService}/>;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
