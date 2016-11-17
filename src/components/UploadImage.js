import React, { Component } from 'react';

export default class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
  }

  _onInputChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  submit = () => {
    this.props.submitFile(this.state.file);
  }

  render() {
    return (
      <div className="container">
        <input type="file" onChange={this._onInputChange} />
        <button className="btn btn-default" onClick={this.submit}>Upload</button>
      </div>
    );
  }
}
