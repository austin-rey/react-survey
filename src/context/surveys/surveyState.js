import React,{useReducer} from 'react'

import SurveyContext from './surveyContext';

import surveyReducer from './surveyReducer';

import {REGISTER_NEW_SURVEY} from './types';

const SurveyState = (props) => {
    const initialState = {
        title: 'Survey Title',
        description: 'Survey Description',
        questions: [
            {
                id: 1,
                title: "This is the title of the question 1",
                answers:[
                    {
                        id: 1,
                        answer: 'This is one answer'
                    },
                    {
                        id: 2,
                        answer: 'This is the second answer'
                    },
                    {
                        id: 3,
                        answer: 'Oh shit, heres number 3'
                    }
                ]
            },
            {
                id: 2,
                title: "This is the title of the question 2",
                answers:[
                    {
                        id: 1,
                        answer: 'This is one answer 2'
                    },
                    {
                        id: 2,
                        answer: 'This is the second answer 2'
                    },
                    {
                        id: 3,
                        answer: 'Oh shit, heres number 3 2'
                    }
                ]
            }
        ]
    };

    const [state, dispatch] = useReducer(surveyReducer, initialState);

    const registerNewSurvey = (surveyDetails) => {
        dispatch({type: REGISTER_NEW_SURVEY, payload: surveyDetails})
    }

    return (
        <div>
            <SurveyContext.Provider
            value={{
                survey: state,
                registerNewSurvey
            }}>
                {props.children}
            </SurveyContext.Provider>
        </div>
    )
}

export default SurveyState;