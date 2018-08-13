import reducer from "./reducers";
import * as types from "./types";

describe("ledgerEntry reducers", () => {
  it("should OPEN_EDIT_FORM", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: [],
        currentPage: 1,
        rowsPerPage: 5,
        edit: false,
        editId: "0",
      },
    };

    const action = {
      type: types.OPEN_EDIT_FORM,
      id: "5",
    };

    const result = reducer(initialState, action);
    expect(result.ui.edit).toBeTruthy();
    expect(result.ui.editId).toEqual("5");
  });

  it("should CLOSE_EDIT_FORM", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: [],
        currentPage: 1,
        rowsPerPage: 5,
        edit: true,
        editId: "3",
      },
    };

    const action = {
      type: types.CLOSE_EDIT_FORM,
    };

    const result = reducer(initialState, action);
    expect(result.ui.edit).toBeFalsy();
    expect(result.ui.editId).toEqual("3");
  });

  it("should SELECT_ITEMS on empty initial state", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: [],
        currentPage: 1,
        rowsPerPage: 5,
        edit: false,
        editId: "0",
      },
    };

    const action = {
      type: types.SELECT_ITEMS,
      ids: ["1", "2"],
    };

    const result = reducer(initialState, action);
    expect(result.ui.selected.length).toEqual(2);
    expect(result.ui.selected[0]).toEqual("1");
    expect(result.ui.selected[1]).toEqual("2");
  });

  it("should SELECT_ITEMS on non-empty initial state", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: ["2", "3"],
        currentPage: 1,
        rowsPerPage: 5,
        edit: false,
        editId: "0",
      },
    };

    const action = {
      type: types.SELECT_ITEMS,
      ids: ["1", "4"],
    };

    const result = reducer(initialState, action);
    expect(result.ui.selected.length).toEqual(4);
    expect(result.ui.selected[0]).toEqual("2");
    expect(result.ui.selected[1]).toEqual("3");
    expect(result.ui.selected[2]).toEqual("1");
    expect(result.ui.selected[3]).toEqual("4");
  });

  it("should DESELECT_ITEMS on non-empty initial state", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: ["2", "3", "4"],
        currentPage: 1,
        rowsPerPage: 5,
        edit: false,
        editId: "0",
      },
    };

    const action = {
      type: types.DESELECT_ITEMS,
      ids: ["2", "4"],
    };

    const result = reducer(initialState, action);
    expect(result.ui.selected.length).toEqual(1);
    expect(result.ui.selected[0]).toEqual("3");
  });

  it("should NEW_ITEM", () => {
    const initialState = {
      ui: {
        loading: false,
        selected: [],
        currentPage: 1,
        rowsPerPage: 5,
        edit: false,
        editId: "0",
      },
    };

    const action = {
      type: types.NEW_ITEM,
    };

    const result = reducer(initialState, action);
    expect(result.ui.edit).toBeTruthy();
    expect(result.ui.editId).toEqual("new");
  });
});
