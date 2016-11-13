import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripsDisplay from './TripsDisplay';
import { Grid, Segment, Icon } from 'semantic-ui-react'

@connect(state => ({
  trips: {
    data: state.results,
  },
}))

export default class ResultsPage extends Component {

  render() {
    return (
      <div>
        <div className='backBtnContainer'>
          <button className="backBtn"><Icon name="arrow left" /></button>
        </div>
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
