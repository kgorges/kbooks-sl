import _ from "lodash";
import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
{
    detail: {
      item: product,
      error: Error,
      loading: true|false,
      dirty: true|false,
    },
    list: { 
      items: [ ],
      error: Error,
      loading: true|false,
      dirty: true|false,
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

const listReducer = createReducer([])({
  [types.FETCH_LIST_COMPLETED]: (state, action) => {
    return { items: transformItemList(action.payload.Items) };
  },
  [types.FETCH_LIST_FAILED]: (state, action) => {
    return { items: [], error: action.payload.error };
  },
});

const detailReducer = createReducer([])({
  [types.FETCH_DETAIL_COMPLETED]: (state, action) => {
    return { item: transformItem(action.payload.Item) };
  },
  [types.FETCH_DETAIL_FAILED]: (state, action) => {
    return { item: {}, error: action.payload.error };
  },
});

export default combineReducers({
  list: listReducer,
  detail: detailReducer,
});
