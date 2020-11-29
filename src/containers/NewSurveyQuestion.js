import React, {useContext, useState,useEffect} from 'react'

import {Card,CardHeader,CardContent,CardActions} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

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
         backgroundColor: '#555B6E',
         color: '#fff'
      },
      questionContent: {

      },
      answerList: {
          display: 'flex',
          flexDirection:"column",
          alignItems: 'flex-start',
          width: '100%'
      },
      cardActions: {
          justifyContent: 'flex-end',
          flexDirection: 'row'
      }
}));


const NewSurveyQuestion = ({question}) => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);

    const {addQuestion,survey} = surveyContext;

    const [questionState, setQuestionState] = useState({
        title: '',
        answers: []
    })

    useEffect(() => {
        setQuestionState({
            id: survey.questions.length +1,
            title: '',
            type: '',
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
      }, [survey]);

      
    const fieldChange = (e) => {
        let titleAnswer = e.target.id.replace(/[0-9]/g, '');
        let id = e.target.id.slice(-1);
        let updatedAnswer;
        console.log(titleAnswer);
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

    const submitNewQuestion = () => {
        addQuestion(questionState);
    }

    console.log(questionState);

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
                    onContentChange={fieldChange} />

                    <div className={classes.answerList}>
                        {questionState.answers.map((answer, index) => (
                            <TemplateTextField
                            label={`ANSWER ${index+1}`}
                            content={answer.answerTitle} 
                            placeholder={'Add an answer..'}
                            id={`answer${answer.id}`}
                            name={'answer'}
                            onContentChange={fieldChange} />
                        ))}
                    </div>
                  
                </CardContent>
            <CardActions className={classes.cardActions}>
                <FormButton 
                    type="primary"
                    label="Save" 
                    onClick={submitNewQuestion}
                    variant="outlined"
                    startIcon={''}/>
                <FormButton 
                    type="secondary"
                    label="Delete" 
                    onClick={console.log('Poop2')}
                    variant="outlined"
                    startIcon={''}/>
            </CardActions>
        </Card>
    )
}

export default NewSurveyQuestion;