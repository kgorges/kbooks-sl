import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryTable as LedgerEntryTable } from "./LedgerEntryTable";

describe("<LedgerEntryTable />", () => {
  let shallow;
  let wrapper;
  let testData = _.times(3, i => {
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
    wrapper = shallow(
      <LedgerEntryTable entries={testData} rowsPerPage={5} currentPage={0} />
    );
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a table", async () => {
    expect(wrapper.find("WithStyles(Table)").length).toEqual(1);
  });

  it("should render a header row", () => {
    expect(
      wrapper.find("Connect(WithStyles(LedgerEntryHeaderRow))").length
    ).toEqual(1);
  });

  it("should render a table body", () => {
    expect(wrapper.find("WithStyles(TableBody)").length).toEqual(1);
  });

  it("should render data rows", () => {
    expect(wrapper.find("Connect(WithStyles(LedgerEntryRow))").length).toEqual(
      testData.length
    );
  });

  it("should render an empty row with the proper height", () => {
    expect(
      wrapper.find("WithStyles(TableBody)").find("WithStyles(TableRow)").length
    ).toEqual(1);
    expect(
      wrapper
        .find("WithStyles(TableBody)")
        .find("WithStyles(TableRow)")
        .prop("style")
    ).toEqual({ height: (5 - testData.length) * 49 });
  });
});
