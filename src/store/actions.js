import axios from "axios";

export const GET_MISSION = "GET_MISSION";
export const SET_MISSION = "SET_MISSION";
export const GET_DATE = "GET_DATE";
const API_KEY = "XV3ByWizINpFWnvtkhbEupv6ejBkAL8jAcFSWKnW";

const reqDate = date => {
  return {
    type:GET_DATE,
    payload : date 
  }
}

export const getDate = date => {
  console.log(date)
  return dispatch => {
    dispatch(reqDate(date))
  }
}

const setMission = manifest => {
  return {
    type: SET_MISSION,
    payload: manifest
  };
};

const reqMission = (roverId) => {
  return {
    type: GET_MISSION,
    payload: roverId,
   
  };
};

export const getMission = roverId => {
  return dispatch => {
   
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverId}?api_key=${API_KEY}`
      )
      .then(response => {
        const manifest= response.data
        console.log(manifest)
        dispatch(setMission(manifest))
      })
      .catch(error => {
        console.log(error);
      });
    dispatch(reqMission(roverId));
  };
};
