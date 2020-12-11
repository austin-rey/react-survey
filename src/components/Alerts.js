import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import AlertContext from '../context/alerts/alertsContext';

import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '10'
  },
}));

  
const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const {alerts} = alertContext;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        alerts.length > 0 &&
        alerts.map((alert, i) => (
            <Alert key={i} severity={alert.type}>{alert.msg}</Alert>
        ))
      }
    </div>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.array,
}

export default Alerts;
