// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// Container manages all questions and the ability to add new questions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useContext,useState,useEffect} from 'react';

import PropTypes from 'prop-types';

import {Paper} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

import EditSurveyQuestion from './EditSurveyQuestion';
import SurveyQuestion from './SurveyQuestion';
import FormButton from '../components/FormButton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    paper: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        textAlign: 'center'
    },
    subText: {
        padding: '10px',
        borderBottom: '1px solid #efefef'
    },
    buttonContainer: {
        display: 'flex',
        padding: '10px',
        width: '70%',
        justifyContent: 'space-evenly'
    }
}));

const SurveyQuestions = () => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);
    const {survey} = surveyContext;

    const [showCard, toggleNewQuestionCard] = useState(false);
    const [questionType, setQuestionType] = useState('');

    useEffect(() => {
        //New Question was added
        setQuestionType('');
        toggleNewQuestionCard(false);
    }, [survey])

    const questionTypeSelected = (type) => {
        setQuestionType(type);
        toggleNewQuestionCard(true);
    }
    return (
        <div className={classes.root}>
            {survey.questions.map((question,i) => (
                 <SurveyQuestion number={i+1} key={i} question={question}/>
             ))}
            
            {(showCard)
            ?<EditSurveyQuestion type={questionType} />
            :<Paper className={classes.paper}>
                <h2>Add a Question</h2>
                <p className={classes.subText}><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur incidunt blanditiis aliquid, quidem aliquam dolore voluptas eius accusantium recusandae. Voluptatem sint libero culpa fugiat velit temporibus, sit delectus beatae est?</i></p>
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

SurveyQuestions.propTypes = {
    survey: PropTypes.object
}

export default SurveyQuestions;