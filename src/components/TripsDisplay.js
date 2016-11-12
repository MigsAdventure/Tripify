import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default class TripsDisplay extends Component {
  constructor() {
    super();
  }

  render () {
    let { results } = this.props;
    return (
      <div className='container-fluid'>
        {
          results.trips.map(trip => {
            //div needs a unique id and an onclick for a different route
            return(
              <div>
                <img src={trip.image} alt=""/>
                <h2>{trip.location}</h2>
              </div>
            )
          })
        }
      </div>
    );
  }
}
