// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container contains the UI/functionality for adding or updating survey questions in a modal popup
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useContext,useState,useEffect} from 'react'

import PropTypes from 'prop-types';

import {Card,CardHeader,CardContent,CardActions,Paper,Modal} from '@material-ui/core';

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
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '0px',
        width: '50vw'
      },
}));

const SurveyModal = ({type, currentQuestion, handleClose, handleOpen, show, number}) => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {setAlert} = alertsContext;
    const {addQuestion,updateQuestion,survey} = surveyContext;

    const [questionState, setQuestionState] = useState({
        title: '',
        answers: []
    })
    const [reset, restForm] = useState(true);

    useEffect(() => {
        // Editing an existing question
        if(currentQuestion) {
            setQuestionState({
                id: currentQuestion.id,
                title: currentQuestion.title,
                type: currentQuestion.type,
                number: number,
                answers: currentQuestion.answers.map(answer=> {
                    return {id: answer.id,answerTitle: answer.answerTitle}
                })
            })
        }else {
            setQuestionState({
                id: survey.questions.length +1,
                number: survey.questions.length +1,
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
        <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="Edit question modal"
        aria-describedby="This popup is for editing your questions title and answers">
            <Paper className={classes.paper} variant="outlined">
            <Card className={classes.questionCard}>
            <CardHeader
                className={classes.cardHeader}
                title={`Question ${questionState.number}`}/>
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
        </Paper>
    </Modal>
    )
}

SurveyModal.propTypes = {
    type: PropTypes.string,
    currentQuestion: PropTypes.object,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    open: PropTypes.bool
}

SurveyModal.defaultProps = {
    type: 'Multiple Choice',
};

export default SurveyModal;