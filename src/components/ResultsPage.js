import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripsDisplay from './TripsDisplay';

@connect(state => ({
  trips: {
    trips: state.results,
  },
}))

export default class ResultsPage extends Component {

  render() {
    console.log('this.props.trips:', this.props.trips);
    return (
      <div>
        <TripsDisplay results={this.props.trips} />
      </div>
)
  }
}

ResultsPage.propTypes = {
  trips: React.PropTypes.shape({
    trips: React.PropTypes.object,
  }),
};
