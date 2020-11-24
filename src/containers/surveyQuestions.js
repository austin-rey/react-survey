import React, {useContext} from 'react';

import {makeStyles} from '@material-ui/core/styles';

import SurveyContext from '../context/surveys/surveyContext';

import SurveyQuestion from './surveyQuestion';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    }
}));

const SurveyQuestions = () => {
   
    const surveyContext = useContext(SurveyContext);
    const {survey} = surveyContext;
    const classes = useStyles();
    
    // let NewQuestion = 
    //     <Paper elevation={1}>
    //          <FormControl className={classes.surveyQuestionFC}>
    //          <h3>Question #1</h3>
    //             <TemplateTextField 
    //                     label="TITLE" 
    //                     content={''} 
    //                     placeholder={'Add a title..'}
    //                     id="surveyField1" 
    //                     onContentChange={console.log('Poop')} />
    //                 <TemplateTextField
    //                     label="ANSWER" 
    //                     content={'Add an answer..'} 
    //                     content={''} 
    //                     placeholder={'Add an answer..'}
    //                     id="surveyField2" 
    //                     onContentChange={console.log('Poop')} />
    //                 <FormButton
    //                     type="primary"
    //                     label="New answer" 
    //                     onClick={console.log('Poop2')}
    //                     variant="outlined"
    //                     startIcon={''}
    //                 />
    //          </FormControl>
    //     </Paper>;

    return (
        <div>
             <h1>Create Survey</h1>
             {survey.questions.map((question) => (
                 <SurveyQuestion question={question}/>
             ))}
        </div>

        
    )
}

export default SurveyQuestions;