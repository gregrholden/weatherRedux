import { REQUEST_WEATHER, RECEIVE_WEATHER, REQUEST_FORECAST, RECEIVE_FORECAST } from '../actions/actions';

var defaultState = {
  weather: {
    isFetching: false,
    data: null
  },
  forecast: {
    isFetching: false,
    data: null
  }
}

export default function mainReducer(state = defaultState, action) {
  switch(action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        weather: {
          isFetching: true
        }
      });

    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        weather: {
          isFetching: false,
          data: action.weather
        }
      });

    case REQUEST_FORECAST:
      return Object.assign({}, state, {
        forecast: {
          isFetching: true
        }
      });

    case RECEIVE_FORECAST:
      return Object.assign({}, state, {
        forecast: {
          isFetching: false,
          data: action.forecast
        }
      });

    default:
      return state;
  }
}