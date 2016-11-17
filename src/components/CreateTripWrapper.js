import React, { Component } from 'react';
import { connect } from 'react-redux';

import Maps from './Maps';

@connect(state => ({
  waypoints: state.waypoints,
}), null)

export default class CreateTripWrapper extends Component {
  render() {
    console.log('this: ', this);
    const { waypoints } = this.props;

    let displayDestination;
    const displayWaypoints = [];

    if (waypoints.length) {
      displayDestination = waypoints[waypoints.length - 1].formatted_address;
    } else {
      displayDestination = '';
    }

    if (waypoints.length > 1) {
      for (let i = 0; i < waypoints.length - 1; i++) {
        displayWaypoints.push({ location: waypoints[i].formatted_address });
      }
    }

    console.log('displayWaypoints: ', displayWaypoints);
    console.log('displayDestination: ', displayDestination);

    return (
      <div>
        <Maps
          google={window.google}
          destination={displayDestination}
          waypoints={displayWaypoints}
        />


      </div>
    );
  }
}

// ModifyTrip.propTypes = {
//   trips: React.PropTypes.shape({
//     trips: React.PropTypes.object,
//   }),
// };
