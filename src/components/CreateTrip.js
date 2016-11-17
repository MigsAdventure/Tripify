import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { browserHistory } from 'react-router';

import { fetchSearch } from '../actions/ApiActions';
import * as FirebaseActions from '../actions/FirebaseActions';
import * as WaypointActions from '../actions/WaypointActions';

@connect(state => ({
  results: state.results,
  waypoints: state.waypoints,
}), dispatch => ({
  fetchSearchResults(searchPackage) {
    dispatch(fetchSearch(searchPackage));
  },
  createNewTrip(trip) {
    dispatch(FirebaseActions.createNewTrip(trip));
  },
  setWaypoints(waypoints) {
    dispatch(WaypointActions.setWaypoints(waypoints));
  },
}))

export default class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      title: '',
      tags: '',
      description: '',
      picture: '',
      id: '',
    };
  }

  autoGrow = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = (e.target.scrollHeight)+"px";
  }

  submitForm = (e) => {
    e.preventDefault();
    const searchPackage = {
      trip: this.placesInput.value,
      location: this.locationInput.value,
    };
    this.props.fetchSearchResults(searchPackage);
  }

  addWaypoint = (waypoint) => {
    const { setWaypoints, waypoints } = this.props;
    setWaypoints([...waypoints, waypoint]);
    // this.setState({ waypoints: [...this.state.waypoints, waypoint] });
    this.toggleSearch();
  }

  toggleSearch = () => {
    this.setState({ search: !this.state.search });
  }

  inputChange = (e) => {
    const target = e.target.id;
    if (target === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (target === 'tags') {
      this.setState({
        tags: e.target.value,
      });
    } else if (target === 'description') {
      this.setState({
        description: e.target.value,
      });
    } else if (target === 'picture') {
      this.setState({
        picture: e.target.value,
      });
    }
  }

  plusOrder = (i) => {
    const { waypoints, setWaypoints } = this.props;
    if (waypoints.length > 1 && i >= 1) {
      const curr = waypoints[i];
      waypoints[i] = waypoints[i - 1];
      waypoints[i - 1] = curr;
      // this.setState({ waypoints });
      setWaypoints(waypoints);
    }
  }

  minusOrder = (i) => {
    const { waypoints, setWaypoints } = this.props;
    if (waypoints.length > 1 && i < waypoints.length - 1) {
      const curr = waypoints[i];
      waypoints[i] = waypoints[i + 1];
      waypoints[i + 1] = curr;
      // this.setState({ waypoints });
      setWaypoints(waypoints);
    }
  }

  removeWaypoint = (i) => {
    const { waypoints, setWaypoints } = this.props;
    setWaypoints(waypoints.filter((waypoint, index) => !(index === i)));
    // this.setState({ waypoints: waypoints.filter((waypoint, index) => !(index === i)) });
  }

  saveTrip = (e) => {
    e.preventDefault();
    const { title, tags, description, picture } = this.state;
    const { waypoints, setWaypoints, createNewTrip } = this.props;
    if (waypoints.length) {
      createNewTrip({
        title,
        tags,
        description,
        waypoints,
        picture,
        locStart: waypoints[0],
        locEnd: waypoints[waypoints.length - 1],
      });
      setWaypoints([]);
      browserHistory.push('/my-trips');
    } else {
      alert('Please add waypoints!');
    }
  }

  startTrip = () => {
    this.saveTrip();
    // SEND THIS TRIP TO TRIP UNDERWAY
  }

  render() {
    // console.log('this CreateTrip: ', this);
    const { search, title, description, tags, picture } = this.state;
    const { results, waypoints } = this.props;

    return (
      <div>
        <br />
        {search ?
          <div>
            <form key={uuid()} onSubmit={this.submitForm} className="col-md-2">
              <input key={uuid()} type="text" placeholder="search places..." ref={(input) => { this.placesInput = input; }} required />
              <br />
              <input key={uuid()} type="text" placeholder="at location..." ref={(input) => { this.locationInput = input; }} required />
              <br />
              <button className="btn btn-default">Search</button>
            </form>
            <button className="btn btn-default" onClick={this.toggleSearch}>Back To Trip</button>
            <br /><br />
            {results.map(result => (
              <button key={result.id} className="btn btn-default" onClick={() => this.addWaypoint(result)}>
                {result.name}
              </button>
            ))}
          </div>
          :
          <div>
            <form onSubmit={this.saveTrip}>
              <button id="save" className="btn btn-default">Save Trip</button>
              <h3>Trip Info</h3>
              <input id="title" type="text" onChange={this.inputChange} value={title} placeholder="enter title" required />
              <br />
              <input id="tags" type="text" onChange={this.inputChange} value={tags} placeholder="enter search tags" required />
              <br />
              <input id="picture" type="text" onChange={this.inputChange} value={picture} placeholder="enter picture url" required />
              <br />
              <textarea id="description" onKeyUp={this.autoGrow} value={description} onChange={this.inputChange} type="text" placeholder="enter description" required />
            </form>
            <h3>Trip Waypoints</h3>
            {waypoints.map((waypoint, i) => (
              <div key={waypoint.id} className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{waypoint.name}</h3>
                  <button onClick={() => this.plusOrder(i)} className="btn btn-default"><span className="glyphicon glyphicon-plus-sign" /></button>
                  <button onClick={() => this.minusOrder(i)} className="btn btn-default"><span className="glyphicon glyphicon-minus-sign" /></button>
                  <button onClick={() => this.removeWaypoint(i)} className="btn btn-default"><span className="glyphicon glyphicon-remove-sign" /></button>
                </div>
                <div className="panel-body">
                  {waypoint.formatted_address}
                </div>
              </div>
            ))}
            <button onClick={this.toggleSearch} className="btn btn-default">
              <span className="glyphicon glyphicon-plus" />&nbsp;Add Waypoint
            </button>
          </div>
        }
      </div>
    );
  }
}

// ModifyTrip.propTypes = {
//   trips: React.PropTypes.shape({
//     trips: React.PropTypes.object,
//   }),
// };
