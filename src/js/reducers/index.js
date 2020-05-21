import { CLICK_CELL, REBUILD_GAMEBOARD, UPDATE_DIMENSIONS, UPDATE_NEXTCYCLE } from "../constants/action-types";

const initialState = {
    columns: 10,
    rows :10,
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
                    rows : parseInt(action.payload.rows),
                    columns: parseInt(action.payload.columns),
                    cellBoardArray: new Array(action.payload.columns * action.payload.rows).fill(false)
                }
            break;
        case UPDATE_DIMENSIONS:
                return {
                    ...state,
                    rows : parseInt(action.payload.rows),
                    columns: parseInt(action.payload.columns)
                }
            break;
        case UPDATE_NEXTCYCLE:
                console.log("calculating next life cycle!!!");
                
            break;
        default:
            break;
    }

      return state;
  };
  
  export default rootReducer;