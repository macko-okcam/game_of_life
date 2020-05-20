import { CLICK_CELL } from "../constants/action-types";

const initialState = {
    cellBoard: []
  };
  
  function rootReducer(state = initialState, action) {

    if (action.type === CLICK_CELL) {
        console.log("this cell was clicked");        
      }
      return state;
  };
  
  export default rootReducer;