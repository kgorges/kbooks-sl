import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Paper";

const styles = theme => ({});

class Home extends Component {
  render() {
    // const { classes } = this.props;

    return (
      <Paper>
        <Typography variant="headline" component="h3">
          This is Home.
        </Typography>
      </Paper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const StyledHome = withStyles(styles)(Home);

export default connect(
  null,
  null
)(StyledHome);
