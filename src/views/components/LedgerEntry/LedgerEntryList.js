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

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: "1 1 100%",
  },
  actions: {
    color: theme.palette.text.primary,
  },
  title: {
    flex: "0 0 auto",
  },
});

class LedgerEntryList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { entries } = this.props;

    return (
      <Paper>
        <Card>
          <LedgerEntryToolbar />
          <LedgerEntryTable entries={entries} />
        </Card>
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
