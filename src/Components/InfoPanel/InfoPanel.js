import React, { Component } from "react";
import "./InfoPanel.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import MissionDetails from "./MissionDetails/MissionDetails";
import { connect } from "react-redux";
// import * as actionTypes from "../../store/actions"
import * as actionCreators from "../../store/actions";
import Photos from "./MissionDetails/Photos";

import Date from "./Date/Date";

let cagadademierda = null;

class InfoPanel extends Component {
  state = {
    rover: "Curiosity",
    // startDate: new Date(),
    formattedDate: null
  };
  handleRover = event => {
    const id = event.currentTarget.id;
    this.setState({ rover: id });
    console.log(this.state.rover);
  };
  setDate = date => {
    const format = moment(date).format("YYYY-MM-DD");
    console.log(format);
    this.setState({formattedDate:format})
 
    return format;
  };

  render() {
    return (
      <div id="InfoPanel">
        <div className="InfoPanelContainer">
          <Row>
            <Col lg={12}>
              <h4 className="text-justify">Mars Rover Photos</h4>
              {/* <span>Powered by NASA API</span> */}
              <p>
                Select a <span className="deepsky">Mission</span> a{" "}
                <span className="deepsky">Camera </span>and
                <span className="deepsky"> Earth Date</span> to view mission's photos.
              </p>
              <span>Cameras:</span>
              <ul>
                <li>
                  <span className="deepsky">FHAZ</span> - Front Hazard Avoidance
                  Camera
                </li>
                <li>
                  <span className="deepsky">RHAZ</span> - Rear Hazard Avoidance
                  Camera
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <DropdownButton
                variant="secondary"
                id="dropdown-item-button"
                title="Choose Mission"
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
            <Col lg={4}>
              <DropdownButton
                variant="secondary"
                id="dropdown-item-button"
                title="Choose Camera"
              >
                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("FHAZ")}
                  id="FHAZ"
                  as="button"
                >
                  FHAZ
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("RHAZ")}
                  id="FHAZ"
                  as="button"
                >
                  RHAZ
                </Dropdown.Item>
              </DropdownButton>
            </Col>
    
          </Row>
          <Row>
          <Date />

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
    onSelectedDate: date => dispatch(actionCreators.getDate(date)),
    onSelectedCamera: cameraId => dispatch(actionCreators.getCamera(cameraId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPanel);
