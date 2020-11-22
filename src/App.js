import React, {useState} from 'react'

import './App.css';

import CreateSurvey from './containers/createSurveyForm'

import {makeStyles} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

import SurveyState from './context/surveys/surveyState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <SurveyState>
        <Container maxWidth="lg" className={classes.container}>
          <CreateSurvey/>
        </Container>
      </SurveyState>
    </div>
  );
}

export default App;
