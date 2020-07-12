import React, { Component } from 'react';
import { bb } from 'billboard.js';
import 'billboard.js/dist/theme/graph.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
    if (this.props.chartData) {
      this.renderChart();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chartData && prevProps.chartData !== this.props.chartData) {
      this.renderChart();
    }
  }

  renderChart() {
    bb.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: this.props.chartData,
        types: {
          'Temperature': 'spline',
          'Feels Like': 'spline',
          'Humidity': 'area-spline'
        },
        colors: {
          'Temperature': '#DB1F6B',
          'Feels Like': '#FF7524',
          'Humidity': '#008765'
        },
        xFormat: '%d, %H %A'
      },
      point: {
        show: false
      },
      axis: {
        x: {
          tick: {
            fit: false,
            count: 5
          },
          type: 'timeseries'
        }
      }
    });
  }

  render() {
    return (<div id='chart' />);
  }
}

export default Chart;