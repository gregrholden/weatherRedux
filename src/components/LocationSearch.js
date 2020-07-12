import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocationData } from '../actions/actions';

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchLocationData(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Enter 5-Digit Zipcode'
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type='submit'>Search</button>
        <p>To specify country, enter 'Zipcode, Country Code'</p>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocationData }, dispatch);
}

export default connect(null, mapDispatchToProps)(LocationSearch);