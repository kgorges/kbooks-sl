import * as operations from "./operations";

describe("ledgerEntry operations", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should pass the fetchList operation", () => {
    expect(operations.fetchList).toBeDefined();
  });

  it("should pass the openEditForm operation", () => {
    expect(operations.openEditForm).toBeDefined();
  });

  it("should pass the selectItems operation", () => {
    expect(operations.selectItems).toBeDefined();
  });

  it("should pass the deselectItems operation", () => {
    expect(operations.deselectItems).toBeDefined();
  });
});
