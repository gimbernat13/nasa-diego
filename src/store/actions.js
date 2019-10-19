import axios from "axios";
export const GET_CAMERA = "GET_CAMERA";
export const GET_MISSION = "GET_MISSION";
export const SET_MISSION = "SET_MISSION";
export const GET_DATE = "GET_DATE";
const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

const reqDate = date => {
  return {
    type: GET_DATE,
    payload: date
  };
};
export const reqCamera = cameraId => {
  return {
    type: GET_CAMERA,
    payload: cameraId
  };
};

const fetchApiData= () => {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.selectedMission}/photos?earth_date=${this.props.missionDate}&camera=${this.props.selectedCamera}&api_key=${API_KEY}`
    )
    .then(response => {
      const imgSrc = response.data.photos[0].img_src;
      console.log("[Fetched Data ]" + response.data);
      return imgSrc
    })
    .catch(error => {
      console.log("[Data Fetching Error]",error);
    });
}

export const finalRequest = (roverId , cameraId , date)  => {
  return dispatch => {


  };
};

export const getDate = date => {
  console.log(date);
  return dispatch => {
    dispatch(reqDate(date));
  };
};

const setMission = manifest => {
  return {
    type: SET_MISSION,
    payload: manifest
  };
};

const reqMission = roverId => {
  return {
    type: GET_MISSION,
    payload: roverId
  };
};

export const getMission = (roverId , selectedCamera, date)=> {
  return dispatch => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverId}?api_key=${API_KEY}`
      )
      .then(response => {
        const manifest = response.data;
        console.log(manifest);
        dispatch(setMission(manifest));
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(reqMission(roverId));
  };
};
