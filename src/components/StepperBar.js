// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container steps the user through the builder providing context to each step. Allows the user to go back and forward through the builder.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useState} from 'react'

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {Stepper,Step,StepLabel,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  stepperContainer: {
      width: '100%',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '5px',
      backgroundColor: '#fff',
      padding: '20px'
    },
    stepper: {
      borderBottomRightRadius: '5px',
      borderBottomLeftRadius: '5px',
      borderRadius: '0px'
    },
    instructions: {
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
      borderBottom: '1px solid #efefef',
      padding: '10px',
      textAlign: 'center',
    },
    stepButtons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    link: {
      color: '#fff',
      textDecoration: 'none'
    }
}));

function getSteps() {
    return [
      {urlParam:'/questions', name:'Questions'},
      {urlParam:'/flow', name:'Flow'},
      {urlParam:'/appearance', name:'Appearance'},
    ];
}

function getStepContent(step) {
  switch (step) {
    case 1:
      return (
        <>
        <h1>Define Your Survey Questions</h1><p><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, distinctio consequatur. Maxime voluptates tempore ratione, labore ipsam beatae, harum laborum, perferendis ut soluta totam aspernatur aperiam omnis dicta vel illo!</i></p></>
        );
    case 2:
      return (
        <>
        <h1>Define How The User Will Go Through Your Survey</h1><p><i>Below is a chart representing the flow of your survey. Start by adding screens between questions that give instructions or context to the survey.</i></p></>
        );
    case 3:
      return (
        <>
        <h1>Define How Your Survey Will Look</h1><p><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, distinctio consequatur. Maxime voluptates tempore ratione, labore ipsam beatae, harum laborum, perferendis ut soluta totam aspernatur aperiam omnis dicta vel illo!</i></p></>
        );
    default:
      return <p><strong></strong><br/></p>;
  }
}

const StepperBar = ({step,increaseStep,decreaseStep}) => {
  const classes = useStyles();
  const steps = getSteps();

  return (
      <div className={classes.stepperContainer}>
        <div>
          <div className={classes.instructions}>
            {getStepContent(step)}
          </div>  
        </div>

        <Stepper className={classes.stepper} activeStep={step} alternativeLabel>
          {steps.map((step,i) => (
            <Step key={i}>
              <StepLabel>{step.name}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={classes.stepButtons}>
        <Button
          disabled={step===1}
          onClick={decreaseStep}
          variant="contained" 
          color="primary" 
        >
          <strong>Back</strong>
        </Button>
        <Button 
          disabled={step===steps.length}
          variant="contained" 
          color="primary" 
          onClick={increaseStep}
        >
          <strong>Next</strong>
        </Button>
      </div>
    </div>
  );
}

StepperBar.propTypes = {
  step: PropTypes.string,
  increaseStep: PropTypes.func,
  decreaseStep: PropTypes.func
}

StepperBar.defaultProps = {};

export default StepperBar