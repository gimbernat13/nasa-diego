import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from "../../../store/actions";
import { Button } from "react-bootstrap";
const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

class Photos extends Component {
  state = {
    selectedMission: this.props.selectedMission,
    missionDate: this.props.missionDate,
    selectedCamera: this.props.selectedCamera,
    photos: null,
    photos1: null
  };
  fetchApiData() {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.selectedMission}/photos?earth_date=${this.props.missionDate}&camera=${this.props.selectedCamera}&api_key=${API_KEY}`
      )

      .then(response => {
        // const manifest = response.data.photo_manifest;
        const imgSrc = response.data.photos[0].img_src;
        const imgSrc1 = response.data.photos[1].img_src;
        this.setState({ photos: imgSrc });
        this.setState({ photos1: imgSrc1 });

        this.props.onSelectedImage(imgSrc);
        console.log(response.data);
      })
      .catch(error => {
        console.log("[Data Fetching Error]", error);
        alert(
          "No photos for your current choice (Some cameras don't send photos daily) verify date is within mission's range"
        );
      });
  }

  componentDidMount() {
    this.fetchApiData();
  }

  componentDidUpdate() {
    // console.log("[Mission Details] - Component updated");
    if (
      this.state.missionDate &&
      this.state.missionDate !== this.props.missionDate
    ) {
      this.setState({ missionDate: this.props.missionDate });

      console.log("[updated]");

      this.fetchApiData();
      this.props.onSelectedImage(this.state.photos);
    }
    if (
      this.state.selectedCamera &&
      this.state.selectedCamera !== this.props.selectedCamera
    ) {
      this.setState({ selectedCamera: this.props.selectedCamera });

      this.fetchApiData();
    }
  }
  re;
  render() {
    return (
      <div key={this.props.missionDate}>
        <p>
          Selected date:
          <span className="deepsky"> {this.props.missionDate}</span>
        </p>
        <p>
          Selected Camera:
          <span className="deepsky">{this.props.selectedCamera} </span>
        </p>

        {/* <Button onClick={() => this.props.onSelectedImage(this.state.photos)}>
          Get your mars Rover Photo
        </Button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    missionDate: state.missionDate,
    selectedMission: state.selectedMission,
    selectedCamera: state.selectedCamera
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSelectedImage: image => dispatch(actionCreators.finalStuff(image)),
    onSelectedMission: roverId => dispatch(actionCreators.getMission(roverId)),
    onSelectedDate: date => dispatch(actionCreators.getDate(date)),
    onSelectedCamera: cameraId => dispatch(actionCreators.getCamera(cameraId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
