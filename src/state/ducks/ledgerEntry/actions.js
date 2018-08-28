import * as types from "./types";

export const fetchList = () => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    apiName: "KBSLLedgerEntryCRUD",
    path: "/KBSLLedgerEntry",
    method: "GET",
    payload: {},
  },
});

export const openEditForm = id => ({
  type: types.OPEN_EDIT_FORM,
  id: id,
});

export const closeEditForm = () => ({
  type: types.CLOSE_EDIT_FORM,
});

export const selectItems = ids => ({ type: types.SELECT_ITEMS, ids: ids });

export const deselectItems = ids => ({
  type: types.DESELECT_ITEMS,
  ids: ids,
});

export const newItem = () => ({ type: types.NEW_ITEM });

const transformItem = item => {
  return {
    ID: item.id,
    Date: item.date,
    Description: item.description,
    Account: item.account,
    SubledgerAccount: item.subledgerAccount,
    Amount: item.amount,
    LastUpdateDate: item.lastUpdateDate,
    LastUpdatedBy: item.lastUpdatedBy,
    CreationDate: item.creationDate,
    CreatedBy: item.createdBy,
  };
};
export const saveItem = item => ({
  type: types.SAVE_ITEM,
  meta: {
    async: true,
    apiName: "KBSLLedgerEntryCRUD",
    path: "/KBSLLedgerEntry",
    method: "POST",
    payload: { body: transformItem(item) },
  },
});

export const changePage = newPage => ({
  type: types.CHANGE_PAGE,
  newPage: newPage,
});

export const changeRowsPerPage = newRowsPerPage => ({
  type: types.CHANGE_ROWS_PER_PAGE,
  newRowsPerPage: newRowsPerPage,
});
