// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container allows the user to reorganize questions, add sections and add title/context screens
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useContext} from 'react'

import PropTypes from 'prop-types';

import clsx from 'clsx';

import {makeStyles} from '@material-ui/core/styles'

import { Paper } from '@material-ui/core';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot} from '@material-ui/lab';

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const useStyles = makeStyles((theme) => ({
    timelineContent: {
        padding: '5px 10px',
        borderRadius: '5px',
        marginLeft: '10px',
        marginTop: '10px',
        backgroundColor: '#E6EBE0'
    },
    timelineContentButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5D987B',
        color: '#fff',
        cursor: 'pointer'
    },
    alignLeft : {
        flexDirection:'row-reverse',
        textAlign: 'end'
    }
}));

const SurveyFlow = () => {

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {} = alertsContext;
    const {survey} = surveyContext;
    
    const addScreen = (e) => {console.log('Add Screen')};

    const classes = useStyles();
    return (
        <div>       
            <Paper>
                <Timeline align="left">
                    <TimelineItem className={classes.alignLeft}>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary"  />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Start Survey</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className={clsx(classes.timelineContent, classes.timelineContentButton)} onClick={addScreen}>
                           <strong>ADD AN INTRODUCTION SCREEN</strong>
                        </TimelineContent>
                    </TimelineItem>
                    {survey.questions.map((question,i) => (
                    <>
                        <TimelineItem key={i}>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined"/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className={classes.timelineContent}>
                                <p><strong>Question {question.id}</strong><br/>{question.title}</p>
                            </TimelineContent>
                        </TimelineItem>
                    </>
                    ))}
                     <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className={clsx(classes.timelineContent, classes.timelineContentButton)} onClick={addScreen}>
                           <strong>ADD AN ENDING SCREEN</strong>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.alignLeft}>
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary"  />
                        </TimelineSeparator>
                        <TimelineContent>Complete Survey</TimelineContent>
                    </TimelineItem >
                    
                </Timeline>
            </Paper>
        </div>
    )
}

SurveyFlow.propTypes = {
    survey: PropTypes.object
}

export default SurveyFlow


// User can define the flow of the survey by adding content boxes throughout the survey for additional context. Examples of these content boxes may include a survey introduction, section introductions and survey conclusion.

// The component will have to be built on the drag and drop api as this isn't supported by material UI, yet. - https://medium.com/javascript-in-plain-english/how-to-create-native-drag-and-drop-functionality-in-javascript-d7940a3f55da

// On initial load, a list of cards of each question (Number and Title) will be displayed with a drag and drop icon in the top right. Cursor needs to indicate this as well. Maybe include some additional context above this saying it is drag and drop..

// Generate a survey introduction and survey conclusion card at the start and end that user can edit in a modal popup.
