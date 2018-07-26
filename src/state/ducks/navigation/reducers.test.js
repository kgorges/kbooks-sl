import reducer from "./reducers";
import * as types from "./types";

describe("navigation reducers", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should OPEN_NAV_DRAWER on closed state", () => {
    const initialState = {
      drawer: { open: false },
    };

    const action = {
      type: types.OPEN_NAV_DRAWER,
    };

    const result = reducer(initialState, action);
    expect(result.drawer.open).toBeTruthy();
  });

  it("should CLOSE_NAV_DRAWER on open state", () => {
    const initialState = {
      drawer: { open: true },
    };

    const action = {
      type: types.CLOSE_NAV_DRAWER,
    };

    const result = reducer(initialState, action);
    expect(result.drawer.open).toBeFalsy();
  });
});
