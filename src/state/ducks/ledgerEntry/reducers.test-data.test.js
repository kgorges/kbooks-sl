import reducer from "./reducers";
import * as types from "./types";

describe("ledgerEntry reducers", () => {
  it("should FETCH_LIST_COMPLETED zero items on initialState", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.FETCH_LIST_COMPLETED,
      payload: {
        Items: [],
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(0);
  });

  it("should FETCH_LIST_COMPLETED one items on initialState", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.FETCH_LIST_COMPLETED,
      payload: {
        Items: [
          {
            id: 1,
            description: "something",
          },
        ],
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(1);
  });

  it("should FETCH_LIST_COMPLETED multiple items on initialState", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.FETCH_LIST_COMPLETED,
      payload: {
        Items: [
          {
            id: 1,
            description: "something",
          },
          {
            id: 2,
            description: "something_else",
          },
        ],
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(2);
  });

  it("should FETCH_LIST_COMPLETED multiple items ignoring initialState", () => {
    const initialState = {
      data: {
        items: [
          {
            id: 15,
            description: "some_old_list_entry",
          },
        ],
      },
    };

    const action = {
      type: types.FETCH_LIST_COMPLETED,
      payload: {
        Items: [
          {
            id: 1,
            description: "something",
          },
          {
            id: 2,
            description: "something_else",
          },
        ],
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(2);
  });

  it("should FETCH_LIST_FAILED", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.FETCH_LIST_FAILED,
      payload: { error: Error("Some Error") },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(0);
    expect(result.data.error).toEqual(Error("Some Error"));
  });
});
