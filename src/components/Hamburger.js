import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

export default class Hamburger extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleToggle}
        ><i class="material-icons">menu</i>
        </RaisedButton>
        <Drawer

          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title='Tripify'
            id='poop'
            onTouchTap={this.handleClose}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            style={{ backgroundColor: 'red;', minHeight: '40px' }}

          />
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE88A;</i>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE876;</i>Sign In</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE55E;</i>Current Trip</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE55B;</i>My Trips</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE8A6;</i>My Profiles</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">&#xE14F;</i>Sign Up</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><i class="material-icons">block</i>Sign Up</MenuItem>



        </Drawer>
      </div>
    );
  }
}
