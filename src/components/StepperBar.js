import React, {useState} from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';

import {Stepper,Step,StepLabel,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  stepperContainer: {
      width: '100%',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '5px'
    },
    stepper: {
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
      backgroundColor: '#fff',
borderRadius: '0px'
    },
    instructions: {
      borderTop: '1px solid #efefef',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderBottomRightRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
}));

function getSteps() {
    return ['Survey Questions', 'Survey Flow', 'Survey Appearance'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <p><strong>Define your survey questions.</strong><br/></p>;
    case 1:
      return <p><strong>Define how the user will go through your survey.</strong><br/> Below is a chart representing the flow of your survey. Start by adding screens between questions that give instructions or context to the survey. </p>;
    case 2:
      return <p><strong>Define how your survey will look to the end user.</strong><br/></p>;
    default:
      return <p><strong></strong><br/></p>;
  }
}

const StepperBar = props => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();
    
    return (
        <div className={classes.stepperContainer}>
          <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div className={classes.instructions}>
                All steps completed
              </div>
            ) : (
              <div className={classes.instructions}>
               {getStepContent(activeStep)}
              </div>
            )}
          </div>
        </div>
      );
}

StepperBar.propTypes = {

}

export default StepperBar
