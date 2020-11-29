import React, {useState} from 'react'

import './App.css';

import CreateSurveyForm from './containers/createSurveyForm'
import SurveyQuestions from './containers/surveyQuestions'

import {makeStyles} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

import SurveyState from './context/surveys/surveyState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
  },
  app: {
    backgroundColor: '#EBF4F2'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App" className={classes.app}>
      <SurveyState>
        <Container maxWidth="md" className={classes.container}>
          <SurveyQuestions/>
        </Container>
      </SurveyState>
    </div>
  );
}

export default App;
