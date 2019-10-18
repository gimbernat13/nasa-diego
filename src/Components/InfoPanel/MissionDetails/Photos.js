import React, { Component } from "react";
import { connect } from "react-redux";

class Photos extends Component {
  render() {
    return (
      <div key={this.props.missionDate}>
        <p>
         
          Selected date: 
          <span className="deepsky"> {this.props.missionDate}</span>
        </p>
        {/* <h4>Selected Mission: {this.props.selectedMission}</h4> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    missionDate: state.missionDate,
    selectedMission: state.selectedMission
  };
};

export default connect(mapStateToProps)(Photos);
