import React, { Component } from 'react';
import Maps from './Maps';
import UploadImage from './UploadImage';

export default class TripsUnderWay extends Component {
  constructor() {
    super();
    this.state = {
      destination: 'Las Vegas, NV',
      waypoints: [{ location: 'San Francisco, CA' }, { location: 'Los Angeles, CA' }],
    };
  }

  render() {
    return (
      <div className="container">
        <Maps google={window.google} {...this.state} />
        <UploadImage />
      </div>
    );
  }
}
