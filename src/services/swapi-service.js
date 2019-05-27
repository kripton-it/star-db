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

  async getAllPeople() {
    const res = await this._getResource(`people/`);
    return res.results;
  }

  getPerson(id) {
    return this._getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const res = await this._getResource(`planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this._getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const res = await this._getResource(`starships/`);
    return res.results;
  }

  getStarship(id) {
    return this._getResource(`starships/${id}`);
  }
}