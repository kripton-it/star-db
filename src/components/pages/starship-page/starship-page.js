import React, { Component } from "react";

import Row from "../../row";
import { StarshipDetails, StarshipList } from "../../sw-components";

class StarshipPage extends Component {
  state = {
    itemId: null,
  };

  onItemClick = id => {
    const { itemId } = this.state;
    if (id !== itemId) {
      this.setState({
        itemId: id
      });
    }
  };

  render() {
    const { itemId } = this.state;
    return (
      <Row
        left={<StarshipList onItemClick={this.onItemClick} />}
        right={<StarshipDetails itemId={itemId} />}
      />
    );
  }
}

export default StarshipPage;
