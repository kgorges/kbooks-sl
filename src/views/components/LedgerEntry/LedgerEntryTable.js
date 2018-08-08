import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import LedgerEntryHeaderRow from "./LedgerEntryHeaderRow";
import LedgerEntryRow from "./LedgerEntryRow";

const styles = theme => ({
  root: {
    width: "100%",
  },
  content: {
    padding: 0,
  },
});

class LedgerEntryTable extends Component {
  render() {
    const { classes, entries, rowsPerPage, currentPage } = this.props;

    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, entries.length - currentPage * rowsPerPage);

    return (
      <Table className={classes.root}>
        <LedgerEntryHeaderRow />
        <TableBody>
          {_.map(entries, (e, i) => {
            return <LedgerEntryRow entry={e} key={i} />;
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={8} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

LedgerEntryTable.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  entries: state.ledgerEntry.data.items,
  rowsPerPage: state.ledgerEntry.ui.rowsPerPage,
  currentPage: state.ledgerEntry.ui.currentPage,
});

/*
const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};
*/

export const StyledLedgerEntryTable = withStyles(styles)(LedgerEntryTable);

export default connect(
  mapStateToProps,
  null
)(StyledLedgerEntryTable);
