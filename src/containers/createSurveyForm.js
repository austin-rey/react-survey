import React, {useState, useContext} from 'react'

import { FormControl } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

import FormTextField from '../components/FormTextField';
import FormButton from '../components/FormButton';

import SurveyContext from '../context/surveys/surveyContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    createSurveyForm: {
        display: 'flex',
        minHeight: '300px',
        justifyContent: 'space-between'
    },
}));

const CreateSurveyForm = () => {

    const surveyContext = useContext(SurveyContext);

    const {registerNewSurvey} = surveyContext;

    const [surveyDetails, setSurveyDetails] = useState(
        {
            surveyName: '',
            surveyDescription: ''
        }
    );

    const updateTextField = (e) => {
        console.log(surveyDetails);
        setSurveyDetails({...surveyDetails, [e.id]: e.value});
    }

    const formSubmit = () => {
        registerNewSurvey(surveyDetails);
    }

    const classes = useStyles();

    return (
        <div>
            <h1>Survey Tool</h1>
            <form noValidate>
                <FormControl className={classes.createSurveyForm}>
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
                </FormControl>
            </form>
        </div>
    )
}

export default CreateSurveyForm;
