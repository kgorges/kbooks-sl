import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryTable from "./LedgerEntryTable";

describe("<LedgerEntryTable />", () => {
  let shallow;
  let wrapper;
  let testData = _.times(5, i => {
    return {
      id: i,
      date: `2018-01-0${i}`,
      description: `some description ${i}`,
      account: `some account ${i}`,
      subledgerAccount: `some sub account ${i}`,
      credit: i,
      debit: i * 2,
    };
  });

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryTable entries={testData} />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a table", async () => {
    expect(wrapper.find("WithStyles(Table)").length).toEqual(1);
  });

  it("should render a header row", () => {
    expect(wrapper.find("WithStyles(LedgerEntryHeaderRow)").length).toEqual(1);
  });

  it("should render a table body", () => {
    expect(wrapper.find("WithStyles(TableBody)").length).toEqual(1);
  });

  it("should render data rows", () => {
    expect(wrapper.find("WithStyles(LedgerEntryRow)").length).toEqual(
      testData.length
    );
  });
});
