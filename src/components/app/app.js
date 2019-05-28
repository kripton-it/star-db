import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPersonId: null,
  }

  toggleRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => {
      return {
        showRandomPlanet: !showRandomPlanet,
      }
    });
  }

  onPersonClick = (id) => {
    this.setState({
      selectedPersonId: id,
    });
  }

  render() {
    const { showRandomPlanet, selectedPersonId } = this.state;
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {randomPlanet}
        <button
          className="btn btn-warning btn-lg toggle-planet"
          type="button"
          onClick={this.toggleRandomPlanet}
        >Toggle</button>
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonClick={this.onPersonClick} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPersonId={selectedPersonId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;