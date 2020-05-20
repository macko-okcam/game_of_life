import { CLICK_CELL } from "../constants/action-types";

export function clickCell(payload) {
    return { type: CLICK_CELL, payload }
};