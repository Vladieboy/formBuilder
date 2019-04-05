import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import VacationRequestForm from "./VacationRequestForm";
import ReimbursementRequestForm from "./ReimbursementRequestForm";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

const requests = [
  {
    value: "vacation",
    label: "Vacation"
  },
  {
    value: "reimbursement",
    label: "Reimbursement"
  }
];

class CreateRequest extends React.Component {
  state = { requestType: "" };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  getRequestContent = () => {
    switch (this.state.requestType) {
      case "vacation":
        return <VacationRequestForm {...this.props} />;
      case "reimbursement":
        return <ReimbursementRequestForm {...this.props} />;
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Create Request
            </Typography>
            <React.Fragment>
              <TextField
                name="requestType"
                select
                label="Request Type"
                fullWidth
                className={classes.textField}
                value={this.state.requestType}
                onChange={this.handleChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select a request type."
                margin="normal"
              >
                {requests.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {this.getRequestContent()}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

CreateRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateRequest);
