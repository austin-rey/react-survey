import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alerts from './components/Alerts';
import Navigation from './components/Navigation';
import SurveyStart from './containers/SurveyStart'
import SurveyBuilder from './containers/SurveyBuilder'

import {makeStyles} from '@material-ui/core/styles';

import { Container,CssBaseline } from '@material-ui/core';

import SurveyState from './context/surveys/surveyState';
import AlertsState from './context/alerts/alertsState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
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
          <Navigation />
          <Alerts/>
          <Container maxWidth="md" className={classes.container}>
            <Router>
              <Switch>
                <Route exact path='/' component={SurveyStart} />
                <Route exact path='/create' component={SurveyBuilder} />
              </Switch>
            </Router>
          </Container>
        </AlertsState>
      </SurveyState>
    </div>
  );
}

export default App;
