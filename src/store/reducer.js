const initialState = {
  selectedMission: "spirit",
  missionManifest: "",
  selectedCamera: "FHAZZ",
  missionPhotos: "",
  missionDate:"cagadanegra"
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
      

    default:
      break;
  }

  return state;
};

export default reducer;
