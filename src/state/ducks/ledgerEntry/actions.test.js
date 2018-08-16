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
        method: "GET",
        payload: {},
      },
    });
  });

  it("should test OPEN_EDIT_FORM action", () => {
    expect(actions.openEditForm("0")).toEqual({
      type: types.OPEN_EDIT_FORM,
      id: "0",
    });
  });

  it("should test CLOSE_EDIT_FORM action", () => {
    expect(actions.closeEditForm()).toEqual({
      type: types.CLOSE_EDIT_FORM,
    });
  });

  it("should test SELECT_ITEM action", () => {
    expect(actions.selectItems(["1", "2"])).toEqual({
      type: types.SELECT_ITEMS,
      ids: ["1", "2"],
    });
  });

  it("should test DESELECT_ITEMS action", () => {
    expect(actions.deselectItems(["1", "2"])).toEqual({
      type: types.DESELECT_ITEMS,
      ids: ["1", "2"],
    });
  });

  it("should test NEW_ITEM action", () => {
    expect(actions.newItem()).toEqual({
      type: types.NEW_ITEM,
    });
  });

  it("should test SAVE_ITEM action", () => {
    expect(
      actions.saveItem({
        id: "1",
        date: "2018-01-01",
        description: "D1",
        account: "A1",
        subledgerAccount: "SLA1",
        credit: 0,
        debit: 1,
      })
    ).toEqual({
      type: types.SAVE_ITEM,
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
        method: "POST",
        payload: {
          body: {
            ID: "1",
            Date: "2018-01-01",
            Description: "D1",
            Account: "A1",
            SubledgerAccount: "SLA1",
            Credit: 0,
            Debit: 1,
          },
        },
      },
    });
  });
});
