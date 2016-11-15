import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

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

  render () {
    let dummy = {
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
      ]
    }
      let { currMenu, highlight } = this.state;
    return (
      <div className="container-fluid myTripsMainContainer">
        <div>
          <label>{currMenu} Trips</label>
        </div>

        <div className="content">
          {currMenu === 'Current' && <div>{dummy.data.map(trip => <div><h4>{trip.name}</h4><p>{trip.description}</p></div>)}</div> }
          {currMenu === 'Previous' && <div>Previous Menu</div> }
          {currMenu === 'Saved' && <div>Saved Menu</div> }
        </div>
        <div className='row myTripsNavbar'>
          <div className='col-xs-4 myTripsNavItem' onClick={this.selectNav}>Previous</div>
          <div className='col-xs-4 myTripsNavItem' onClick={this.selectNav}>Current</div>
          <div className='col-xs-4 myTripsNavItem' onClick={this.selectNav}>Saved</div>
        </div>
      </div>
    );
  }
}
