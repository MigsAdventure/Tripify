import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default class TripsDisplay extends Component {
  constructor() {
    super();
  }

  render () {
    let { results } = this.props;
    console.log('results:', results);
    return (
      <div className='container-fluid'>
        {
          results.trips.map(trip => {
            return(
              <h2>{trip.location}</h2>
            )
          })
        }
      </div>
    );
  }
}
