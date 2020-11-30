import React, { useContext } from 'react';

import AlertContext from '../context/alerts/alertsContext';

import Snackbar from '@material-ui/core/Snackbar';
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
      right: '10px'
    },
  }));

  
const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const classes = useStyles();


    return (
        <div className={classes.root}>
          
            {
                alertContext.alerts.length > 0 &&
                alertContext.alerts.map((alert) => (
                    <Alert severity={alert.type}>{alert.msg}</Alert>
                ))
            }
             
        </div>
      
    );
};

export default Alerts;
