import * as operations from "./operations";

describe("ledgerEntry operations", () => {
  it("should not fail", () => {
    expect(1).toEqual(1);
  });

  it("should pass the fetchList operation", () => {
    expect(operations.fetchList()).toBeDefined();
  });

  it("should pass the fetchDetail operation", () => {
    expect(operations.fetchDetail(1)).toBeDefined();
  });
});
