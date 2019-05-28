export default class SwapiService {
  _apiBase = 'https://swapi.co/api/';

  async _getResource(url) {
    const fullURL = `${this._apiBase}${url}`;
    const response = await fetch(fullURL);
    if (!response.ok) {
      throw new Error(`Could not fetch ${fullURL}, received ${response.status}`);
    }
    return await response.json();
  }

  _extractId(url) {
    const idRegEx = /\/([0-9]*)\/$/;
    return url.match(idRegEx)[1];
  }

  async getAllPeople() {
    const res = await this._getResource(`people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this._getResource(`people/${id}`);
    return this._transformPerson(person);
  }

  _transformPerson = ({
    name,
    gender,
    birthYear,
    eyeColor,
    url,
  }) => {
    return {
      id: this._extractId(url),
      name,
      gender,
      birthYear,
      eyeColor,
    }
  }

  async getAllPlanets() {
    const res = await this._getResource(`planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this._getResource(`planets/${id}`);
    return this._transformPlanet(planet);
  }

  _transformPlanet = ({
    name,
    population,
    diameter,
    rotation_period: rotationPeriod,
    url,
  }) => {
    return {
      id: this._extractId(url),
      name,
      population,
      diameter,
      rotationPeriod,
    }
  }

  async getAllStarships() {
    const res = await this._getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this._getResource(`starships/${id}`);
    return this._transformStarship(starship);
  }

  _transformStarship = ({
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
    url,
  }) => {
    return {
      id: this._extractId(url),
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    }
  }
}