import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryFooterRow as LedgerEntryFooterRow } from "./LedgerEntryFooterRow";

describe("<LedgerEntryFooterRow />", () => {
  let shallow;
  let wrapper;

  const mockChangePage = jest.fn();

  beforeEach(async () => {
    mockChangePage.mockReset();
    shallow = createShallow();
    wrapper = shallow(
      <LedgerEntryFooterRow
        currentPage={1}
        rowCount={20}
        changePage={mockChangePage}
      />
    );
  });

  afterEach(() => {});

  it("should have all props", () => {
    expect(wrapper.prop("classes")).toBeDefined();
    expect(wrapper.prop("currentPage")).toBeDefined();
    expect(wrapper.prop("rowCount")).toBeDefined();
    expect(wrapper.prop("changePage")).toBeDefined();
  });

  it("should render a table pagination", () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(TablePagination)").length).toEqual(1);
  });

  it("should have correct table pagination props", () => {
    wrapper = wrapper.dive();
    expect(wrapper.find("WithStyles(TablePagination)").prop("page")).toEqual(1);
    expect(wrapper.find("WithStyles(TablePagination)").prop("count")).toEqual(
      20
    );
    expect(
      wrapper.find("WithStyles(TablePagination)").prop("rowsPerPage")
    ).toEqual(5);
  });

  it("should invoke changePage upon page increment", () => {
    wrapper = wrapper.dive();
    console.log(wrapper.debug());
    wrapper.simulate("changePage");
    expect(mockChangePage).toHaveBeenCalled();
  });
});
