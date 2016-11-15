import React, { Component } from 'react';
// import { connect } from 'react-redux';
import UserTrips from './UserTrips';


// dummy object will be replaced by users object which will include the users
// saved trips, current trips, and previous trips

export default class MyTripsPage extends Component {
  constructor() {
    super();
    this.state = {
      currMenu: 'Current',
    };
  }

  selectNav = (e) => {
    this.setState({
      currMenu: e.target.innerHTML,
    });
  }

  render() {
    const dummy = {
      data: [
        {
          name: 'Golden Gate Bridge',
          description: "I've been to San Francisco many times, but I never walked along the Golden Gate Bridge! I know it sucks!"
        },
        {
          name: 'Golden Gate Bridge',
          description: "I've been to San Francisco many times, but I never walked along the Golden Gate Bridge! I know it sucks!"
        },
        {
          name: 'Golden Gate Bridge',
          description: "I've been to San Francisco many times, but I never walked along the Golden Gate Bridge! I know it sucks!"
        },
        {
          name: 'Golden Gate Bridge',
          description: "I've been to San Francisco many times, but I never walked along the Golden Gate Bridge! I know it sucks!"
        },
        {
          name: 'Golden Gate Bridge',
          description: "I've been to San Francisco many times, but I never walked along the Golden Gate Bridge! I know it sucks!"
        },
      ],
    };

    const { currMenu } = this.state;
    return (
      <div className="container-fluid myTripsMainContainer">
        <div>
          <label>{currMenu} Trips</label>
        </div>
        <UserTrips currPage={currMenu} tripsData={dummy} />

        <div className="row myTripsNavbar">
          <div className="col-xs-4 myTripsNavItem" onClick={this.selectNav}>Previous</div>
          <div className="col-xs-4 myTripsNavItem" onClick={this.selectNav}>Current</div>
          <div className="col-xs-4 myTripsNavItem" onClick={this.selectNav}>Saved</div>
        </div>
      </div>
    );
  }
}
