import React, {useContext, useState,useEffect} from 'react'

import { Paper,FormControl  } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

import TemplateTextField from '../components/TemplateTextField';
import FormButton from '../components/FormButton';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    surveyQuestionFC: {
        display: 'flex',
        padding: '10px'
    },
    paper: {
        marginBottom: '10px'
    }
}));


const SurveyQuestion = ({question}) => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);

    const [questionState, setQuestionState] = useState({
        title: '',
        answers: []
    })

    useEffect(() => {
        setQuestionState({
            title: question.title,
            answers: [...question.answers]
        })
      }, [surveyContext]);

      
    const fieldChange = (e) => {
        let titleAnswer = e.target.id.slice(0, -1)
        let id = e.target.id.slice(-1);
        let updatedAnswer;
        
        if(titleAnswer == 'answer'){
            updatedAnswer = {
                id,
                answer: e.target.value
            }
        }

        (titleAnswer == 'title')
            ?setQuestionState({...questionState, title: e.target.value})
            :setQuestionState({...questionState, answers:[
                ...questionState.answers.map((answer,i) => {
                    return (answer.id == id) ? updatedAnswer : answer
                })
            ]})
    }

    return (
        <Paper elevation={1} className={classes.paper}>
        <FormControl className={classes.surveyQuestionFC}>
            <h3>Question {question.id}</h3>
            <TemplateTextField 
                label="TITLE" 
                content={question.title} 
                placeholder={'Add a title..'}
                id={`title${question.id}`}
                name={'title'}
                onContentChange={fieldChange} />

                {question.answers.map((answer, index) => (
                    <TemplateTextField
                    label={`ANSWER ${index+1}`}
                    content={answer.answer} 
                    placeholder={'Add an answer..'}
                    id={`answer${answer.id}`}
                    name={'answer'}
                    onContentChange={fieldChange} />
                ))}
            
            <FormButton
                type="primary"
                label="New answer" 
                onClick={console.log('Add a new answer')}
                variant="outlined"
                startIcon={''}
            />
        </FormControl>
    </Paper>
    )
}

export default SurveyQuestion;