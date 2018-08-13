import _ from "lodash";
// import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class LedgerEntryEditForm extends Component {
  state = {
    id: _.get(this.props.entry, "id", "0"),
    date: _.get(this.props.entry, "date", "2000-01-01"),
    description: _.get(this.props.entry, "description", ""),
  };

  handleCancel = () => {
    this.setState({
      id: _.get(this.props.entry, "id", "0"),
      date: _.get(this.props.entry, "date", "2000-01-01"),
      description: _.get(this.props.entry, "description", ""),
    });
    this.props.closeEditForm();
  };

  handleSave = () => {
    this.props.closeEditForm();
  };

  render() {
    const { classes, fullScreen, isOpen } = this.props;

    const handleChange = field => event => {
      this.setState({
        [field]: event.target.value,
      });
    };

    return (
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Ledger Entry"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="date"
            label="Date"
            type="date"
            value={this.state.date}
            onChange={handleChange("date")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            value={this.state.description}
            onChange={handleChange("description")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

LedgerEntryEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  entry: PropTypes.object,
};

const mapStateToProps = state => ({
  isOpen: state.ledgerEntry.ui.edit,
  entry: _.find(state.ledgerEntry.data.items, {
    id: state.ledgerEntry.ui.editId,
  }),
});

const mapDispatchToProps = {
  closeEditForm: ledgerEntryOperations.closeEditForm,
};

export const StyledLedgerEntryEditForm = withStyles(styles)(
  LedgerEntryEditForm
);

const breakpoint = "xs";
const responsiveStyledLedgerEntryEditForm = withMobileDialog({ breakpoint })(
  StyledLedgerEntryEditForm
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(responsiveStyledLedgerEntryEditForm);
