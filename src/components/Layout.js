import React, { Component } from 'react';
import { connect } from  'react-redux';
// import {  } from '../actions/FirebaseActions';


export default function Layout(props) {
    return (
      <div>
        {props.children}
      </div>
    )
}
