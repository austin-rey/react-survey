import React, {useState, useContext} from 'react'

import { FormControl, Slider,Typography  } from '@material-ui/core';
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
    slider: {
        margin: '30px 0px'
    }
}));

const CreateSurvey = () => {

    const surveyContext = useContext(SurveyContext);

    const {registerNewSurvey} = surveyContext;

    const [surveyDetails, setSurveyDetails] = useState(
        {
            surveyName: '',
            surveyDescription: '',
            totalQuestions: ''
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
                    <Typography id="question-slider" gutterBottom># of Questions</Typography>
                    <FormTextField 
                        label="Select total questions" 
                        content={surveyDetails.totalQuestions} 
                        id="totalQuestions" 
                        onContentChange={event => updateTextField(event.target)} 
                    />
                    <FormButton 
                        type="primary"
                        label="Create Survey" 
                        onClick={formSubmit}
                    />
                </FormControl>
            </form>
        </div>
    )
}

export default () => {
    return (
        <CreateSurvey/>
    )
}