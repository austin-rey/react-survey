import React,{useReducer} from 'react'

import SurveyContext from './surveyContext';

import surveyReducer from './surveyReducer';

import {REGISTER_NEW_SURVEY,ADD_NEW_QUESTION} from './types';

const SurveyState = (props) => {
    const initialState = {
        title: 'Survey Title',
        description: 'Survey Description',
        questions: [
            {
                id: 1,
                title: "This is the title of the question 1",
                type: "Multiple Choice",
                answers:[
                    {
                        id: 1,
                        answerTitle: 'This is one answer'
                    },
                    {
                        id: 2,
                        answerTitle: 'This is the second answer'
                    },
                    {
                        id: 3,
                        answerTitle: 'Oh shit, heres number 3'
                    }
                ]
            },
        ]
    };

    const [state, dispatch] = useReducer(surveyReducer, initialState);

    const registerNewSurvey = (surveyDetails) => {
        dispatch({type: REGISTER_NEW_SURVEY, payload: surveyDetails})
    }

    const addQuestion = (question) => {
        dispatch({type: ADD_NEW_QUESTION, payload: question})
    }

    return (
        <div>
            <SurveyContext.Provider
            value={{
                survey: state,
                registerNewSurvey,
                addQuestion
            }}>
                {props.children}
            </SurveyContext.Provider>
        </div>
    )
}

export default SurveyState;