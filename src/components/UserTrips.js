import React, { Component } from 'react';
import uuid from 'uuid';
import { Grid, Image, Segment, Loader, Accordion, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import CurrentTrips from './CurrentTrips';
import SavedTrips from './SavedTrips';
import PreviousTrips from './PreviousTrips';
import * as WaypointActions from '../actions/WaypointActions';
import * as TripInfoActions from '../actions/TripInfoActions';

@connect(state => ({

  tripsData: state.user,

}), dispatch => ({
  setWaypoints(waypoints) {
    dispatch(WaypointActions.setWaypoints(waypoints));
  },
  setTripInfo(tripInfo) {
    dispatch(TripInfoActions.setTripInfo(tripInfo));
  },
}))

export default class UserTrips extends Component {
  constructor(props) {
    super(props);
  }

  modifyTrip = (type, id) => {
    this.loadTrip(type, id);
    browserHistory.push('/trip/create');
  }

  loadTrip = (type, id) => {
    const { setWaypoints, setTripInfo, tripsData } = this.props;
    const trips = tripsData[type];
    const trip = trips[id];

    setWaypoints(trip.waypoints);

    if (type === 'saved') {
      setTripInfo({
        description: trip.description,
        picture: trip.picture,
        tags: trip.tags,
        title: trip.title,
        id,
      });
    } else {
      setTripInfo({
        description: trip.description,
        picture: trip.picture,
        tags: trip.tags,
        title: trip.title,
        id: '',
      });
    }
  }

  startTrip = (type, id) => {
    this.loadTrip(type, id);
    browserHistory.push('/current-trip');
  }

  render() {
    let { currPage, tripsData } = this.props;
    console.log('this:', this);
    let loader = (<div className="topHalfLoader tripLoader">
      <Loader active size="huge" inline="centered" />
      <h4>Loading Trips</h4>
    </div>);

    const currTrips = tripsData[currPage.toLowerCase()];
    console.log('currTrips:', currTrips);
    return (
      <div className="mainUserTripsContainer">
        {currTrips ? null : loader}

        {currPage === 'Current' && <CurrentTrips currentTrips={tripsData.current} />}

        {currPage === 'Previous' && <PreviousTrips previousTrips={tripsData.previous} />}

        {currPage === 'Saved' && <SavedTrips startTrip={this.startTrip} modifyTrip={this.modifyTrip} savedTrips={tripsData.saved} />}

      </div>
    ); // end of return
  } // end of render
} // end of class
