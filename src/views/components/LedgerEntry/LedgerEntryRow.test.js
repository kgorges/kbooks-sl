import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryRow as LedgerEntryRow } from "./LedgerEntryRow";

describe("<LedgerEntryRow />", () => {
  let shallow;
  let wrapper;

  const mockOpenEditForm = jest.fn();
  const mockSelectItems = jest.fn();
  const mockDeselectItems = jest.fn();

  let testData = {
    id: 1,
    date: "2018-01-01",
    description: "some description",
    account: "some account",
    subledgerAccount: "some sub account",
    credit: 1,
    debit: 0,
  };

  beforeEach(async () => {
    mockOpenEditForm.mockReset();
    mockSelectItems.mockReset();
    mockDeselectItems.mockReset();
    shallow = createShallow();
    wrapper = shallow(
      <LedgerEntryRow
        entry={testData}
        selected={[]}
        openEditForm={mockOpenEditForm}
        selectItems={mockSelectItems}
        deselectItems={mockDeselectItems}
      />
    );
  });

  afterEach(() => {});

  it("should have a props mapped from initialState", () => {
    expect(wrapper.prop("classes")).toBeDefined();
    expect(wrapper.prop("entry")).toBeDefined();
    expect(wrapper.prop("selected")).toBeDefined();
    expect(wrapper.prop("openEditForm")).toBeDefined();
    expect(wrapper.prop("selectItems")).toBeDefined();
    expect(wrapper.prop("deselectItems")).toBeDefined();
  });

  it("should render a table row", async () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(TableRow)").length).toEqual(1);
  });

  it("should render the correct number of data columns", () => {
    wrapper = wrapper.dive();
    expect(
      wrapper.find("WithStyles(TableRow)").find("WithStyles(TableCell)").length
    ).toEqual(8);
  });

  const getCellContents = i => {
    return wrapper
      .find("WithStyles(TableRow)")
      .find("WithStyles(TableCell)")
      .at(i)
      .dive()
      .dive()
      .text();
  };

  it("should render the correct data in the columns", () => {
    wrapper = wrapper.dive();
    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(0)
        .find("WithStyles(Checkbox)").length
    ).toEqual(1);
    expect(getCellContents(1)).toEqual(testData.date);
    expect(getCellContents(2)).toEqual(testData.description);
    expect(getCellContents(3)).toEqual(testData.account);
    expect(getCellContents(4)).toEqual(testData.subledgerAccount);
    expect(Number(getCellContents(5))).toEqual(testData.credit);
    expect(Number(getCellContents(6))).toEqual(testData.debit);
    expect(Number(getCellContents(7))).toEqual(
      testData.credit - testData.debit
    );
  });

  it("should invoke the mock function when clicking a non-checkbox cell", () => {
    wrapper = wrapper.dive();
    wrapper
      .find("WithStyles(TableCell)")
      .at(1)
      .simulate("click");
    expect(mockOpenEditForm).toHaveBeenCalled();
  });

  it("should invoke the mock function when clicking a checkbox", () => {
    wrapper = wrapper.dive();
    wrapper
      .find("WithStyles(TableCell)")
      .at(0)
      .simulate("click");
    expect(mockSelectItems).toHaveBeenCalled();
  });
});
