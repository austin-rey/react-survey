import React,{useReducer} from 'react'

import SurveyContext from './surveyContext';

import surveyReducer from './surveyReducer';

import {REGISTER_NEW_SURVEY} from './types';

const SurveyState = (props) => {

    const initialState = {
        title: '',
        description: '',
        questions: [],
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