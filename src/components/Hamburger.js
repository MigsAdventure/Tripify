import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

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

  render() {
    const { showSignIn } = this.state;
    const { signOut, loggedIn, user } = this.props;
    let signLi;
    if (loggedIn) {
      signLi =
        (
          <div>
            <ul className="nav navbar-nav navbar-left">
              <li><MenuItem><Link className="navBarText" to="/">Home</Link></MenuItem></li>
              <li><MenuItem onTouchTap={this.handleClose}><Link className="navBarText" to="/trip/create">Create Trip</Link></MenuItem></li>
              <li><MenuItem onTouchTap={this.handleClose}><Link className="navBarText" to="/my-trips">My Trips</Link></MenuItem></li>
              <li><MenuItem onTouchTap={this.handleClose}><Link className="navBarText" to="/profile">My Profiles</Link></MenuItem></li>
              <li><MenuItem onTouchTap={signOut}><Link className="navBarText">Sign Out</Link></MenuItem></li>
            </ul>
            <div className="nav navbar-nav navbar-right userContainer">
              <MenuItem className="user navBarText"><Link className="navBarText"> Hi, {user.displayName}</Link></MenuItem>
            </div>
          </div>
        );
    } else {
      signLi =
       (
         <ul className="nav navbar-nav">
           <li><MenuItem><Link to="/">Home</Link></MenuItem></li>
           <li><MenuItem>Sign Up</MenuItem></li>
           <li><MenuItem onTouchTap={this.toggleSignIn}>Sign In</MenuItem></li>
         </ul>
       );
    }
    return (
      <div className="bar">
        <SignIn
          show={showSignIn}
          toggle={this.toggleSignIn}
          {...this.props}
        />
        <div className="bigScreen">
          <div className="navbar-header">
            <a className="navbar-brand">Tripify</a>
          </div>
          {signLi}
        </div>
        <div className="hamburgerContainer col-xs-3 col-xs-offset-9">
          <RaisedButton className="hamburgerBtn" onTouchTap={this.handleToggle}>
            <i className="material-icons">menu</i>
          </RaisedButton>
          <Drawer className='drawer'
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <AppBar className="navBarText"
              title={loggedIn ? `Hi, ${user.displayName}` : 'Tripify'}
              id="poop"
              onTouchTap={this.handleClose}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              style={{ backgroundColor: '#2b98f0', minHeight: '40px' }}
            />
            <br />
            <Link className="navText" to="/"><MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE88A;</i>Home</MenuItem></Link>

            {loggedIn ?
              <div>
                <Link className="navText" to="/trip/create"><MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE55E;</i>Create Trip</MenuItem></Link>
                <Link className="navText" to="/my-trips"><MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE55B;</i>My Trips</MenuItem></Link>
                <Link className="navText" to="/profile"><MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE8A6;</i>My Profile</MenuItem></Link>
                <Link className="navText"><MenuItem onTouchTap={signOut}><i className="material-icons">block</i>Sign Out</MenuItem></Link>
              </div>
            : null}

            {loggedIn ? null : <div>
              <Link className="navText"><MenuItem onTouchTap={this.toggleSignIn}><i className="material-icons">&#xE876;</i>Sign In</MenuItem></Link>
              <Link className="navText"><MenuItem onTouchTap={this.handleClose}><i className="material-icons">&#xE14F;</i>Sign Up</MenuItem></Link>
            </div>}
          </Drawer>
        </div>
      </div>
    );
  }
}

Hamburger.propTypes = {
  signOut: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.object,
};
