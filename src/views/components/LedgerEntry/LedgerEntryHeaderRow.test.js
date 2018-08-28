import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryHeaderRow as LedgerEntryHeaderRow } from "./LedgerEntryHeaderRow";

describe("<LedgerEntryHeaderRow />", () => {
  let shallow;
  let wrapper;

  const mockSelectItems = jest.fn();
  const mockDeselectItems = jest.fn();

  beforeEach(async () => {
    mockSelectItems.mockReset();
    mockDeselectItems.mockReset();
    shallow = createShallow();
    wrapper = shallow(
      <LedgerEntryHeaderRow
        entries={[{ id: "1" }, { id: "2" }, { id: "3" }]}
        selected={[]}
        selectItems={mockSelectItems}
        deselectItems={mockDeselectItems}
      />
    );
  });

  afterEach(() => {});

  it("should render a table header row", async () => {
    wrapper = wrapper.dive();

    expect(wrapper.find("WithStyles(TableHead)").length).toEqual(1);
    expect(wrapper.find("WithStyles(TableRow)").length).toEqual(1);
  });

  it("should render the correct number of data columns", () => {
    wrapper = wrapper.dive();

    expect(wrapper.find("WithStyles(TableCell)").length).toEqual(6);
  });

  it("should render the correct headers", () => {
    wrapper = wrapper.dive();

    const expectedHeaders = [
      "Date",
      "Description",
      "Account",
      "Subaccount",
      "Amount",
    ];

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(0)
        .find("WithStyles(Checkbox)").length
    ).toEqual(1);

    expect(
      wrapper
        .find("WithStyles(TableCell)")
        .at(0)
        .find("WithStyles(Checkbox)")
        .prop("checked")
    ).toBeFalsy();

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

  it("should call selectItems upon click of checkbox cell", () => {
    wrapper = wrapper.dive();
    wrapper
      .find("WithStyles(TableCell)")
      .at(0)
      .simulate("click");
    expect(mockSelectItems).toHaveBeenCalledWith(["1", "2", "3"]);
  });

  it("should show the checkbox checked if all items are selected", () => {
    wrapper.setProps({ selected: ["1", "2", "3"] });
    expect(
      wrapper
        .dive()
        .find("WithStyles(TableCell)")
        .at(0)
        .find("WithStyles(Checkbox)")
        .prop("checked")
    ).toBeTruthy();
  });

  it("should call deselectItems if all items are selected", () => {
    wrapper.setProps({ selected: ["1", "2", "3"] });
    wrapper = wrapper.dive();
    wrapper
      .find("WithStyles(TableCell)")
      .at(0)
      .simulate("click");
    expect(mockDeselectItems).toHaveBeenCalledWith(["1", "2", "3"]);
  });
});
