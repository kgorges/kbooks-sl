import * as types from "./types";
import * as actions from "./actions";

describe("navigation actions", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should test OPEN_NAV_DRAWER action", () => {
    expect(actions.openNavDrawer()).toEqual({
      type: types.OPEN_NAV_DRAWER,
    });
  });

  it("should test CLOSE_NAV_DRAWER action", () => {
    expect(actions.closeNavDrawer()).toEqual({
      type: types.CLOSE_NAV_DRAWER,
    });
  });
});
