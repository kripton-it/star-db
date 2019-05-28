export default class SwapiService {
  _apiBase = 'https://swapi.co/api/';

  _getResource = async (url) => {
    const fullURL = `${this._apiBase}${url}`;
    const response = await fetch(fullURL);
    if (!response.ok) {
      throw new Error(`Could not fetch ${fullURL}, received ${response.status}`);
    }
    return await response.json();
  }

  _extractId = (url) => {
    const idRegEx = /\/([0-9]*)\/$/;
    return url.match(idRegEx)[1];
  }

  getAllPeople = async () => {
    const res = await this._getResource(`people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this._getResource(`people/${id}`);
    return this._transformPerson(person);
  }

  _transformPerson = ({
    name,
    gender,
    birth_year: birthYear,
    eye_color: eyeColor,
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

  getAllPlanets = async () => {
    const res = await this._getResource(`planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
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

  getAllStarships = async () => {
    const res = await this._getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
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