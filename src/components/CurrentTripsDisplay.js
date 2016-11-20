import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { setWaypoints } from '../actions/WaypointActions';
import { Rating, Loader, Accordion, Button } from 'semantic-ui-react';

@connect(null, dispatch => ({
  setWaypoints(waypoints) {
    dispatch(setWaypoints(waypoints));
  },
}))


export default class CurrentTripsDisplay extends Component {
  constructor() {
    super();
  }

  removeWaypoint = (id) => {
    console.log('id:', id);
    let { userdata } = this.props;
    let waypoints = userdata.waypoints;
    console.log('USER WAYPOINTS:', waypoints);
    this.props.setWaypoints(waypoints.filter((waypoint) => waypoint.id !== id));
  }

  // directions = (endPoint) => {
  //   return (<a href=``></a>)
  // }

  render () {
    let { userdata } = this.props;


    return (
      <div className="currentWayPointsContainer">{

        userdata.length === undefined ?

        userdata.waypoints.map((point, i) =>
          {
            return (
              <div key={uuid()} className="currentWayPoint">
                <Accordion className="currentAccordion">
                  <Accordion.Title>
                    <h4>{point.name}</h4>
                    <p>{point.formatted_address}</p>
                    <Rating icon='star' size="huge" defaultRating={point.rating} maxRating={5} disabled/>
                  </Accordion.Title>
                  <Accordion.Content>
                    <a target="_blank" href={`https://maps.google.com/?saddr=My%20Location&daddr=${point.formatted_address}`} ><Button color="green" size="large" className="directionsBtn"
                      // onClick={() => this.directions(point.formatted_address)}
                                                                                                                               >
                      <Button.Content >Directions</Button.Content>

                    </Button></a>

                    {
                      i === 0 &&
                        <Button color="blue" size="large" className='checkInBtn' onClick={() => this.removeWaypoint(point.id)}>
                          <Button.Content>Check In</Button.Content>


                      </Button>
                    }

                    <Button color="red" size="large" className="removeBtn">
                      <Button.Content onClick={() => this.removeWaypoint(point.id)}>Remove</Button.Content>


                    </Button>


                  </Accordion.Content>
                </Accordion>
              </div>
            )
          }) :
          <div className="bottomHalfLoader">
            <Loader active size='huge' inline='centered' />
            <h4>Loading Waypoints</h4>
          </div>

        }
      </div>
    )
  }
}
