import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "../styles/material-ui/register-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const inputTypes = [
  {
    value: "text",
    label: "Text"
  },
  {
    value: "select",
    label: "Select"
  }
];

class FormBuilder extends React.Component {
  state = {
    addField: {
      inputType: "",
      label: ""
    },
    formFields: []
  };

  handleChange = e => {
    const addField = {
      ...this.state.addField,
      [e.target.name]: e.target.value
    };
    this.setState({
      addField
    });
  };

  addField = () => {
    this.setState({
      formFields: [...this.state.formFields, { ...this.state.addField }],
      addField: {}
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={4} className={classes.main}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add input fields to your form.
            </Typography>
            <TextField
              required
              name="inputType"
              select
              label="Input Type"
              fullWidth
              className={classes.textField}
              value={this.state.addField.inputType}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select an input type for the form field."
              margin="normal"
            >
              {inputTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {this.state.addField.inputType === "select" && (
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="selectOptions">
                  Select Field Options
                </InputLabel>
                <Input
                  name="selectOptions"
                  type="text"
                  id="selectOptions"
                  onChange={this.handleChange}
                />
                <small style={{ color: "gray" }}>
                  Enter values separated by a comma.
                </small>
              </FormControl>
            )}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="Label">Form Field Label</InputLabel>
              <Input
                value={this.state.addField.label}
                name="label"
                type="text"
                id="Label"
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.addField}
            >
              Add Form Field
            </Button>
          </Paper>
        </Grid>

        {/* Below  is the section for displaying what the form will
        look like */}

        <Grid item xs={6} className={classes.main}>
          <Paper className={classes.paper}>
            <TextField
              name="input-type"
              select
              label="Input Type"
              fullWidth
              className={classes.textField}
              //   value={this.state.CompanyName}
              //   onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select a company."
              margin="normal"
            >
              {inputTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FormBuilder);
