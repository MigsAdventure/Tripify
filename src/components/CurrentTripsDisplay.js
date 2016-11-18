import React, { Component } from 'react';
import uuid from 'uuid';
import { Rating } from 'semantic-ui-react';


export default class CurrentTripsDisplay extends Component {
  constructor() {
    super();
  }

  render () {
    let { userdata } = this.props;
    console.log('userdata.length:', userdata.length);

    return (
     <div className="currentWayPointsContainer">{

       userdata.length === undefined ?

       userdata.waypoints.map(point =>
         {
           return (
             <div key={uuid()} className="currentWayPoint">
               <h4>{point.name}</h4>
               <p>{point.formatted_address}</p>
               <Rating icon='star' size="huge" defaultRating={point.rating} maxRating={5} />
             </div>
           )
         } ) : <div>Loading...</div>

       }
       </div>
       )
     }
       }
