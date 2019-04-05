import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Content from "./Content";

const styles = () => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Paid Time Off
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Total PTO: 5.1 days
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Used PTO: 2.1 days
                </Typography>
                <hr />
                <Typography variant="subtitle1" color="textSecondary">
                  <strong>Balance PTO:</strong> 3.0 days
                </Typography>
              </CardContent>
            </div>
            <div className="d-inline m-auto">
              <i
                className="fas fa-hourglass-end fa-4x"
                style={{ color: "#009be5" }}
              />
            </div>
          </Card>
        </div>
        <div className="col-xs-12 col-md-3">
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Sick Leave
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Total Sick Days: 5.1 days
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sick Days Used: 2.1 days
                </Typography>
                <hr />
                <Typography variant="subtitle1" color="textSecondary">
                  <strong>Balance Sick Days:</strong> 3.0 days
                </Typography>
              </CardContent>
            </div>
            <div className="d-inline m-auto">
              <i
                className="fas fa-heartbeat fa-4x"
                style={{ color: "#009be5" }}
              />
            </div>
          </Card>
        </div>
        <div className="col-xs-12 col-md-3">
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Sick Leave
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Total Sick Days: 5.1 days
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Sick Days Used: 2.1 days
                </Typography>
                <hr />
                <Typography variant="subtitle1" color="textSecondary">
                  <strong>Balance Sick Days:</strong> 3.0 days
                </Typography>
              </CardContent>
            </div>
            <div className="d-inline m-auto">
              <i
                className="fas fa-umbrella-beach fa-4x"
                style={{ color: "#009be5" }}
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="my-5">
        <Content {...props} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
