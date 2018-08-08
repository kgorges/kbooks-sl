import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryFooterRow as LedgerEntryFooterRow } from "./LedgerEntryFooterRow";

describe("<LedgerEntryFooterRow />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryFooterRow currentPage={1} rowCount={20} />);
  });

  afterEach(() => {});

  it("should have all props", async () => {
    expect(wrapper.prop("classes")).toBeDefined();
    expect(wrapper.prop("currentPage")).toBeDefined();
    expect(wrapper.prop("rowCount")).toBeDefined();
  });

  it("should render a table pagination", async () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(TablePagination)").length).toEqual(1);
  });

  it("should have correct table pagination props", async () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(TablePagination)").prop("page")).toEqual(1);
    expect(wrapper.find("WithStyles(TablePagination)").prop("count")).toEqual(
      20
    );
    expect(
      wrapper.find("WithStyles(TablePagination)").prop("rowsPerPage")
    ).toEqual(5);
  });
});
