import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";

const styles = theme => ({});

class LedgerEntryHeaderRow extends Component {
  render() {
    const { entries, selected, selectItems, deselectItems } = this.props;

    const areAllSelected =
      entries.length > 0 && entries.length === selected.length;

    const selectAllItems = () => {
      const selectedItems = _.map(entries, e => {
        return e.id;
      });
      deselectItems(selectedItems);
      if (!areAllSelected) {
        selectItems(selectedItems);
      }
    };

    const headers = [
      "Date",
      "Description",
      "Account",
      "Subaccount",
      "Credit",
      "Debit",
      "Balance",
    ];

    return (
      <TableHead>
        <TableRow>
          <TableCell
            key={-1}
            padding="checkbox"
            onClick={() => selectAllItems()}
          >
            <Checkbox checked={areAllSelected} />
          </TableCell>
          {_.map(headers, (h, i) => {
            return <TableCell key={i}>{h}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    );
  }
}

LedgerEntryHeaderRow.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectItems: PropTypes.func.isRequired,
  deselectItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  entries: state.ledgerEntry.data.items,
  selected: state.ledgerEntry.ui.selected,
});

const mapDispatchToProps = {
  selectItems: ledgerEntryOperations.selectItems,
  deselectItems: ledgerEntryOperations.deselectItems,
};

export const StyledLedgerEntryHeaderRow = withStyles(styles)(
  LedgerEntryHeaderRow
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLedgerEntryHeaderRow);
