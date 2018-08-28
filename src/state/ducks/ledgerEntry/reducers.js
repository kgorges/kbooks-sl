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
    amount: item.Amount,
    lastUpdateDate: item.LastUpdateDate,
    lastUpdatedBy: item.LastUpdatedBy,
    creationDate: item.CreationDate,
    createdBy: item.CreatedBy,
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
  [types.SAVE_ITEM_COMPLETED]: (state, action) => {
    const newItems = _.clone(state.items);
    if (_.find(newItems, { id: action.payload.Item.ID })) {
      _.remove(newItems, { id: action.payload.Item.ID });
    }
    newItems.push(transformItem(action.payload.Item));

    return {
      ...state,
      items: newItems,
      dirty: false,
    };
  },
  [types.SAVE_ITEM_FAILED]: (state, action) => {
    return {
      ...state,
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
      editId: "0",
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
  [types.SAVE_ITEM]: (state, action) => {
    return {
      ...state,
      loading: true,
      selected: [],
    };
  },
  [types.SAVE_ITEM_COMPLETED]: (state, action) => {
    return {
      ...state,
      loading: false,
      selected: [],
      edit: false,
      editId: "0",
    };
  },
  [types.SAVE_ITEM_FAILED]: (state, action) => {
    return {
      ...state,
      loading: false,
      selected: [],
      edit: false,
      editId: "0",
    };
  },
  [types.CHANGE_PAGE]: (state, action) => {
    return {
      ...state,
      currentPage: action.newPage,
    };
  },
});

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
