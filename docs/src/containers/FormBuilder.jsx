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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import * as formServices from '../services/forms';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

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
    open: false,
    addField: {
      inputType: "",
      label: ""
    },
    approverList: [],
    formFields: []
  };

  approverListMapper = (approver, index) => {
    return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  {index+1}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={approver}
                //secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete"  id={index} onClick={this.removeApprover}>
                  <DeleteIcon id={index}/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
    )

  }

  removeApprover = e => {
    let index = parseInt(e.currentTarget.id)
    let approverList = [...this.state.approverList]
    approverList.splice(index, 1);
    this.setState({
      approverList
    })
  }

  handleChangeCheckBox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
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
      addField: {
        inputType: "",
        label: "",
        approver: ""
      }
    });
  };

  addApprover = () => {
    let approverList = [...this.state.approverList, this.state.addField.approver];
    this.setState({
      ...this.state,
      addField: {
        inputType: "",
        label: "",
        approver: ""
    },
    approverList
  });
  }

  submitFormCreation = () => {

  }

  renderForm = (field, index) => {
    switch (field.inputType) {
      case "text":
        return (<FormControl margin="normal" key={index} required fullWidth>
          <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
          <Input
            //value={this.state.addField.label}
            name={`${field.label}-${index}`}
            type="text"
            id={field.label}
          //onChange={this.handleChange}
          />
        </FormControl>)

      case "select":
        let selectOptionsArray = field.selectOptions.split(",");
        return (<TextField
          key={index}
          required
          name={`${field.label}-${index}`}
          select
          label={field.label}
          fullWidth
          //className={classes.textField}
          //value={this.state.addField.inputType}
          //onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              //className: classes.menu
            }
          }}
          helperText="Please select an input type for the form field."
          margin="normal"
        >
          {selectOptionsArray.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>)
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
            {<Typography component="h1" variant="h5">
              This is what your form will look like to other users.
            </Typography>}
            {this.state.formFields.length > 0 && <Button className="mt-3" variant="contained" color="primary" onClick={this.handleClickOpen}>
              Create Form
        </Button>}
            {this.state.formFields.map(this.renderForm)}
          </Paper>
        </Grid>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Form</DialogTitle>
          <DialogContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <DialogContentText>
                  Please give the new form a name and define the approval process for this form.
            </DialogContentText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="formName"
                  id="name"
                  label="Form Name"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={12}>
              <TextField
              name="approver"
              select
              label="Approver"
              fullWidth
              //className={classes.textField}
              value={this.state.addField.approver}
              onChange={this.handleChange}
              SelectProps={{
                MenuProps: {
                  //className: classes.menu
                }
              }}
              helperText="Add a required approver to the form."
              margin="normal"
            >          
            {/* The value of the menu item should be the employee number if the person selected  */}
                <MenuItem key="0" value="Caz">
                  Caz
                </MenuItem>
                <MenuItem key="1" value="Jim">
                  Jim
                </MenuItem>
                <MenuItem key="2" value="Bill">
                  Bill
                </MenuItem>
            </TextField>
            <Button onClick={this.addApprover} disabled={this.state.addField.approver === "" ? true : false}color="primary">
              Add Approver
            </Button>
              </Grid>

              <Grid item xs={12} md={12}>
              <Typography align="center" variant="h6" className={classes.title}>
                  List of Approvers
            </Typography>
                <div className={classes.demo}>
                  <List>
                    {this.state.approverList.length > 0 && this.state.approverList.map(this.approverListMapper)}
                  </List>
                </div>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="IsRequiredByEmployeeManager" color="primary" name="IsRequiredByEmployeeManager" checked={this.state.IsRequiredByEmployeeManager} onChange={this.handleChangeCheckBox} />}
                  label="Requires approval of employee's immediate manager."
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save Form
            </Button>
          </DialogActions>
        </Dialog>

      </Grid>
    );
  }
}

export default withStyles(styles)(FormBuilder);
