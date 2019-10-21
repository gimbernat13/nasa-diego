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
        <MissionDetails
                formattedDate={this.state.formattedDate}
                rover={this.props.selectedMission}
              />

            <Col lg={6}>
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
                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("CHEMCAM")}
                  id="CHEMCAM"
                  as="button"
                >
                  CHEMCAM
                </Dropdown.Item>



                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("MAHLI")}
                  id="MAHLI"
                  as="button"
                >
                  MAHLI
                </Dropdown.Item>



                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("MARDI")}
                  id="MARDI"
                  as="button"
                >
                  MARDI
                </Dropdown.Item>



                <Dropdown.Item
                  onClick={() => this.props.onSelectedCamera("NAVCAM")}
                  id="NAVCAM"
                  as="button"
                >
                  NAVCAM
                </Dropdown.Item>
              </DropdownButton>
            </Col>
       
           
    
          </Row>
          <Row>
            <Col lg={6}>
            <p>Select a Date</p>
            <Date />
            </Col>
            </Row>
          <Row>
     

          </Row>
          <Row className="MissionDetails">
            <Col lg={12}>
               
           
              <hr></hr>
          
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
