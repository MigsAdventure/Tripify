import React, { Component } from 'react';
import uuid from 'uuid';

export default class UserTrips extends Component {
  constructor() {
    super();
  }

  render () {
    let { currPage, tripsData } = this.props;
    return (
     <div className="content">
       {currPage === 'Current' && <div>
         {tripsData.data.map(trip =>
           <div key={uuid()} >
             <h4>{trip.name}</h4>
             <p>{trip.description}</p>
           </div>)}
       </div> }
       {currPage === 'Previous' && <div>Previous Menu</div> }
       {currPage === 'Saved' && <div>Saved Menu</div> }
     </div>
    );
  }
}
