import React, { Component } from 'react';
import uuid from 'uuid';
import { Grid, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

@connect(state => ({

    tripsData: state.user.saved,

}))

export default class UserTrips extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }


  render () {
    let { currPage, tripsData } = this.props;
// let userTripData = this.state.userTripData  || [];
console.log('userTripData: ', tripsData)

    return (
     <div className="content">
       {currPage === 'Current' && this.props.tripsData !== undefined && <div>
         {Object.keys(tripsData).map((current ) => {
           console.log('current: ', tripsData[current].title);
           return (
             <div key={uuid()}>
               <Grid celled>
                 <Grid.Row>
                   <Segment.Group>
                     <Segment><Grid.Column width={3}>
                       <Image src={tripsData[current].picture} />
                     </Grid.Column>
                     </Segment>
                     <Segment.Group>
                       <Grid.Column width={13}>
                         <Segment>{tripsData[current].title}</Segment>
                         <Segment>{tripsData[current].tags}</Segment>
                         <Segment>{tripsData[current].description}</Segment>
                       </Grid.Column>
                     </Segment.Group>
                   </Segment.Group>
                 </Grid.Row>
               </Grid>
             </div>)})}
       </div>}
       {currPage === 'Previous' && <div>Previous Menu</div> }
       {currPage === 'Saved' && <div>Saved Menu</div> }
     </div>
    );
  }
}
