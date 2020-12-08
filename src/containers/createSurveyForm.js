import React, {useState, useContext} from 'react'

import { FormControl,Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

import FormTextField from '../components/FormTextField';
import FormButton from '../components/FormButton';

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        // padding: '20px 10px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '66%'
    },
}));

const CreateSurveyForm = () => {

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {setAlert} = alertsContext;
    const {registerNewSurvey} = surveyContext;

    const [surveyDetails, setSurveyDetails] = useState(
        {
            surveyName: '',
            surveyDescription: ''
        }
    );

    const updateTextField = (e) => {
        setSurveyDetails({...surveyDetails, [e.id]: e.value});
    }

    const formSubmit = () => {
        if(surveyDetails.surveyName === '' || surveyDetails.surveyDescription === '') {
            setAlert('Please enter all fields.', 'error');
        }
        registerNewSurvey(surveyDetails);
    }

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h1>Survey Tool</h1>
            <div className={classes.formContainer}>
                <FormTextField 
                    label="Add a name" 
                    content={surveyDetails.surveyName} 
                    id="surveyName" 
                    onContentChange={event => updateTextField(event.target)} 
                />
                <FormTextField 
                    label="Add a description" 
                    content={surveyDetails.surveyDescription} 
                    id="surveyDescription" 
                    onContentChange={event => updateTextField(event.target)} 
                />
                <FormButton 
                    type="primary"
                    label="Create Survey" 
                    onClick={formSubmit}
                    variant="contained"
                    icon=""
                />
            </div>

        </Paper>
    )
}

export default CreateSurveyForm;
