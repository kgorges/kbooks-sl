import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryList, { StyledLedgerEntryList } from "./LedgerEntryList";

describe("<LedgerEntryList />", () => {
  let shallow;
  let wrapper;

  const mockFetchList = jest.fn();

  beforeEach(async () => {
    mockFetchList.mockReset();
    shallow = createShallow();
    wrapper = shallow(
      <StyledLedgerEntryList entries={[]} fetchList={mockFetchList} />
    );
  });

  afterEach(() => {});

  it("should have a props mapped from initialState", () => {
    expect(wrapper.prop("entries")).toBeDefined();
    expect(wrapper.prop("fetchList")).toBeDefined();
  });

  it("should render a paper", async () => {
    wrapper = wrapper.dive(); // Skip with styled component
    expect(wrapper.find("WithStyles(Paper)").length).toEqual(1);
  });

  it("should invoke fetchList after mounting", () => {
    wrapper = wrapper.dive(); // Skip with styled component (causes mount to happen)
    expect(mockFetchList).toHaveBeenCalledTimes(1);
  });

  it("should render a LedgerEntryToolbar", () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(LedgerEntryToolbar)").length).toEqual(1);
  });

  it("should render a LedgerEntryTable", () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(LedgerEntryTable)").length).toEqual(1);
  });
});
