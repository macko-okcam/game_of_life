import { CLICK_CELL, REBUILD_GAMEBOARD } from "../constants/action-types";

const initialState = {
    columns: 10,
    rows :15,
    cellBoardArray: []
  };
  
  function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CLICK_CELL:
                var index = action.payload.index;
                var isAlive = action.payload.isAlive;
        
                var newBoardArray = [
                    ...state.cellBoardArray.slice(0, index),
                    isAlive,
                    ...state.cellBoardArray.slice(index + 1)
                ];
                
                return {
                    ...state,
                    cellBoardArray: newBoardArray
                }
            break;
        case REBUILD_GAMEBOARD:
                return {
                    ...state,
                    cellBoardArray: new Array(action.payload.columns * action.payload.rows).fill(false)
                }
            break;
        default:
            break;
    }

      return state;
  };
  
  export default rootReducer;