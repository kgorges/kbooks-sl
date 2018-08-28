import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryEditForm as LedgerEntryEditForm } from "./LedgerEntryEditForm";

describe("<LedgerEntryEditForm />", () => {
  let shallow;
  let wrapper;

  const mockCloseEditForm = jest.fn();
  const mockSaveItem = jest.fn();

  beforeEach(async () => {
    mockCloseEditForm.mockReset();
    mockSaveItem.mockReset();

    shallow = createShallow();
    wrapper = shallow(
      <LedgerEntryEditForm
        isOpen={false}
        entry={{
          id: "1",
          date: "2018-01-01",
          description: "desc",
          account: "acct",
          subledgerAccount: "sla",
          amount: 100,
        }}
        closeEditForm={mockCloseEditForm}
        saveItem={mockSaveItem}
      />
    );
  });

  afterEach(() => {});

  it("should have all props", async () => {
    expect(wrapper.prop("classes")).toBeDefined();
    expect(wrapper.prop("isOpen")).toBeDefined();
    expect(wrapper.prop("closeEditForm")).toBeDefined();
    expect(wrapper.prop("saveItem")).toBeDefined();
  });

  it("should render a dialog", async () => {
    wrapper = wrapper.dive();
    //console.log(wrapper.debug());
    expect(wrapper.find("WithStyles(Dialog)").length).toEqual(1);
  });

  it("should render a date input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(0);
    expect(dateWrapper.prop("label")).toEqual("Date");
    expect(dateWrapper.prop("type")).toEqual("date");
    expect(dateWrapper.prop("value")).toEqual("2018-01-01");
  });

  it("should render a description text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(1);
    expect(dateWrapper.prop("label")).toEqual("Description");
    expect(dateWrapper.prop("type")).toEqual("text");
    expect(dateWrapper.prop("value")).toEqual("desc");
  });

  it("should render a account text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(2);
    expect(dateWrapper.prop("label")).toEqual("Account");
    expect(dateWrapper.prop("type")).toEqual("text");
    expect(dateWrapper.prop("value")).toEqual("acct");
  });

  it("should render a subledger account text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(3);
    expect(dateWrapper.prop("label")).toEqual("Subledger Account");
    expect(dateWrapper.prop("type")).toEqual("text");
    expect(dateWrapper.prop("value")).toEqual("sla");
  });

  it("should render a amount text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(4);
    expect(dateWrapper.prop("label")).toEqual("Amount");
    expect(dateWrapper.prop("type")).toEqual("number");
    expect(dateWrapper.prop("value")).toEqual(100);
  });

  it("should render a save button", () => {
    wrapper = wrapper.dive();
    const buttonWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogActions)")
      .find("WithStyles(Button)")
      .at(1)
      .dive();
    expect(buttonWrapper.contains("Save")).toBeTruthy();
  });

  it("should invoke saveItem when save button is clicked", () => {
    wrapper = wrapper.dive();
    const buttonWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogActions)")
      .find("WithStyles(Button)")
      .at(1)
      .dive();
    buttonWrapper.simulate("click");
    expect(mockSaveItem).toHaveBeenCalled();
    //expect(mockCloseEditForm).toHaveBeenCalled();
  });

  it("should render a cancel button", () => {
    wrapper = wrapper.dive();
    const buttonWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogActions)")
      .find("WithStyles(Button)")
      .at(0)
      .dive();
    expect(buttonWrapper.contains("Cancel")).toBeTruthy();
  });

  /*
  it("should invoke closeEditForm when close button is clicked", () => {
    wrapper = wrapper.dive();
    const buttonWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogActions)")
      .find("WithStyles(Button)")
      .at(1)
      .dive();
    buttonWrapper.simulate("click");
    expect(mockCloseEditForm).toHaveBeenCalled();
  });
  */
});
