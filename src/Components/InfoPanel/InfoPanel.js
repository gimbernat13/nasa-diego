import React, { Component } from "react";
import "./InfoPanel.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import MissionDetails from "./MissionDetails/MissionDetails";

export default class InfoPanel extends Component {
  state = {
    rover: null,
    startDate: new Date(),
    setStartDate: new Date(),
    formattedDate: null
  };
  handleChange = event => {
    const id = event.currentTarget.id;
    this.setState({ rover: id });
    console.log(this.state.rover);
  };
  setDate = date => {
    this.setState({ setStartDate: date });
    const format = moment(date).format("YYYY-MM-DD");
    this.setState({ formattedDate: format });
    console.log(this.state.formattedDate);
  };

  render() {
    return (
      <div id="InfoPanel">
        <div className="InfoPanelContainer">
          <Row>
            <h4 className="text-justify">Mars Rover Photos</h4>
            <hr />
          </Row>
          <Row>
            <div>
              {/* <p>Choose a Mission</p> */}
              <DropdownButton
                variant="secondary"
                id="dropdown-item-button"
                title="Choose a Mission"
              >
                <Dropdown.Item
                  onClick={this.handleChange}
                  id="curiosity"
                  as="button"
                >
                  Curiosity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={this.handleChange}
                  id="opportunity"
                  as="button"
                >
                  Opportunity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={this.handleChange}
                  id="spirit"
                  as="button"
                >
                  Spirit
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Row>
          <Row>
            <Col lg={3} offset={2}>
              <div className="InfoPanelSection ">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.startDate}
                  onChange={this.setDate}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="InfoPanelSection"></div>
            </Col>
          </Row>

          <Row className="MissionDetails">
            <Col lg={12}>
              <MissionDetails />
            </Col>
          </Row>
          {/* <hr /> */}
        </div>
      </div>
    );
  }
}
