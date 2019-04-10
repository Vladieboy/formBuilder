import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "../styles/material-ui/register-styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as accountServices from '../services/accounts'

const companies = [
  {
    value: "Kukdong Apparel Artesia",
    label: "Kukdong Apparel Artesia"
  },
  {
    value: "Kukdong Apparel North Carolina",
    label: "Kukdong Apparel North Carolina"
  },
  {
    value: "Kukdong Apparel Mexico",
    label: "Kukdong Apparel Mexico"
  }
];
const positions = [
  {
    value: "Intern",
    label: "Intern"
  },
  {
    value: "Developer",
    label: "Developer"
  },
  {
    value: "Manager",
    label: "Manager"
  }
];

const departments = [
  {
    value: "Information Technology",
    label: "Information Technology"
  },
  {
    value: "Human Resources",
    label: "Human Resources"
  },
  {
    value: "Billing",
    label: "Billing"
  },
  {
    value: "Production",
    label: "Production"
  }
];


class Register extends React.Component {
  state = {
    DepartmentName: "",
    CompanyName: "",
    position: "",
    isApprover: false
  };

  submitRegister = () => {
    debugger
    let payload = {...this.state}
    accountServices.register(payload).then(()=> this.props.history.push('/login')).catch(this.onRegisterError)
  }

  onRegisterError = response => {
    console.log(response)
    this.setState({
      error: 'Oops! Looks like something went wrong.'
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangeCheckBox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Employee
          </Typography>

          {/* Check to see if error message works */}
          {this.state.error && this.state.error}

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="ConfirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                name="ConfirmPassword"
                type="password"
                id="ConfirmPassword"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="passwordConfirm">First Name</InputLabel>
              <Input
                name="FirstName"
                type="text"
                id="FirstName"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="LastName">Last Name</InputLabel>
              <Input
                name="LastName"
                type="text"
                id="LastName"
                onChange={this.handleChange}
              />
            </FormControl>
            <TextField
              name="CompanyName"
              select
              label="Company"
              fullWidth
              className={classes.textField}
              value={this.state.CompanyName}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select a company."
              margin="normal"
            >
              {companies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="DepartmentName"
              select
              label="Department"
              fullWidth
              className={classes.textField}
              value={this.state.DepartmentName}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select a department."
              margin="normal"
            >
              {departments.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="position"
              select
              label="Position"
              fullWidth
              className={classes.textField}
              value={this.state.position}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select a position."
              margin="normal"
            >
              {positions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              control={<Checkbox value="isApprover" color="primary" name="isApprover" checked={this.state.isApprover} onChange={this.handleChangeCheckBox}/>}
              label="Can approve requests in department."
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.submitRegister}
            >
              Register
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Register);
