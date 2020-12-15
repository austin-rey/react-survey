// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// Container manages a question and a modal to edit its content
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import {useContext,useState,useEffect} from 'react'

import PropTypes from 'prop-types';

import {Card,CardHeader,CardContent,CardActions,List,ListItem,ListItemText,} from '@material-ui/core';

import FormButton from '../components/FormButton';
import SurveyModal from './SurveyModal';

import {makeStyles} from '@material-ui/core/styles';
import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      cardContainer: {
        marginTop: '10px'
      },
      cardHeader: {
         backgroundColor: '#6F868E',
         color: '#F0EFEB'
      },
      answerList: {
          display: 'flex',
          flexDirection:"column",
          alignItems: 'flex-start',
          width: '100%',
      },
      listItem: {
          backgroundColor: '#E6EBE0',
          marginBottom: '5px',
          borderRadius: '5px'
      },
      cardActions: {
        backgroundColor: '#F0EFEB',
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      questionType: {
          color: '#5E5E5E',
          fontWeight: 'bold'
      }
}));

const SurveyQuestion = ({question, number}) => {
    const classes = useStyles();

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {setAlert} = alertsContext;
    const {deleteQuestion} = surveyContext;

    // Modal state per editing a question
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};

    useEffect(() => {
        // Reset Modal popup if question state was updated
        setOpen(false);
    }, [question])

    const questionDeleted = () => {
        setAlert('Question deleted.', 'success');
        deleteQuestion(question.id);
    }

    return (
        <div>
            {/* User clicks "Edit" */}
            <SurveyModal 
                show={open} 
                number={number}
                currentQuestion={question} 
                handleOpen={handleOpen} 
                handleClose={handleClose}
            />
            <Card className={classes.cardContainer}>
                <CardHeader
                    className={classes.cardHeader}
                    title={`Question ${number}`}
                />
                <CardContent>
                    <p><span className={classes.questionType}>{question.type}</span> - {question.title}</p>
                    <List className={classes.answerList}>
                        {question.answers.map((answer, i) => (
                            <ListItem key={i} className={classes.listItem}>
                                <ListItemText primary={answer.answerTitle}/>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <FormButton 
                        type="primary"
                        label="Edit" 
                        onClick={handleOpen}
                        variant="contained"
                        startIcon={''}/>
                    <FormButton 
                        type="secondary"
                        label="Delete" 
                        onClick={questionDeleted}
                        variant="contained"
                        startIcon={''}/>
                </CardActions>
            </Card>
        </div>
    )
}

SurveyQuestion.propTypes = {
    setAlert: PropTypes.func,
    deleteQuestion: PropTypes.func
}

export default SurveyQuestion
