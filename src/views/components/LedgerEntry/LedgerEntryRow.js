import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";

const styles = theme => ({});

class LedgerEntryRow extends Component {
  render() {
    const {
      entry,
      selected,
      openEditForm,
      selectItems,
      deselectItems,
    } = this.props;
    const isSelected = selected.indexOf(entry.id) !== -1;

    const toggleCheckbox = () => {
      if (isSelected) {
        deselectItems([entry.id]);
      } else {
        selectItems([entry.id]);
      }
    };

    return (
      <TableRow key={entry.id} hover>
        <TableCell padding="checkbox" onClick={() => toggleCheckbox()}>
          <Checkbox checked={isSelected} />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          onClick={() => openEditForm(entry.id)}
        >
          {entry.date}
        </TableCell>
        <TableCell onClick={() => toggleCheckbox()}>
          {entry.description}
        </TableCell>
        <TableCell>{entry.account}</TableCell>
        <TableCell>{entry.subledgerAccount}</TableCell>
        <TableCell numeric>{entry.amount}</TableCell>
      </TableRow>
    );
  }
}

LedgerEntryRow.propTypes = {
  classes: PropTypes.object.isRequired,
  entry: PropTypes.object.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  openEditForm: PropTypes.func.isRequired,
  selectItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selected: state.ledgerEntry.ui.selected,
});

const mapDispatchToProps = {
  openEditForm: ledgerEntryOperations.openEditForm,
  selectItems: ledgerEntryOperations.selectItems,
  deselectItems: ledgerEntryOperations.deselectItems,
};

export const StyledLedgerEntryRow = withStyles(styles)(LedgerEntryRow);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLedgerEntryRow);
