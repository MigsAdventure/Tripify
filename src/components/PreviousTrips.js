import React from 'react';
import uuid from 'uuid';
import { Grid, Image, Segment, Loader, Accordion, Button } from 'semantic-ui-react'


export default function PreviousTrips(props) {
  let {previousTrips} = props;

  return (
    <div>
      <h2>PreviousTrips Page</h2>
      {
        // currPage === 'Previous' && tripsData.length > 0 &&
        Object.keys(previousTrips).map((item) =>
          {
            console.log('TEST:', previousTrips[item].title);
            return (
              <div key={uuid()} className="userTripContainer">
                <Accordion className="userAccordion">
                  <Accordion.Title className="userTripsTitles">
                    <h4>{previousTrips[item].title}</h4>
                    <p>{previousTrips[item].description}</p>
                    <h5>{previousTrips[item].tags}</h5>
                  </Accordion.Title>
                  <Accordion.Content>

                    <Button color="green" size="huge" className="startBtn">
                      <Button.Content>Start</Button.Content>
                    </Button>

                    <Button color="blue" size="huge" className="modifyBtn">
                      <Button.Content>Modify</Button.Content>
                    </Button>

                    <Button color="red" size="huge" className="removeBtn">
                      <Button.Content>Remove</Button.Content>
                    </Button>

                  </Accordion.Content>
                </Accordion>
              </div>
            );
          })
      }
    </div>
  )
}
