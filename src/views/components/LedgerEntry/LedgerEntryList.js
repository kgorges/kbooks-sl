import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ledgerEntryShape } from "../../propTypes";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";
import LedgerEntryTable from "./LedgerEntryTable";

const styles = theme => ({});

class LedgerEntryList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { entries } = this.props;

    return (
      <Paper>
        <LedgerEntryTable entries={entries} />
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
