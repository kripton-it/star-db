import React, { Component } from "react";

import Row from "../../row";
import { PlanetDetails, PlanetList } from "../../sw-components";

class PlanetPage extends Component {
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
        left={<PlanetList onItemClick={this.onItemClick} />}
        right={<PlanetDetails itemId={itemId} />}
      />
    );
  }
}

export default PlanetPage;
