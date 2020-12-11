// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container contains the UI/functionality for adding or updating survey questions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useContext,useState,useEffect} from 'react'

import PropTypes from 'prop-types';

import {Card,CardHeader,CardContent,CardActions} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

import TemplateTextField from '../components/TemplateTextField';
import FormButton from '../components/FormButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    questionCard: {
        marginTop: '10px'
    },
    cardHeader: {
        backgroundColor: '#6F868E',
        color: '#F0EFEB'
    },
    answerField: {
        backgroundColor: '#E6EBE0',
    },
    answerList: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'flex-start',
        width: '100%'
    },
    cardActions: {
        backgroundColor: '#F0EFEB',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
}));

const NewSurveyQuestion = ({type, currentQuestion}) => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {setAlert} = alertsContext;
    const {addQuestion,updateQuestion,survey} = surveyContext;

    const [questionState, setQuestionState] = useState({
        title: '',
        answers: []
    })
    const [reset, restForm] = useState(false);

    // Question already has data, populate local state with selected question
    useEffect(() => {
        if(currentQuestion) {
            setQuestionState({
                id: currentQuestion.id,
                title: currentQuestion.title,
                type: currentQuestion.type,
                answers: currentQuestion.answers.map(answer=> {
                    return {id: answer.id,answerTitle: answer.answerTitle}
                })
            })
        }else {
            setQuestionState({
                id: survey.questions.length +1,
                title: '',
                type: type,
                answers: [
                    {
                        id: 1,
                        answerTitle: ''
                    },
                    {
                        id: 2,
                        answerTitle: ''
                    },
                    {
                        id: 3,
                        answerTitle: ''
                    }
                ]
            })
        }
        restForm(false);
    }, [survey, reset]);
      
    // Handles field changes and updates local state
    const fieldChange = (e) => {
        let titleAnswer = e.target.id.replace(/[0-9]/g, '');
        let id = e.target.id.slice(-1);
        let updatedAnswer;

        if(titleAnswer == 'answer'){
            updatedAnswer = {
                id,
                answerTitle: e.target.value
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

    // Validates that all fields have content and updates app state with new question
    const submitNewQuestion = () => {
        const answerFields = questionState.answers.reduce((acc, answer)=>{
            return answer.answerTitle === '';
        })

        if(questionState.title === '' || answerFields) {
            setAlert('Please add a value to all fields.', 'error');
        } else {
            if (currentQuestion) {
                updateQuestion(questionState);
                setAlert(`Successfully updated question ${currentQuestion.id}.`, 'success');
            } else {
                addQuestion(questionState);
                setAlert('Successfully added a new question.', 'success');
            }
        }
    }

    // Reset form text fields after an update or addition
    const resetFormFields = () => {
        restForm(true);
    }

    return (
        <Card className={classes.questionCard}>
            <CardHeader
                className={classes.cardHeader}
                title={`Question ${questionState.id}`}
                subheader={questionState.type}/>
            <CardContent className={classes.questionContent}>
                <TemplateTextField 
                    label="TITLE" 
                    content={questionState.title} 
                    placeholder={'Add a title..'}
                    id={`title${questionState.id}`}
                    name={'title'}
                    onContentChange={fieldChange} 
                />
                <div className={classes.answerList}>
                    {questionState.answers.map((answer, index) => (
                        <TemplateTextField
                        className={classes.answerField}
                        key={index}
                        label={`ANSWER ${index+1}`}
                        content={answer.answerTitle} 
                        placeholder={'Add an answer..'}
                        id={`answer${answer.id}`}
                        name={'answer'}
                        onContentChange={fieldChange} />
                    ))}
                </div>
            </CardContent>
            {!currentQuestion && 
                <CardActions className={classes.cardActions}>
                    <FormButton 
                        type="primary"
                        label="Save" 
                        onClick={submitNewQuestion}
                        variant="contained"
                        startIcon={''}/>
                    <FormButton 
                        type="secondary"
                        label="Undo Changes" 
                        onClick={resetFormFields}
                        variant="contained"
                        startIcon={''}/>
                </CardActions>
            }
            {currentQuestion && 
                <CardActions className={classes.cardActions}>
                    <FormButton 
                        type="primary"
                        label="Save Changes" 
                        onClick={submitNewQuestion}
                        variant="contained"
                        startIcon={''}/>
                    <FormButton 
                        type="secondary"
                        label="Undo Changes" 
                        onClick={resetFormFields}
                        variant="contained"
                        startIcon={''}/>
                </CardActions>
            }
        </Card>
    )
}

NewSurveyQuestion.propTypes = {
    type: PropTypes.string,
    currentQuestion: PropTypes.object
}

NewSurveyQuestion.defaultProps = {
    type: 'Multiple Choice'
};

export default NewSurveyQuestion;