import React, { Component } from 'react';
import uuid from 'uuid';
import { Grid, Image, Segment, Loader, Accordion, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import CurrentTrips from './CurrentTrips';
import SavedTrips from './SavedTrips';
import PreviousTrips from './PreviousTrips';

@connect(state => ({

  tripsData: state.user,

}))

export default class UserTrips extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }


  render () {
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

        {currPage === 'Saved' && <SavedTrips savedTrips={tripsData.saved} />}

      </div>
    ); // end of return
  } // end of render
} // end of class
