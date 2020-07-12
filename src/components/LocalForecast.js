import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class LocalForecast extends Component {
  constructor(props) {
    super(props);
    this.renderForecast = this.renderForecast.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  renderForecast(data) {
    // If the list item contains a date-time value, run the function:
    if (data.dt_txt) {
      const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let iconSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
      let time = new Date(data.dt_txt + ' UTC');
      let day = DAYS_OF_WEEK[time.getDay()];
      let localTime = time.toLocaleString('en-US').split(',');
      return (
        <tr key={data.dt}>
          <td>{ day }, { localTime[1] }</td>
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
  };

  getChartData(data) {
    let x = ['x'];
    let Temperature = ['Temperature'];
    let Feels_Like = ['Feels Like'];
    let Humidity = ['Humidity'];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        x.push(new Date(data[i].dt_txt + ' UTC'));
        Temperature.push(Math.round(data[i].main.temp));
        Feels_Like.push(Math.round(data[i].main.feels_like));
        Humidity.push(data[i].main.humidity);
      }
    }
    return [x, Temperature, Feels_Like, Humidity];
  };

  render() {
    if (this.props.forecastProps) {
      if (this.props.forecastProps.list) {
        return (
          <div>
            <Chart chartData={this.getChartData(this.props.forecastProps.list)} />
            <table>
              <thead>
                <tr>
                  <th>Time</th>
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
                { this.props.forecastProps.list.map(this.renderForecast) }
              </tbody>
            </table>
          </div>
        );
      }
      else {
        return (
          <div>No forecast data</div>
        );
      }
    }
    else {
      return (
        <div>No forecast data</div>
      );
    }
  }
};

const mapStateToProps = (state) => {
  return ({
    forecastProps: state.forecast.data
  });
};

export default connect(mapStateToProps, null)(LocalForecast);