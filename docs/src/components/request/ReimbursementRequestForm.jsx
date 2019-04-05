import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

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

class ReimbursementRequestForm extends React.PureComponent {
  state = {};

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
          Reimbursement
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="date"
              label="Date"
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
            <FormControl required fullWidth>
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input
                name="amount"
                type="text"
                id="amount"
                onChange={this.handleChange}
              />
            </FormControl>
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
            Submit Reimbursement Request
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ReimbursementRequestForm);
