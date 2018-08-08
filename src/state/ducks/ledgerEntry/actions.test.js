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

  it("should test OPEN_EDIT_FORM action", () => {
    expect(actions.openEditForm(0)).toEqual({
      type: types.OPEN_EDIT_FORM,
      id: 0,
    });
  });
});
