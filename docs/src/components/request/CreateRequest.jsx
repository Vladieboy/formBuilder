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
import * as formService from "../../services/forms";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

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

class CreateRequest extends React.Component {
  state = { 
    documents: [],
    formData: {}
  };

submitForm = () => {
  let formData = JSON.stringify(this.state.formData);
  let payload = {...this.state.selectedDocument, formData, ...this.props.currentUser};
  console.log(payload);
  //formService.submitForm(payload).then().catch(response => console.log(response))
}

  componentDidMount(){
    this.getAllDocuments()
    
  }
  getAllDocuments = () => {
    formService.selectAll().then(this.getAllDocumentsSuccess).catch(this.logError)
  }
  
  getAllDocumentsSuccess = response => {
    this.setState({
      documents: response.data
    })
  }

  logError(response) {
    console.log(response)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleFormData = e => this.setState({formData: {...this.state.formData, [e.target.name]: e.target.value}})

  selectDocument = e => {
    let selectedDocument = {...this.state.documents[e.target.value]};
    selectedDocument.FormFields = JSON.parse(selectedDocument.FormFields);
    this.setState({
      ...this.state,
      selectedDocument
    })
  }

  getDocumentContent = (field, index) => {

    switch (field.inputType) {
      case "text":
        return (<FormControl margin="normal" key={index} required fullWidth>
          <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
          <Input
            //value={this.state.addField.label}
            name={`${field.label}-${index}`}
            type="text"
            id={field.label}
          onChange={this.handleFormData}
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
          onChange={this.handleFormData}
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
                //value={this.state.selectedDocument.Name}
                onChange={this.selectDocument}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select a request type."
                margin="normal"
              >
                {this.state.documents.length > 0 && this.state.documents.map((option, index) => {
                  return(
                  <MenuItem key={option.FormId} value={index} id={index}>
                    {option.Name}
                  </MenuItem>
                )})}
              </TextField>
             {this.state.selectedDocument && this.state.selectedDocument.FormFields.map(this.getDocumentContent)}
             {this.state.selectedDocument && <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              //className={classes.submit}
              onClick={this.submitForm}
            >
              Submit
            </Button>}
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
