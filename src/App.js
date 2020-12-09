import React from 'react'

import './App.css';

import SurveyQuestions from './containers/SurveyQuestions'
import CreateSurveyForm from './containers/CreateSurveyForm'
import SurveyFlow from './containers/SurveyFlow'

import Alerts from './components/Alerts';
import Navigation from './components/Navigation';

import {makeStyles} from '@material-ui/core/styles';

import { Container,CssBaseline  } from '@material-ui/core';

import SurveyState from './context/surveys/surveyState';
import AlertsState from './context/alerts/alertsState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  app: {
    backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App" className={classes.app}>
       <CssBaseline />
      <SurveyState>
        <AlertsState>
          <Alerts/>
          <Navigation />
          <Container maxWidth="md" className={classes.container}>
            {/* <CreateSurveyForm/> */}
            {/* <SurveyQuestions/> */}
            <SurveyFlow/>
          </Container>
        </AlertsState>
      </SurveyState>
    </div>
  );
}

export default App;
