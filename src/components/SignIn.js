import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


export default class SignIn extends Component {
  googleSignIn = () => {
    this.props.toggle();
    this.props.signInWithGoogle();
  }

  render() {
    return (
      <Modal className='modalComponent'
        show={this.props.show}
        onHide={this.props.toggle}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Welcome to Tripify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>E-mail:</h5>
          <input type="text" />
          <h5>Password:</h5>
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center">
            <div className='row'>
              <button className=" btn signBtn">Sign In</button>
              <button className=" btn signBtn">Sign Up</button>
            </div>
            <div className="row">
              <button className="signBtn btn googleSignBtn" >
                <h5 className="signInText">Sign in with Google</h5>
                {/* <img
                  className="googleSignImage"
                  onClick={this.googleSignIn}
                  height="40px"
                  src="/google-sign-in.png"
                  alt="google sign in"
                /> */}
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignIn.propTypes = {
  toggle: React.PropTypes.func,
  signInWithGoogle: React.PropTypes.func,
  show: React.PropTypes.bool,
};
