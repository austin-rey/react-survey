import React, {useContext,useState,useEffect} from 'react';

import {Paper} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

import NewSurveyQuestion from './EditSurveyQuestion';
import SurveyQuestion from './SurveyQuestion';
import FormButton from '../components/FormButton';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    paper: {
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    },
    buttonContainer: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-evenly'
    }
}));

const SurveyQuestions = () => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);
    const {survey} = surveyContext;

    const [state, showNewQuestionCard] = useState(false);
    const [questionType, setQuestionType] = useState('');

    useEffect(() => {
        //New Question was added
        setQuestionType('');
        showNewQuestionCard(false);
    }, [survey])

    const questionTypeSelected = (type) => {
        setQuestionType(type);
        showNewQuestionCard(true);
    }
    return (
        <div>
            <h1>Create Survey</h1> 
            {survey.questions.map((question,i) => (
                 <SurveyQuestion number={i+1} key={i} question={question}/>
             ))}
            
            {(state)
            ?<NewSurveyQuestion type={questionType} />
            :<Paper className={classes.paper}>
                <h2>Add a Question</h2>
                <div className={classes.buttonContainer}>
                    <FormButton 
                        type="primary"
                        label="True/False" 
                        onClick={() => {questionTypeSelected('True/False')}}
                        variant="contained"
                        startIcon={''}/>
                    <FormButton 
                        type="primary"
                        label="Multiple Choice" 
                        onClick={() => {questionTypeSelected('Multiple Choice')}}
                        variant="contained"
                        startIcon={''}/>
                    <FormButton 
                        type="primary"
                        label="Multiple Select" 
                        onClick={() => {questionTypeSelected('Multiple Select')}}
                        variant="contained"
                        startIcon={''}/>
                </div>
            </Paper>
            }
            

            
        </div>
    )
}

export default SurveyQuestions;