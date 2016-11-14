import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { browserHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

class ProfilePage extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div >
        <Card id='card' style = {{ textAlign: 'left', width: '100%',height: '100%', flex: 'initial'}}>
          <CardHeader
            title="Dustin"
            subtitle="Username: CoolBeans"
            avatar="http://pre12.deviantart.net/bca1/th/pre/i/2012/146/9/9/harley_quinn_portrait_coloured_by_urbanemma-d516fwr.png"
          />
          <CardMedia

            // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img style={{width: '20%', maxWidth: '20%', maxHeight: '20%', minWidth: '20%'}} src="https://www.groupon.com/merchant/wp-content/uploads/2013/07/san-francisco-small-business.jpg" alt="img.jpg" />
          </CardMedia>
          <CardTitle
            title="Settings"
            subtitle="Total Miles: alot"
          />
          <CardText>
            stuff
          </CardText>
          <div class= 'row'>
            <CardActions>
              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-md-12'
                id= 'FlatButton' >
                <i class="material-icons" style={{color: '#966FD6',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(13%)'}}>&#xE55E;</i> Current Trip
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-md-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color: '#77DD77',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(13%)'}}>mail</i> Email
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-md-12'
                id= 'FlatButton' >
                <i class="material-icons" style={{color: '#FFb347',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(13%)' }}>vpn_key</i> Change Password
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-md-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color: '#F49AC2', fontSize: '48px', paddingLeft: '10px', transform: 'translateY(13%)'}}>mode_edit</i> Edit Things
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-md-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color:'#FF6961',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(13%)'}}>favorite</i> Favorites
              </FlatButton>

            </CardActions>
          </div>
        </Card>
      </div>
          )
          }
          }
          export default ProfilePage;
