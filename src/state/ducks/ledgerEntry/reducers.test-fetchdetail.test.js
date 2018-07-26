import reducer from "./reducers";
import * as types from "./types";

describe("ledgerEntry reducers", () => {
  it("should FETCH_DETAIL_COMPLETED on initialState", () => {
    const initialState = {
      detail: { item: {} },
    };

    const action = {
      type: types.FETCH_DETAIL_COMPLETED,
      payload: {
        Item: { ID: 1, Description: "something" },
      },
    };

    const result = reducer(initialState, action);
    expect(result.detail.item).toEqual({ id: 1, description: "something" });
  });

  it("should FETCH_LIST_FAILED", () => {
    const initialState = {
      list: { items: [] },
    };

    const action = {
      type: types.FETCH_LIST_FAILED,
      payload: { error: Error("Some Error") },
    };

    const result = reducer(initialState, action);
    expect(result.list.items.length).toEqual(0);
    expect(result.list.error).toEqual(Error("Some Error"));
  });
});
