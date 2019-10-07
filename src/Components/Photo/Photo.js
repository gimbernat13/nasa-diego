import React, { Component } from "react";
import "./Photo.css";
export default class Photo extends Component {
  render() {
    const roverImage =
      "https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG";
    return (
      <div style={{ backgroundImage: `url(${roverImage}`, backgroundSize:"cover" }} id="photo">
        <div className="container">
           {/* <h4>Photo:</h4> */}

        </div>
      </div>
    );
  }
}
