import React, {useContext} from 'react';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

import NewSurveyQuestion from './NewSurveyQuestion';
import SurveyQuestion from './SurveyQuestion';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
}));

const SurveyQuestions = () => {
   
    const surveyContext = useContext(SurveyContext);
    const {survey} = surveyContext;
    const classes = useStyles();

    return (
        <div>
             <h1>Create Survey</h1>
             
            {survey.questions.map((question) => (
                 <SurveyQuestion question={question}/>
             ))}
             
            <NewSurveyQuestion />
        </div>
    )
}

export default SurveyQuestions;