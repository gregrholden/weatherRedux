import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocalWeather extends Component {
  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(data) {
    // If the zip entered returns a city name value, run the function:
    if (data.name) {
      let iconSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
      return (
        <tr>
          <td>{ data.name }, { data.sys.country }</td>
          <td><img src={iconSrc}
                   aria-label={data.weather[0].main}
                   title={data.weather[0].main} />
          </td>
          <td>{ Math.round(data.main.temp) } °F</td>
          <td>{ Math.round(data.main.feels_like) } °F</td>
          <td>{ data.main.humidity }%</td>
          <td>{ Math.round(data.wind.speed) } mph <i className={'wi wi-wind from-' + data.wind.deg + '-deg'} /></td>
          <td>{ data.clouds.all }%</td>
          <td>{ data.rain ? data.rain['3h'] : 0 } mm</td>
        </tr>
      );
    }
    else {
      return;
    }
  }

  render() {
    if (this.props.weatherProps) {
      return (
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Weather</th>
              <th>Temperature</th>
              <th>Feels Like</th>
              <th>Humidity</th>
              <th>Wind Speed / Direction</th>
              <th>Cloud Cover</th>
              <th>Precip.</th>
            </tr>
          </thead>
          <tbody>
            { this.renderWeather(this.props.weatherProps) }
          </tbody>
        </table>
      );
    }
    else {
      return (<div>No data</div>);
    }
  }
};

const mapStateToProps = (state) => {
  return ({
    weatherProps: state.weather.data
  });
};

export default connect(mapStateToProps, null)(LocalWeather);