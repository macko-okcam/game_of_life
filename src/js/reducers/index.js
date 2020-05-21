import { CLICK_CELL, REBUILD_GAMEBOARD, UPDATE_DIMENSIONS, UPDATE_NEXTCYCLE } from "../constants/action-types";

const initialState = {
    columns: 10,
    rows :10,
    cellBoardArray: []
  };
  
  function getNextCycleArray(currentCycleArray){

    var nextCycleArray = new Array(currentCycleArray.length).fill(false)
    
    currentCycleArray.forEach(function (value, i) {
        if(value){
            console.log("hurray!!!" + element);  
        }
    });

    return nextCycleArray
  }
  
  function getClearCycleArray(currentCycleArray){

    var nextCycleArray = new Array(currentCycleArray.length).fill(false)
    
    return nextCycleArray

  }

  function getInvertedCycleArray(currentCycleArray){

    var nextCycleArray = new Array(currentCycleArray.length).fill(false)
    
    currentCycleArray.forEach(function (value, i) {
        nextCycleArray[i] = !value
    });

    return nextCycleArray
  }

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

                var newBoardArray = []

                if (action.payload.updateType == "invert") {

                    newBoardArray =  getInvertedCycleArray(state.cellBoardArray);

                    return {
                        ...state,
                        cellBoardArray: newBoardArray
                    }

                }else if (action.payload.updateType == "clear") {

                    newBoardArray =  getClearCycleArray(state.cellBoardArray);

                    return {
                        ...state,
                        cellBoardArray: newBoardArray
                    }

                }else if ( action.payload.updateType == "next" ){

                    newBoardArray =  getNextCycleArray(state.cellBoardArray);

                    return {
                        ...state,
                        cellBoardArray: newBoardArray
                    }

                }                
                
            break;
        default:
            break;
    }

      return state;
  };
  
  export default rootReducer;