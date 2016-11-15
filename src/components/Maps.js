import React, { Component } from 'react';

export default class Maps extends Component {
  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate(prevProps, prevState) {
    this.initMap();
  }

  initMap() {
    const { mapRef } = this.refs;
    const { google, destination, waypoints } = this.props;

    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(mapRef, {
      zoom: 4,
      center: { lat: 41.85, lng: -87.65 },
    });

    directionsDisplay.setMap(map);

    let pos;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        directionsService.route({
          origin: `${pos.lat}, ${pos.lng}`,
          destination,
          waypoints,
          optimizeWaypoints: true,
          travelMode: 'DRIVING',
        }, function (result, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(result);
          }
        });
      });
    }
  }

  render() {
    return (
      <div className="col-sm-12">
        <div  ref="mapRef" className="mapRef"></div>
      </div>
    )
  }
}
