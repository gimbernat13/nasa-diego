import React, { Component } from "react";
import "./InfoPanel.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import MissionDetails from "./MissionDetails/MissionDetails";
import { connect } from "react-redux";
// import * as actionTypes from "../../store/actions"
import * as actionCreators from "../../store/actions"
import Photos from "./MissionDetails/Photos";

let cagadademierda = null;

class InfoPanel extends Component {
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
    const format = moment(date).format("YYYY-MM-DD");
    console.log(format)
    cagadademierda = format
    return format
  };

  render() {
    return (
      <div id="InfoPanel">
        <div className="InfoPanelContainer">
          <Row>
            <Col lg={12}>
              <h4 className="text-justify">Mars Rover Photos</h4>
              <p>
                Select a <span className="deepsky">Mission</span> and{" "}
                <span className="deepsky">Earth Date</span>{" "}
              </p>
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
                  onClick={() => this.props.onSelectedMission("Curiosity")}
                  id="Curiosity"
                  as="button"
                >
                  Curiosity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSelectedMission("Opportunity")}
                  id="Opportunity"
                  as="button"
                >
                  Opportunity
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSelectedMission("Spirit")}
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
                  onChange={(date) => this.props.onSelectedDate(this.setDate(date))}
                />
              </div>
            </Col>
          </Row>
          <Row className="MissionDetails">
            <Col lg={12}>
              <hr></hr>
              <MissionDetails
                formattedDate={this.state.formattedDate}
                rover={this.props.selectedMission}
              />
              <Photos />
            </Col>
          </Row>
          <div className="nasa-logo">
            <span>
              {/* Powered By: <img src="./assets/images/nasa.png" alt="" /> */}
            </span>
          </div>
          {/* <hr /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMission: state.selectedMission,
    missionDate: state.selectedDate,
    selectedCamera: state.selectedCamera,
    missionPhotos: state.missionPhotos
  };
};
// { type: actionTypes.GET_MISSION, payload: roverId }
const mapDispatchToProps = dispatch => {
  return {
    onSelectedMission: roverId => dispatch(actionCreators.getMission(roverId)),
    onSelectedDate: date => dispatch(actionCreators.getDate(date))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPanel);
