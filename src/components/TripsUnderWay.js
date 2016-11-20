import React, { Component } from 'react';
import { connect } from 'react-redux';
import Maps from './Maps';
import { Rating, Loader } from 'semantic-ui-react';
import CurrentTripsDisplay from './CurrentTripsDisplay';

@connect(state => ({
  currentTrip: state.user,
}))

export default class TripsUnderWay extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // this.state = {
    //   destination: 'Las Vegas, NV',
    //   waypoints: [{ location: 'San Francisco, CA' }, { location: 'Los Angeles, CA' }],
    // };
  }

  componentWillReceiveProps(nextProps) {
    // let { currentTrip } = nextProps;
    let userTripData = nextProps.currentTrip.saved[Object.keys(nextProps.currentTrip.saved)[0]];
    let waypoints = userTripData.waypoints;
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

    this.setState({
      destination: displayDestination,
      waypoints: displayWaypoints,
      userTripData,
    });


    // this.setState({
    //   destination: currentTrip.locEnd.formatted_address,
    //   waypoints: currentTrip.waypoints.map(point => {
    //     return (
    //       { location: point.formatted_address }
    //     ); // end of return statement
    //   }), // end of map
    // }); // end of setState
  } // end of function




  render() {
    let userTripData = this.state.userTripData || [];
    console.log('this.props.user:', userTripData);
    // console.log('waypointData:', waypointData);
    // let { currentTrip } = this.props;
    // currentTrip = currentTrip.saved[Object.keys(currentTrip.saved)[0]];
    // console.log ('DUMB: ', currentTrip[Object.keys(currentTrip)[0]]);

    // console.log('this.state:', this.state);
    return (
      <div className="underWayWrapper">
        <div className="createTripWrapper">
          {this.state.destination && this.state.waypoints ? <Maps google={window.google} {...this.state} /> :
            <div className="topHalfLoader">
              <Loader active size='huge' inline='centered' />
              <h4>Loading Map</h4>
            </div>}
        </div>
        <div>
          <CurrentTripsDisplay userdata={userTripData} />
        </div>
        
      </div>


    )
  }
}
