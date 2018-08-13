import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import { lighten } from "@material-ui/core/styles/colorManipulator";
import { ledgerEntryShape } from "../../propTypes";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";
import LedgerEntryToolbar from "./LedgerEntryToolbar";
import LedgerEntryTable from "./LedgerEntryTable";
import LedgerEntryFooterRow from "./LedgerEntryFooterRow";
import LedgerEntryEditForm from "./LedgerEntryEditForm";

const styles = theme => ({
  root: {
    width: "100%",
    overflow: "auto",
    // marginTop: theme.spacing.unit,
  },
});

class LedgerEntryList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { classes, entries, editId } = this.props;

    return (
      <Paper className={classes.root}>
        <LedgerEntryToolbar />
        <LedgerEntryTable entries={entries} />
        <LedgerEntryFooterRow currentPage={0} rowCount={entries.length} />
        <LedgerEntryEditForm key={editId} />
      </Paper>
    );
  }
}

LedgerEntryList.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.arrayOf(ledgerEntryShape),
  fetchList: PropTypes.func.isRequired,
};

LedgerEntryList.defaultProps = {
  entries: [],
};

const mapStateToProps = state => ({
  entries: state.ledgerEntry.data.items,
  editId: state.ledgerEntry.ui.editId,
});

const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};

export const StyledLedgerEntryList = withStyles(styles)(LedgerEntryList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLedgerEntryList);
