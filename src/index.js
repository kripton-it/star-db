/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/


// получение данных с сервера с помощью цепочки промисов
// fetch('https://swapi.co/api/people/1').then(response => response.json()).then(console.log);

// получение данных с сервера с помощью async/await функции
// async функция возвращает промис

/*const getResource = async (url) => {
  // если ошибка сетевая, то этот промис будет отклонен
  const res = await fetch(url);
  // если ошибка в ответе (например, код 404) - нужно обработать отдельно
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  const body = await res.json();
  return body;
}

getResource('https://swapi.co/api/people/123123').then(console.log).catch(console.error);*/

class SwapiService {
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

const swapi = new SwapiService();

swapi.getPerson(3).then(console.log);
swapi.getAllPeople().then(people => people.forEach(({name}) => console.log(name)));
