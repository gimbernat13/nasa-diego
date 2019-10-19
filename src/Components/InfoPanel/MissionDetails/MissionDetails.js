import React, { Component } from "react";
import "./MissionDetails.css";
import axios from "axios";
// import Photo from "./Photo/Photo";
import { connect } from "react-redux";

const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

class MissionDetails extends Component {
  state = {
    rover: this.props.rover,
    formattedDate: this.props.formattedDate,
    manifest: null,
    launchDate: null,
    landingDate: null,
    status: null,
    totalPhotos: null
  };
  fetchApiData() {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${this.props.rover}?api_key=${API_KEY}`
      )
      .then(response => {
        const manifest = response.data.photo_manifest;
        this.setState({ manifest: manifest });
        this.setState({ launchDate: manifest.launch_date });
        this.setState({ landingDate: manifest.landing_date });
        this.setState({ status: manifest.status });
        this.setState({ totalPhotos: manifest.total_photos });
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    // console.log("[Mission Details] Component mounted");

    this.fetchApiData();
  }

  componentDidUpdate() {
    console.log("[Mission Details] - Component updated");
    if (this.state.rover && this.state.rover !== this.props.rover) {
      this.setState({ rover: this.props.rover });

      
      this.fetchApiData();
    }
  }
  render() {
    // const manifest = this.state.manifest;
    return (
      <div key={this.props.rover}>
        <h3 key={this.props.rover}><span  className="deepsky">{this.state.rover}</span> Rover</h3>
        <h5>Mission Details</h5>
        <ul>
          <li>Launch Date: {this.state.launchDate} </li>
          <li>Landing Date: {this.state.landingDate} </li>
          <li>Total photos taken by Rover: {this.state.totalPhotos} </li>
          {/* <li key={this.props.rover} >Status:{this.state.manifest.status}  </li> */}
          <li className="status">Mission Status: {this.state.status} </li>
        </ul>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMission: state.selectedMission,
    selectedDate: state.selectedDate,
    selectedCamera: state.selectedCamera,
    missionPhotos: state.missionPhotos,
  }

}


export default connect(mapStateToProps, {})(MissionDetails)









// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?manifests/curiosity&api_key=XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW
