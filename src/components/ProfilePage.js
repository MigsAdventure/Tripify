import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { browserHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import * as FirebaseActions from '../actions/FirebaseActions';


@connect(state => ({
  loggedIn: state.auth.authenticated,
  user: state.auth.user,

}))

export default class ProfilePage extends Component {
  constructor() {
    super();
  }


  render() {
    const  { user } = this.props;
    console.log('user', user);
    return(
      <div >
        <Card id='card' style = {{ textAlign: 'left', width: '100%',height: '100%', flex: 'initial'}}>
          <CardHeader
            title={user.displayName}
            subtitle={user.email}
            avatar={user.photoURL}
          />
          <CardMedia

            // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            {/* <img style={{width: '20%', maxWidth: '20%', maxHeight: '20%', minWidth: '20%'}} src="https://www.groupon.com/merchant/wp-content/uploads/2013/07/san-francisco-small-business.jpg" alt="img.jpg" /> */}
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
                class='col-xs-12 col-sm-12 col-md-12 col-lg-12'
                id= 'FlatButton' >
                <i class="material-icons" style={{color: '#966FD6',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(10%)'}}>&#xE55E;</i> Current Trip
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-xs-12 col-sm-12 col-md-12 col-lg-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color: '#77DD77',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(10%)'}}>mail</i> Email
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-xs-12 col-sm-12 col-md-12 col-lg-12'
                id= 'FlatButton' >
                <i class="material-icons" style={{color: '#FFb347',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(10%)' }}>vpn_key</i> Change Password
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-xs-12 col-sm-12 col-md-12 col-lg-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color: '#F49AC2', fontSize: '48px', paddingLeft: '10px', transform: 'translateY(10%)'}}>mode_edit</i> Edit Things
              </FlatButton>

              <FlatButton
                style={{height: '65px', textAlign: 'left'}}
                class='col-xs-12 col-sm-12 col-md-12 col-lg-12'
                id= 'FlatButton'  >
                <i class="material-icons" style={{color:'#FF6961',fontSize: '48px', paddingLeft: '10px', transform: 'translateY(10%)'}}>favorite</i> Favorites
              </FlatButton>

            </CardActions>
          </div>
        </Card>
      </div>
          )
          }
          }

        ProfilePage.propTypes = {

            user: React.PropTypes.object,
          };
