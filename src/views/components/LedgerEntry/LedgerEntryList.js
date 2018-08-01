import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { ledgerEntryShape } from "../../propTypes";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";
import LedgerEntryToolbar from "./LedgerEntryToolbar";
import LedgerEntryTable from "./LedgerEntryTable";
import LedgerEntryFooterRow from "./LedgerEntryFooterRow";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
  },
});

class LedgerEntryList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { classes, entries } = this.props;

    return (
      <Paper className={classes.root}>
        <LedgerEntryToolbar />
        <LedgerEntryTable entries={entries} />
        <LedgerEntryFooterRow />
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
  entries: state.ledgerEntry.list.items,
});

const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};

export const StyledLedgerEntryList = withStyles(styles)(LedgerEntryList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLedgerEntryList);
