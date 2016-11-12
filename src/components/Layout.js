import React, { Component } from 'react';
import { connect } from  'react-redux';
import Hamburger from './Hamburger'
// import {  } from '../actions/FirebaseActions';


export default function Layout(props) {
    return (
      <div>
        <Hamburger />
        {props.children}
      </div>
    )
}
