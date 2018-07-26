import * as types from "./types";
import * as actions from "./actions";

describe("ledgerEntry actions", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should test FETCH_LIST action", () => {
    expect(actions.fetchList()).toEqual({
      type: types.FETCH_LIST,
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
      },
    });
  });

  it("should test FETCH_DETAIL action", () => {
    expect(actions.fetchDetail(1)).toEqual({
      type: types.FETCH_DETAIL,
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
        id: 1,
      },
    });
  });
});
