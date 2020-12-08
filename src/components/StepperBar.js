import React, {useState} from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';

import {Stepper,Step,StepLabel,Button,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Survey Details', 'Survey Questions', 'Survey Flow', 'Survey Appearance'];
}

const StepperBar = props => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    
    return (
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      );
}

StepperBar.propTypes = {

}

export default StepperBar
