import React from "react";

import Row from "../../row";
import { PersonDetails, PersonList } from "../../sw-components";
import { withRouter } from "react-router-dom";


const PeoplePage = ({ history, match }) => {
  return (
    <Row
      left={<PersonList onItemClick={(itemId)=> history.push(itemId)} />}
      right={<PersonDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PeoplePage);

/* class PeoplePage extends Component {
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
}*/
