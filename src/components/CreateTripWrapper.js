import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import Maps from './Maps';
import CreateTrip from './CreateTrip';

@connect(state => ({
  waypoints: state.waypoints,
}), null)

export default class CreateTripWrapper extends Component {
  render() {
    // console.log('this: ', this);
    const { waypoints } = this.props;

    let displayDestination;
    const displayWaypoints = [];

    if (waypoints.length) {
      const location = waypoints[waypoints.length - 1].geometry.location;
      displayDestination = `${location.lat},${location.lng}`;
    } else {
      displayDestination = '';
    }

    if (waypoints.length > 1) {
      for (let i = 0; i < waypoints.length - 1; i++) {
        const location = waypoints[i].geometry.location;
        displayWaypoints.push({
          location: `${location.lat},${location.lng}`,
        });
      }
    }

    // console.log('displayWaypoints: ', displayWaypoints);ß
    // console.log('displayDestination: ', displayDestination);

    return (
      <div className="createTripWrapper">
        <Maps className="mapsComponent"
          google={window.google}
          destination={displayDestination}
          waypoints={displayWaypoints}
        />
        <CreateTrip />
      </div>
    );
  }
}

// ModifyTrip.propTypes = {
//   trips: React.PropTypes.shape({
//     trips: React.PropTypes.object,
//   }),
// };
