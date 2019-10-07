import React, { Component } from "react";
// import Dropdown from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default class CameraDropown extends Component {
  state = {
    rover: null
  }
  handleChange = (event) => {
    const id = event.currentTarget.id;
    this.setState({rover:id})
    console.log(id)
  
  }
  render() {
    return (
      <div>
        <DropdownButton
          variant="secondary"
          id="dropdown-item-button"
          title="Cámara"
        >
          <Dropdown.Item onClick={this.handleChange}id="FHAZ"as="button">FHAZ</Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange}id="RHAZ"as="button">RHAZ</Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange}id="MAST"as="button">MAST</Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange}id="PANCAM"as="button">PANCAM</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
