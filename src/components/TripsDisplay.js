import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Rating } from 'semantic-ui-react';
import uuid from 'uuid';

export default class TripsDisplay extends Component {
  constructor() {
    super();
  }

  render () {
    let { results } = this.props;
    console.log('results:', results)
    return (
      <div className='container-fluid tripsDisplayContainer'>
        {
          results.data.map(trip => {

            return (
              // image needs another call from the backend
                <div key={uuid()} className='col-xs-6 col-sm-4 col-md-3 col-lg-2' >
                  {trip.photos && <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${trip.photos[0].photo_reference}&key=AIzaSyCaWpX2l-1xUmYGXzWPTyYONs08LiwHLao` || ''} /> }

                  <Rating icon='star' size="huge" defaultRating={trip.rating} maxRating={5} disabled />
                  <h4>{trip.name}</h4>
                </div>
            );
          })
        }
      </div>
    );
  }
}
