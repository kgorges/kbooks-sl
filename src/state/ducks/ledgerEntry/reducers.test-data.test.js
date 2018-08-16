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

  it("should SAVE_ITEM_COMPLETED on initialState", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.SAVE_ITEM_COMPLETED,
      payload: {
        Item: {
          ID: "1",
          Date: "2018-01-01",
          Description: "Description1",
          Account: "A1",
          SubledgerAccount: "SLA1",
          Credit: 0,
          Debit: 1,
        },
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(1);
    expect(result.data.dirty).toBeFalsy();
  });

  it("should SAVE_ITEM_COMPLETED on existing item", () => {
    const initialState = {
      data: {
        items: [
          {
            id: "1",
            date: "2018-01-01",
            description: "Description1",
            account: "A1",
            subledgerAccount: "SLA1",
            credit: 0,
            debit: 100,
          },
        ],
      },
    };

    const action = {
      type: types.SAVE_ITEM_COMPLETED,
      payload: {
        Item: {
          ID: "1",
          Date: "2018-01-01",
          Description: "Description1",
          Account: "A1",
          SubledgerAccount: "SLA1",
          Credit: 0,
          Debit: 1,
        },
      },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(1);
    expect(result.data.items[0]).toEqual({
      id: "1",
      date: "2018-01-01",
      description: "Description1",
      account: "A1",
      subledgerAccount: "SLA1",
      credit: 0,
      debit: 1,
    });
    expect(result.data.dirty).toBeFalsy();
  });

  it("should SAVE_ITEM_FAILED", () => {
    const initialState = {
      data: { items: [] },
    };

    const action = {
      type: types.SAVE_ITEM_FAILED,
      payload: { error: Error("Some Error") },
    };

    const result = reducer(initialState, action);
    expect(result.data.items.length).toEqual(0);
    expect(result.data.dirty).toBeFalsy();
    expect(result.data.error).toEqual(Error("Some Error"));
  });
});
