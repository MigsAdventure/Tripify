import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Icon, Accordion, Rating } from 'semantic-ui-react';

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

       userdata.waypoints.map((point, i) =>
         {
           return (
             <div key={uuid()} className="currentWayPoint">
               <Accordion className="currentAccordion">
                 <Accordion.Title>
                   <h4>{point.name}</h4>
                   <p>{point.formatted_address}</p>
                   <Rating icon='star' size="huge" defaultRating={point.rating} maxRating={5} />
                 </Accordion.Title>
                 <Accordion.Content>
                   {
                     i === 0 &&
                       <Button color="blue" size="large" className='checkInBtn'>
                         <Button.Content>Check In</Button.Content>


                       </Button>
                   }
                   <Button color="red" size="large" className="removeBtn">
                     <Button.Content>Remove</Button.Content>


                   </Button>

                 </Accordion.Content>
               </Accordion>

               {/* <h4>{point.name}</h4>
                 <p>{point.formatted_address}</p>
               <Rating icon='star' size="huge" defaultRating={point.rating} maxRating={5} /> */}
             </div>
           )
         } ) : <div>Loading...</div>

       }
       </div>
       )
     }
       }
