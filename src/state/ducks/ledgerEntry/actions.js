import * as types from "./types";

export const fetchList = () => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    apiName: "KBSLLedgerEntryCRUD",
    path: "/KBSLLedgerEntry",
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
