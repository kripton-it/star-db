import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

import ErrorBoundary from "../error-boundary";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import SecretPage from "../pages/secret-page";
import LoginPage from "../pages/login-page";

import SwapiService from "./../../services/swapi-service";
import DummySwapiService from "./../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { StarshipDetails } from "../sw-components";

class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const { swapiService, isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => (
                  <StarshipDetails itemId={match.params.id} />
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}
                  />
                )}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
