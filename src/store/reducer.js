const initialState = {
  selectedMission: "Curiosity",
  missionManifest: "",
  selectedCamera: "FHAZ",
  missionPhoto: "",
  missionDate:"2012-08-06",
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MISSION":
     
      return {
        ...state,
        selectedMission: action.payload,
        
      };
    case "SET_MISSION": 
      return {
        ...state,
        missionManifest: action.payload,
        
      
      };
      case "GET_DATE": 
      return {
        ...state,
        missionDate: action.payload,     
      };
      case "GET_CAMERA":
        return {
          ...state,
          selectedCamera: action.payload
        }
      case "FINAL_STUFF": 
        return {
          ...state,
          missionPhoto: action.payload
        }
      

    default:
      break;
  }

  return state;
};

export default reducer;
