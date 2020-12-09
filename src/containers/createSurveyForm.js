import React, {useState, useContext} from 'react'

import { FormControl,Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

import FormTextField from '../components/FormTextField';
import FormButton from '../components/FormButton';

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 60px);',
        width: '66%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        textAlign: 'center',
        padding: '20px',
        width: '100%',
        marginBottom: '60px',
        
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px'
    },
    subtext: {
        padding: '10px'
    }
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
        <div className={classes.root}>
 <Paper className={classes.paper}>
            <h1>Create Your Survey</h1>
            <p className={classes.subtext}><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta fugit et nobis modi ut accusamus dolores distinctio ad atque neque voluptatibus nostrum temporibus, aliquid delectus iure provident quis sequi?</i></p>
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
        </div>
       
    )
}

export default CreateSurveyForm;
