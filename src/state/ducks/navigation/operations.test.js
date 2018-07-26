import * as operations from "./operations";

describe("navigation operations", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should pass the openNavDrawer operation", () => {
    expect(operations.openNavDrawer()).toBeDefined();
  });

  it("should pass the closeNavDrawer operation", () => {
    expect(operations.closeNavDrawer()).toBeDefined();
  });
});
