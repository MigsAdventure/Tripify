import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class SignIn extends Component {
  googleSignIn = () => {
    this.props.toggle();
    this.props.signInWithGoogle();
  }

  render() {
    return (
      <Modal
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
            <button>Sign In</button>
            <button>Sign Up</button>
            <br /><br />
            <img
              onClick={this.googleSignIn}
              height="40px"
              src="/google-sign-in.png"
              alt="google sign in"
            />
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
