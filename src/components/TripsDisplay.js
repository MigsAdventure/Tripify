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
            //div needs a unique id and an onclick for a different route
            return (
              <div>
                <img src={trip.icon} alt=""/>
                <h2>{trip.name}</h2>
              </div>
            );
          })
        }
      </div>
    );
  }
}
