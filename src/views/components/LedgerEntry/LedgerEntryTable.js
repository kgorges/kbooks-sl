import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
import LedgerEntryHeaderRow from "./LedgerEntryHeaderRow";
import LedgerEntryRow from "./LedgerEntryRow";

const styles = theme => ({
  root: {
    width: "100%",
  },
  content: {
    padding: 0,
  },
  placeholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progress: {
    marginTop: 150,
  },
});

class LedgerEntryTable extends Component {
  render() {
    const { classes, entries, loading, rowsPerPage, currentPage } = this.props;

    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, entries.length - currentPage * rowsPerPage);

    return (
      <div className={classes.placeholder}>
        {loading ? (
          <CircularProgress className={classes.progess} />
        ) : (
          <Table className={classes.root}>
            <LedgerEntryHeaderRow />
            <TableBody>
              {_.map(
                _.slice(
                  _.orderBy(
                    entries,
                    ["date", "creationDate"],
                    ["desc", "desc"]
                  ),
                  currentPage * rowsPerPage,
                  (currentPage + 1) * rowsPerPage
                ),
                (e, i) => {
                  return <LedgerEntryRow entry={e} key={i} />;
                }
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    );
  }
}

LedgerEntryTable.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  entries: state.ledgerEntry.data.items,
  loading: state.ledgerEntry.ui.loading,
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
