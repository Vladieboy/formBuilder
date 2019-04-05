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

const companies = [
  {
    value: "Kukdong Apparel Artesia",
    label: "Kukdong Apparel Artesia"
  },
  {
    value: "Kukdong Apparel North Carolina",
    label: "Kukdong Apparel North Carolina"
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
    value: "IT",
    label: "Information Technology"
  },
  {
    value: "HR",
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
    department: "",
    company: "",
    position: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
              <InputLabel htmlFor="passwordConfirm">
                Confirm Password
              </InputLabel>
              <Input
                name="passwordConfirm"
                type="password"
                id="passwordConfirm"
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
              name="company"
              select
              label="Company"
              fullWidth
              className={classes.textField}
              value={this.state.company}
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
              name="department"
              select
              label="Department"
              fullWidth
              className={classes.textField}
              value={this.state.department}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
