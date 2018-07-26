import apiService from "./apiService";
import { API } from "aws-amplify";

describe("apiService", () => {
  it("should pass", () => {
    expect(1).toEqual(1);
  });

  it("should pass non-meta non-async action to next", () => {
    const fakeNext = jest.fn();
    const action = { type: "ACTION" };

    apiService({})(fakeNext)(action);
    expect(fakeNext).toHaveBeenCalledWith({ type: "ACTION" });
  });

  it("should invoke completed action from async action", async () => {
    const testData = [];
    API.get = jest.fn().mockImplementation((apiName, path) => {
      return Promise.resolve({
        Items: testData,
      });
    });
    const fakeNext = jest.fn();
    const action = {
      type: "ACTION",
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
      },
    };
    const result = await apiService({})(fakeNext)(action);
    expect(API.get).toHaveBeenCalledWith(
      "KBSLLedgerEntryCRUD",
      "/KBSLLedgerEntry"
    );
    expect(fakeNext).toHaveBeenCalledWith({
      type: "ACTION_COMPLETED",
      payload: { Items: testData },
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
      },
    });
  });

  it("should invoke failed action from failed async action", async () => {
    const testData = [];
    API.get = jest.fn().mockImplementation((apiName, path) => {
      return Promise.reject(Error("Mock Error Message"));
    });
    const fakeNext = jest.fn();
    const action = {
      type: "ACTION",
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
      },
    };
    const result = await apiService({})(fakeNext)(action);
    expect(API.get).toHaveBeenCalledWith(
      "KBSLLedgerEntryCRUD",
      "/KBSLLedgerEntry"
    );
    expect(fakeNext).toHaveBeenCalledWith({
      type: "ACTION_FAILED",
      payload: Error("Mock Error Message"),
      meta: {
        async: true,
        apiName: "KBSLLedgerEntryCRUD",
        path: "/KBSLLedgerEntry",
      },
    });
  });
});
