import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryHeaderRow from "./LedgerEntryHeaderRow";

describe("<LedgerEntryHeaderRow />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryHeaderRow />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a table header row", async () => {
    expect(wrapper.find("WithStyles(TableHead)").length).toEqual(1);
    expect(wrapper.find("WithStyles(TableRow)").length).toEqual(1);
  });

  it("should render the correct number of data columns", () => {
    expect(wrapper.find("WithStyles(TableCell)").length).toEqual(8);
  });

  it("should render the correct headers", () => {
    const expectedHeaders = [
      "Date",
      "Description",
      "Account",
      "Subaccount",
      "Credit",
      "Debit",
      "Balance",
    ];

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(0)
        .find("WithStyles(Checkbox)").length
    ).toEqual(1);

    _.map(expectedHeaders, (h, i) => {
      expect(
        wrapper
          .find("WithStyles(TableCell)")
          .at(i + 1)
          .dive()
          .dive()
          .text()
      ).toEqual(h);
    });
  });
});
