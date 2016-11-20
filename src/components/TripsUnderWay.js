import React, { Component } from 'react';
import { connect } from 'react-redux';
import Maps from './Maps';
import { Rating, Loader, Icon } from 'semantic-ui-react';
// import CurrentTripsDisplay from './CurrentTripsDisplay';
import InfoDrawer from './InfoDrawer';

@connect(state => ({
  currentTrip: state.user,
}))

export default class TripsUnderWay extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
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
      toggle: false,
    });

  }

  render() {
    let userTripData = this.state.userTripData || [];
    console.log('this.props.user:', userTripData);

    return (
      <div className="underWayWrapper">
        <div className="createTripWrapper">
          {this.state.destination && this.state.waypoints ? <Maps google={window.google} {...this.state} /> :
            <div className="topHalfLoader">
            <Loader active size='huge' inline='centered' />
            <h4>Loading Map</h4>
          </div>}
        </div>
        <InfoDrawer  userdata={userTripData} title={'WayPoints'}/>
      </div>


    )
  }
}
