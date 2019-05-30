import React, { Component } from "react";

import Row from "../../row";
import { PersonDetails, PersonList } from "../../sw-components";

class PeoplePage extends Component {
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
        left={<PersonList onItemClick={this.onItemClick} />}
        right={<PersonDetails itemId={itemId} />}
      />
    );
  }
}

export default PeoplePage;
