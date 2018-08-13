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
      <StyledLedgerEntryList
        entries={[
          {
            id: "1",
            date: "2018-01-01",
            description: "Some Description",
            account: "A1",
            subledgerAccount: "SLA1",
            credit: 1,
            debit: 0,
          },
          {
            id: "2",
            date: "2018-01-01",
            description: "Some Description",
            account: "A2",
            subledgerAccount: "SLA2",
            credit: 0,
            debit: 1,
          },
          {
            id: "3",
            date: "2018-01-01",
            description: "Some Description",
            account: "A3",
            subledgerAccount: "SLA3",
            credit: 10,
            debit: 0,
          },
        ]}
        editFormOpen={false}
        fetchList={mockFetchList}
      />
    );
  });

  afterEach(() => {});

  it("should have a props mapped from initialState", () => {
    expect(wrapper.prop("classes")).toBeDefined();
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
    expect(
      wrapper.find("Connect(WithStyles(LedgerEntryToolbar))").length
    ).toEqual(1);
  });

  it("should render a LedgerEntryTable", () => {
    wrapper = wrapper.dive();
    expect(
      wrapper.find("Connect(WithStyles(LedgerEntryTable))").length
    ).toEqual(1);
  });

  it("should render a LedgerEntryFooterRow", () => {
    wrapper = wrapper.dive();
    expect(
      wrapper.find("Connect(WithStyles(LedgerEntryFooterRow))").length
    ).toEqual(1);
  });

  it("should render an edit form when prop indicates it is open", () => {
    expect(
      wrapper.dive().find("Connect(WithTheme(WithWidth(WithMobileDialog)))")
        .length
    ).toEqual(1);
  });
});
