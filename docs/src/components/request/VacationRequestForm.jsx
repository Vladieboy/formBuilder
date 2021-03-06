import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import * as formServices from '../../services/forms'

const styles = theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class VacationRequestForm extends React.PureComponent {
  state = {};

  submitRequest = () => {
    let  {EmployeeId, DepartmentId, } = this.props.currentUser 
    let payload = {...this.state, EmployeeId, DepartmentId}
    debugger
    formServices.addVacation(payload).then(() => this.props.history.push('/dashboard')).catch(this.onSubmitError)
  }

  onSubmitError = () => {
    this.setState({
      error: 'Oops. Looks like there was an error!'
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom className="my-2">
          Vacation
        </Typography>
        {this.state.error && this.state.error}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="dateFrom"
              label="From"
              type="date"
              defaultValue=""
              fullWidth
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="dateTo"
              label="To"
              type="date"
              onChange={this.handleChange}
              defaultValue=""
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="notes"
              label="Added Notes"
              multiline
              fullWidth
              rowsMax="8"
              value={this.state.notes}
              onChange={this.handleChange}
              // className={classes.textField}
              margin="normal"
              helperText="Please add any notes you would like to share."
            />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.submitRequest}
            className={classes.button}
          >
            Submit Vacation Request
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(VacationRequestForm);
