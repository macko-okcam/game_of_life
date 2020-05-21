import { CLICK_CELL, REBUILD_GAMEBOARD } from "../constants/action-types";

export function clickCell(payload) {
    return { type: CLICK_CELL, payload }
};

export function rebuildGameBoard(payload) {
    return { type: REBUILD_GAMEBOARD, payload }
};