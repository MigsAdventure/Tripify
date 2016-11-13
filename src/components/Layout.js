import React, { Component } from 'react';
import Hamburger from './Hamburger'
// import {  } from '../actions/FirebaseActions';


export default function Layout(props) {
    return (
      <div className='mainDiv'>
        <div className='bar'>
          <Hamburger />
        </div>
        {props.children}
      </div>
    )
}
