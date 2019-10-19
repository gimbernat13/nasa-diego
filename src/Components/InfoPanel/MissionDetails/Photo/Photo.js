import React, { Component } from "react";
import "./Photo.css";
import { connect } from "react-redux";
import axios from "axios"
const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

 class Photo extends Component {
   state = {
    photos: null,
    photos1: null,
   }
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
       

      console.log("[Shitt updated]");

      this.fetchApiData();
    }
  }


  render() {
    return (
      <div key={this.props.missionDate} style={{ backgroundImage: `url(${this.state.photos}`, backgroundSize:"cover" }} id="photo">
        <div className="container">
           {/* <h4>Photo:</h4> */}

        </div>
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

export default connect(mapStateToProps)(Photo);
