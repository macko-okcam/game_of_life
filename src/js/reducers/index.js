import { CLICK_CELL } from "../constants/action-types";

const initialState = {
    columns: 10,
    rows :10,
    cellBoardArray: new Array(100).fill(false)
  };
  
  function rootReducer(state = initialState, action) {


    if (action.type === CLICK_CELL) {

        // console.log(action.payload);
        
        var index = action.payload.index;
        var isAlive = action.payload.isAlive;
        // console.log("this cell was clicked " + index );        

        var newBoardArray = [
            ...state.cellBoardArray.slice(0, index),
            isAlive,
            ...state.cellBoardArray.slice(index + 1)
        ];

        // console.log(newBoardArray);
        
        return {
            ...state,
            cellBoardArray: newBoardArray
        }
        
        // return Object.assign({}, state, {
        //     cellBoard: newBoardArray
        //   });
      }
      return state;
  };
  
  export default rootReducer;