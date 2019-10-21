import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import React, { Component } from "react";
class Date extends Component {
  state = {
    startDate: "",
    endDate: "",
    date:  moment("2014-08-06"),
    enable:true,
  };

  changeDate = (date) => {
      this.setState({date})
      return moment(date).format("YYYY-MM-DD");
  }
  render() {
    return (
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        onDateChange={date => this.props.onSelectedDate(this.changeDate(date))}
        onChange={date => this.props.onSelectedDate(this.setDate(date))}
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        isOutsideRange = {() => false}
  
      />
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
  )(Date);
  