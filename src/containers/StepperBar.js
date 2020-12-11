import React, {useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom";

import PropTypes from 'prop-types'

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
      {urlParam:'/',name:'Home'},
      {urlParam:'/questions',name:'Questions'},
      {urlParam:'/flow',name:'Flow'},
      {urlParam:'/appearance',name:'Appearance'},
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

const StepperBar = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const [activeStepPath, setActiveStepPath] = useState('');
    const steps = getSteps();

    console.log(activeStepPath);

    useEffect(() => {
      let currentPath = window.location.pathname;
      setActiveStepPath(currentPath);
    }, [window.location.pathname])

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
    
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    return (
        <div className={classes.stepperContainer}>
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
          <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel>
            {steps.map((step,i) => (
              <Step key={i}>
                <StepLabel>{step.name}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className={classes.stepButtons}>
            {activeStep > 1 &&
              <Button
              onClick={handleBack}
              variant="contained" 
              color="primary" 
              >
                <Link className={classes.link} to={steps[activeStep-1].urlParam}>{steps[activeStep-1].name}</Link>
              </Button>
            }
            {activeStep < steps.length - 1 &&
              <Button 
              variant="contained" 
              color="primary" 
              onClick={handleNext}>
                <Link className={classes.link} to={steps[activeStep+1].urlParam}>{steps[activeStep+1].name}</Link>
              </Button>
            }
            </div>
        </div>
      );
}

StepperBar.propTypes = {

}

export default StepperBar