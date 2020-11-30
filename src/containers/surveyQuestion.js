import {useContext} from 'react'
import PropTypes from 'prop-types'
import {Card,CardHeader,IconButton,CardContent,CardActions,Typography,List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import FormButton from '../components/FormButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from '@material-ui/core/styles';
import SurveyContext from '../context/surveys/surveyContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      cardContainer: {
        marginTop: '10px'
      },
      cardHeader: {
         backgroundColor: '#E6EBE0',
         color: '#5D576B'
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

const SurveyQuestion = ({question}) => {

    const classes = useStyles();
    
    const surveyContext = useContext(SurveyContext);
    const {survey} = surveyContext;

    return (
        <Card className={classes.cardContainer}>
            <CardHeader
                className={classes.cardHeader}
               
                title={`Question ${question.id}`}
                subheader={question.type}
            />
            <CardContent>
                <p>
                {question.title}
                </p>
                <List className={classes.answerList}>
                    {question.answers.map((answer, index) => (
                        <ListItem>
                            <ListItemText primary={answer.answerTitle}/>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions className={classes.cardActions}>
                    <FormButton 
                        type="primary"
                        label="Edit" 
                        onClick={console.log('Poop2')}
                        variant="contained"
                        startIcon={''}/>
                
                    <FormButton 
                        type="secondary"
                        label="Delete" 
                        onClick={console.log('Poop2')}
                        variant="contained"
                        startIcon={''}/>
                    
            </CardActions>
        </Card>
    )
}

SurveyQuestion.propTypes = {

}

export default SurveyQuestion
