import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchSearch } from '../actions/ApiActions';

@connect(null, dispatch => ({
  fetchSearchResults(searchPackage) {
    dispatch(fetchSearch(searchPackage));
  },
}))

export default class SearchForm extends Component {

  submitForm = (e) => {
    e.preventDefault();
    const searchPackage = {
      trip: this.tripsInput.value,
      location: this.locationInput.value,
    };
    this.props.fetchSearchResults(searchPackage);
    browserHistory.push('/search-results');
  }

  render() {
    return (
      <form onSubmit={this.submitForm} >
        <input size="large" icon="search" type="text" placeholder="Search Trips..." ref={(input) => { this.tripsInput = input; }} />
        <input size="large" icon="search" type="text" placeholder="At Location..." ref={(input) => { this.locationInput = input; }} />
        <button className="btn btn-primary" >Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  fetchSearchResults: React.PropTypes.shape({
    trip: React.PropTypes.string,
    location: React.PropTypes.string,
  }),
};
