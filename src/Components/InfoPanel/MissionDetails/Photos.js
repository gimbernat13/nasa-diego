import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

class Photos extends Component {
  state = {
    selectedMission: this.props.selectedMission,
    missionDate: this.props.missionDate,
    photos: null,
    photos1: null,
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
        console.log(response.data);
      })
      .catch(error => {
        console.log("[Data Fetching Error]",error);
      });
  }

  componentDidMount() {
    this.fetchApiData();
  }

  componentDidUpdate() {
    console.log("[Mission Details] - Component updated");
    if (
      this.state.missionDate &&
      this.state.missionDate !== this.props.missionDate
    ) {
        this.setState({ missionDate: this.props.missionDate });

      console.log("[Shitt updated]");

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
        <p>Selected Camera: 
         <span className="deepsky">{this.props.selectedCamera} </span>
        </p>
        <img style={{maxWidth:"400px", margin:"10px"}}src={this.state.photos} alt=""/>
        {/* <img style={{maxWidth:"150px", margin:"10px"}}src={this.state.photos1} alt=""/> */}
        {/* <h4>Selected Mission: {this.props.selectedMission}</h4> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    missionDate: state.missionDate,
    selectedMission: state.selectedMission,
    selectedCamera: state.selectedCamera,
  };
};

export default connect(mapStateToProps)(Photos);
