import React from "react";

import { StarshipList } from "../../sw-components";
import { withRouter } from "react-router-dom";

/* class StarshipPage extends Component {
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
*/

const StarshipPage = ({ history }) => {
  return (
    <StarshipList onItemClick={(itemId)=> history.push(itemId)} />
  );
}

export default withRouter(StarshipPage);
