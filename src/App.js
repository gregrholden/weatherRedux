import React, { Component } from 'react';
import './App.css';
import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import LocationSearch from './components/LocationSearch';
import LocalWeather from './components/LocalWeather';
import LocalForecast from './components/LocalForecast';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="container">
          <h1 className="title">Local Weather</h1>
          <LocationSearch />
          <LocalWeather />
          <LocalForecast />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);