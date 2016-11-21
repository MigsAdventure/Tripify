import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import InfoDrawer from './InfoDrawer';
import Maps from './Maps';


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
      // const location = waypoints[waypoints.length - 1].geometry.location;
      // displayDestination = `${location.lat},${location.lng}`;
      displayDestination = waypoints[waypoints.length - 1].formatted_address;
    } else {
      displayDestination = '';
    }

    if (waypoints.length > 1) {
      for (let i = 0; i < waypoints.length - 1; i++) {
        // const location = waypoints[i].geometry.location;
        displayWaypoints.push({
          // location: `${location.lat},${location.lng}`,
          location: waypoints[i].formatted_address,
        });
      }
    }

    // console.log('displayWaypoints: ', displayWaypoints);
    // console.log('displayDestination: ', displayDestination);
    // console.log('WAYPOINTS: ', waypoints);

    return (
      <div className="createTripWrapper">
        <Maps className="mapsComponent"
          google={window.google}
          destination={displayDestination}
          waypoints={displayWaypoints}
        />
        <InfoDrawer title={'Create A Trip'} />
      </div>
    );
  }
}

// ModifyTrip.propTypes = {
//   trips: React.PropTypes.shape({
//     trips: React.PropTypes.object,
//   }),
// };
