import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryRow from "./LedgerEntryRow";

describe("<LedgerEntryRow />", () => {
  let shallow;
  let wrapper;
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
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryRow entry={testData} />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a table row", async () => {
    expect(wrapper.find("WithStyles(TableRow)").length).toEqual(1);
  });

  it("should render the correct number of data columns", () => {
    expect(
      wrapper.find("WithStyles(TableRow)").find("WithStyles(TableCell)").length
    ).toEqual(7);
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
    expect(getCellContents(0)).toEqual(testData.date);
    expect(getCellContents(1)).toEqual(testData.description);
    expect(getCellContents(2)).toEqual(testData.account);
    expect(getCellContents(3)).toEqual(testData.subledgerAccount);
    expect(Number(getCellContents(4))).toEqual(testData.credit);
    expect(Number(getCellContents(5))).toEqual(testData.debit);
    expect(Number(getCellContents(6))).toEqual(
      testData.credit - testData.debit
    );
  });
});
