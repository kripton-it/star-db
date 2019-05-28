import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "./../../services/swapi-service";
import Spinner from "../spinner";

class PersonDetails extends Component {
  _swapi = new SwapiService();

  state = {
    person: null,
    isLoading: false
  };

  componentDidMount() {
    this._updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
      this._updatePerson();
    }
  }

  _updatePerson() {
    const { selectedPersonId } = this.props;

    if (!selectedPersonId) {
      return;
    }

    this.setState({
      isLoading: true
    });

    this._swapi.getPerson(selectedPersonId).then(person =>
      this.setState({
        person,
        isLoading: false
      })
    );
  }

  render() {
    const { person, isLoading } = this.state;

    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const spinner = isLoading ? <Spinner /> : null;

    const content = isLoading ? null : <Content person={person} />

    return (
      <div className="card person-details">
        {spinner}
        {content}
      </div>
    );
  }
}

export default PersonDetails;

const Content = props => {
  const { id, name, gender, birthYear, eyeColor } = props.person;

  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
