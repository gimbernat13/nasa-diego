import React, { Component } from "react";
import "./InfoPanel.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import MissionDetails from "./MissionDetails/MissionDetails";

export default class InfoPanel extends Component {
  state = {
    rover: "Curiosity",
    startDate: new Date(),
    setStartDate: new Date(),
    formattedDate: null
  };
  handleRover = event => {
    const id = event.currentTarget.id;
    this.setState({ rover: id });
    console.log(this.state.rover);
  };
  setDate = date => {
    this.setState({ setStartDate: date });
    const format = moment(date).format("YYYY-MM-DD");
    this.setState({ formattedDate: format });
    };

  render() {
    return (
      <div id="InfoPanel">
        <div className="InfoPanelContainer">
          <Row>
            <Col lg={12}>
              <h4 className="text-justify">Mars Rover Photos</h4>
              <p>Select a <span className="deepsky">Mission</span> and <span className="deepsky">Earth Date</span> </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <DropdownButton
                variant="secondary"
                id="dropdown-item-button"
                title="Choose a Mission"
              >
                <Dropdown.Item
                  onClick={this.handleRover}
                  id="Curiosity"
                  as="button"
                >
                  Curiosity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={this.handleRover}
                  id="Opportunity"
                  as="button"
                >
                  Opportunity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={this.handleRover}
                  id="Spirit"
                  as="button"
                >
                  Spirit
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col lg={3} offset={2}>
              <div className="InfoPanelSection ">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.startDate}
                  onChange={this.setDate}
                />
              </div>
            </Col>
          </Row>

          <Row className="MissionDetails">
            <Col lg={12}>
              <hr></hr>

              <MissionDetails
                formattedDate={this.state.formattedDate}
                rover={this.state.rover}
              />
            </Col>
          </Row>
          {/* <hr /> */}
        </div>
      </div>
    );
  }
}
