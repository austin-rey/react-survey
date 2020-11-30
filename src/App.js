import React, {useState} from 'react'

import './App.css';

import CreateSurveyForm from './containers/CreateSurveyForm'
import SurveyQuestions from './containers/SurveyQuestions'
import Alerts from './components/Alerts';

import {makeStyles} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

import SurveyState from './context/surveys/surveyState';
import AlertsState from './context/alerts/alertsState';

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
        <AlertsState>
          <Alerts/>
            <Container maxWidth="md" className={classes.container}>
          <SurveyQuestions/>
        </Container>
        </AlertsState>
      </SurveyState>
    </div>
  );
}

export default App;
