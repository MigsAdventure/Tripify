import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as FirebaseActions from '../actions/FirebaseActions';
import SignIn from './SignIn';

@connect(state => ({
  loggedIn: state.auth.authenticated,
  user: state.auth.user,
}), dispatch => ({
  signOut() {
    dispatch(FirebaseActions.signOut());
  },
  signInWithGoogle() {
    dispatch(FirebaseActions.signInWithGoogle());
  },
}))

export default class Hamburger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showSignIn: false,
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  toggleSignIn = () => {
    this.handleClose();
    this.setState({ showSignIn: !this.state.showSignIn });
  }
  goToProfile() {
    browserHistory.push('/profile')
  }

  goHome() {
    browserHistory.push('/')
  }

  render() {
    const { showSignIn } = this.state;
    const { signOut, loggedIn, user } = this.props;
    return (
      <div className='hamburgerContainer col-xs-3 col-xs-offset-9'>
        <SignIn
          show={showSignIn}
          toggle={this.toggleSignIn}
          {...this.props}
        />
        <RaisedButton className="hamburgerBtn" onTouchTap={this.handleToggle}>
          <i className="material-icons">menu</i>
        </RaisedButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar
            title={loggedIn ? `Hi, ${user.displayName}` : 'Tripify'}
            id="poop"
            onTouchTap={this.handleClose}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            style={{ backgroundColor: '#2b98f0', minHeight: '40px' }}
          />
          <br />
          <MenuItem onTouchTap={this.goHome}><i className="material-icons">&#xE88A;</i>Home</MenuItem>

          {loggedIn ?
            <div>
              <MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE55E;</i>Current Trip</MenuItem>
              <MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE55B;</i>My Trips</MenuItem>
              <MenuItem onTouchTap={this.goToProfile}><i className="material-icons">&#xE8A6;</i>My Profile</MenuItem>
              <MenuItem onTouchTap={signOut}><i className="material-icons">block</i>Sign Out</MenuItem>
            </div>
          : null}

          {loggedIn ? null : <div>
            <MenuItem onTouchTap={this.toggleSignIn}><i className="material-icons">&#xE876;</i>Sign In</MenuItem>
            <MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE14F;</i>Sign Up</MenuItem>
          </div>}

        </Drawer>
      </div>
    );
  }
}

Hamburger.propTypes = {
  signOut: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.object,
};
