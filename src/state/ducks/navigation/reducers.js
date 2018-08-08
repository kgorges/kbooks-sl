import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
{
    drawer: {
      open: true|false
    },
}
*/

const drawerReducer = createReducer({})({
  [types.OPEN_NAV_DRAWER]: (state, action) => {
    return { ...state, open: true };
  },
  [types.CLOSE_NAV_DRAWER]: (state, action) => {
    return { ...state, open: false };
  },
});

export default combineReducers({
  drawer: drawerReducer,
});
