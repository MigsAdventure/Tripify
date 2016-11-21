import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripsDisplay from './TripsDisplay';
import { Grid, Segment, Icon } from 'semantic-ui-react'

@connect(state => ({
  data: state.results,
}))

export default class ResultsPage extends Component {

  render() {
    console.log('this.props.data:', this.props.data);
    return (
      <div>
        <div className='backBtnContainer'>
          <button className="backBtn"><Icon name="arrow left" /></button>
        </div>
        <TripsDisplay results={this.props.data} />
      </div>
    )
  }
}

ResultsPage.propTypes = {
  trips: React.PropTypes.shape({
    trips: React.PropTypes.object,
  }),
};
