import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));


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

