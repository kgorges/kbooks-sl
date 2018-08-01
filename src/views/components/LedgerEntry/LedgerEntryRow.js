import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({});

class LedgerEntryRow extends Component {
  render() {
    const { entry } = this.props;

    return (
      <TableRow key={entry.id}>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {entry.date}
        </TableCell>
        <TableCell>{entry.description}</TableCell>
        <TableCell>{entry.account}</TableCell>
        <TableCell>{entry.subledgerAccount}</TableCell>
        <TableCell numeric>{entry.credit}</TableCell>
        <TableCell numeric>{entry.debit}</TableCell>
        <TableCell numeric>{entry.credit - entry.debit}</TableCell>
      </TableRow>
    );
  }
}

LedgerEntryRow.propTypes = {
  classes: PropTypes.object.isRequired,
  entry: PropTypes.object.isRequired,
};

export default withStyles(styles)(LedgerEntryRow);
