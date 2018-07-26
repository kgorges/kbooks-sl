import * as types from "./types";

export const fetchList = () => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    apiName: "KBSLLedgerEntryCRUD",
    path: "/KBSLLedgerEntry",
  },
});

export const fetchDetail = id => ({
  type: types.FETCH_DETAIL,
  meta: {
    async: true,
    apiName: "KBSLLedgerEntryCRUD",
    path: "/KBSLLedgerEntry",
    id: id,
  },
});
