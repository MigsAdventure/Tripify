import React from 'react';
import uuid from 'uuid';
import { Grid, Image, Segment, Loader, Accordion, Button } from 'semantic-ui-react'


export default function CurrentTrips(props) {
  let { currentTrips } = props;
  console.log('currentTrips:', currentTrips);

  return (
    <div>
      <h2>CurrentTrips Page</h2>
      {
        Object.keys(currentTrips).map((item) =>
          {
            console.log('TEST:', currentTrips[item].title);
            return (
              <div key={uuid()} className="userTripContainer">
                <Accordion className="userAccordion">
                  <Accordion.Title className="userTripsTitles">
                    <h4>{currentTrips[item].title}</h4>
                    <p>{currentTrips[item].description}</p>
                    <h5>{currentTrips[item].tags}</h5>
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
