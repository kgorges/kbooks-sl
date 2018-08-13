import _ from "lodash";
import moment from "moment";
import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
{
    data: { 
      items: [ ],
      fetchDate: 'YYYY-MM-DD HH24:MI:SS'
      error: Error,
      dirty: true|false,
    },
    ui: {
      loading: true|false,
      selected: [ String ],
      currentPage: Number,
      rowsPerPage: Number,
      edit: true|false,
      editId: String
    }
}
*/

const transformItem = item => {
  return {
    id: item.ID,
    date: item.Date,
    description: item.Description,
    account: item.Account,
    subledgerAccount: item.SubledgerAccount,
    credit: item.Credit,
    debit: item.Debit,
  };
};

const transformItemList = items => {
  return _.map(items, i => {
    return transformItem(i);
  });
};

const dataReducer = createReducer([])({
  [types.FETCH_LIST_COMPLETED]: (state, action) => {
    return {
      ...state,
      items: transformItemList(action.payload.Items),
      fetchDate: moment().format("YYYY-MM-DD HH24:MI:SS"),
      dirty: false,
    };
  },
  [types.FETCH_LIST_FAILED]: (state, action) => {
    return {
      ...state,
      items: [],
      fetchDate: moment().format("YYYY-MM-DD HH24:MI:SS"),
      error: action.payload.error,
      dirty: false,
    };
  },
});

const uiReducer = createReducer([])({
  [types.FETCH_LIST]: (state, action) => {
    return {
      ...state,
      loading: true,
      selected: [],
    };
  },
  [types.FETCH_LIST_COMPLETED]: (state, action) => {
    return {
      ...state,
      loading: false,
      selected: [],
    };
  },
  [types.FETCH_LIST_FAILED]: (state, action) => {
    return {
      ...state,
      loading: false,
      selected: [],
    };
  },
  [types.OPEN_EDIT_FORM]: (state, action) => {
    return {
      ...state,
      edit: true,
      editId: action.id,
    };
  },
  [types.CLOSE_EDIT_FORM]: (state, action) => {
    return {
      ...state,
      edit: false,
    };
  },
  [types.NEW_ITEM]: (state, action) => {
    return {
      ...state,
      edit: true,
      editId: "new",
    };
  },
  [types.SELECT_ITEMS]: (state, action) => {
    return {
      ...state,
      selected: _.concat(state.selected, action.ids),
    };
  },
  [types.DESELECT_ITEMS]: (state, action) => {
    const newSelected = [];
    _.map(state.selected, s => {
      if (action.ids.indexOf(s) === -1) {
        newSelected.push(s);
      }
    });
    return {
      ...state,
      selected: newSelected,
    };
  },
});

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
