import { API_WEATHER_URL, API_FORECAST_URL } from '../config/config';
import fetch from 'cross-fetch';

export function fetchLocationData(location) {
  // Check if user entered a country code:
  let locationArr = location.split(',');
  // If so, remove any whitespace around values after split():
  let ZIP = (locationArr.length > 1) ?
    'zip=' + locationArr[0].trim() + ',' + locationArr[1].trim() :
    'zip=' + location;

  return dispatch => {
    dispatch(fetchWeather(ZIP));
    dispatch(fetchForecast(ZIP));
  }
}

/*****************************************
* REDUX FETCH FUNCTIONS FOR WEATHER DATA.
*/
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(zip, json) {
  return {
    type: RECEIVE_WEATHER,
    weather: json
  }
}
function fetchWeather(zip) {
  return (dispatch) => {
    dispatch(requestWeather());
    return fetch(`${API_WEATHER_URL}&units=imperial&${zip}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(zip, json)));
  }
}

/******************************************
* REDUX FETCH FUNCTIONS FOR FORECAST DATA.
*/
export const REQUEST_FORECAST = 'REQUEST_FORECAST';
function requestForecast() {
  return {
    type: REQUEST_FORECAST
  }
}
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
function receiveForecast(zip, json) {
  return {
    type: RECEIVE_FORECAST,
    forecast: json
  }
}
function fetchForecast(zip) {
  return (dispatch) => {
    dispatch(requestForecast());
    return fetch(`${API_FORECAST_URL}&units=imperial&${zip}`)
      .then(response => response.json())
      .then(json => dispatch(receiveForecast(zip, json)));
  }
}
