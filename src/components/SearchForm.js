import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { trip, location} = this.refs;
    let searchPackage = {
      trip: trip.value,
      location: location.value,
    }
  }

  render (){
    return (
      <form onSubmit={this.submitForm} >
        <input type="text" placeholder='Search Trips...' ref='trip' />
        <input type="text" placeholder='At Location...' ref='location' />
        <button className='btn btn-primary'>Search</button>
      </form>
    );
  }
}
