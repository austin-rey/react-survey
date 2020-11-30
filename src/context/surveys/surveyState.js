import React,{useReducer} from 'react'

import SurveyContext from './surveyContext';

import surveyReducer from './surveyReducer';

import {REGISTER_NEW_SURVEY,ADD_NEW_QUESTION,DELETE_QUESTION,UPDATE_QUESTION} from './types';

const SurveyState = (props) => {
    const initialState = {
        title: 'Survey Title',
        description: 'Survey Description',
        questions: [
            {
                id: 1,
                title: "Please select your gender",
                type: "Multiple Choice",
                answers:[
                    {
                        id: 1,
                        answerTitle: "Male"
                    },
                    {
                        id: 2,
                        answerTitle: "Gender"
                    },
                    {
                        id: 3,
                        answerTitle: "Other"
                    }
                ]
            },
            {
                id: 2,
                title: "What is your highest education level completed?",
                type: "Multiple Choice",
                answers:[
                    {
                        id: 1,
                        answerTitle: "No schooling completed"
                    },
                    {
                        id: 2,
                        answerTitle: "Some high school or diploma"
                    },
                    {
                        id: 3,
                        answerTitle: "High school graduate"
                    },
                    {
                        id: 4,
                        answerTitle: "Professional/Vocational/Technical Training"
                    },
                    {
                        id: 5,
                        answerTitle: "Bachelor’s degree"
                    },
                    {
                        id: 6,
                        answerTitle: "Master’s degree"
                    },
                    {
                        id: 7,
                        answerTitle: "Doctorate degree"
                    }
                ]
            },
            {
                id: 3,
                title: "What is your marital status?",
                type: "Multiple Choice",
                answers:[
                    {
                        id: 1,
                        answerTitle: "Single/Never married"
                    },
                    {
                        id: 2,
                        answerTitle: "In a committed relationship"
                    },
                    {
                        id: 3,
                        answerTitle: "Married"
                    },
                    {
                        id: 4,
                        answerTitle: "Separated"
                    },
                    {
                        id: 5,
                        answerTitle: "Divorced"
                    },
                    {
                        id: 6,
                        answerTitle: "Spouse deceased"
                    }
                ]
            },
            {
                id: 4,
                title: "During the past 6 months, you have lived: (select all that is applicable)",
                type: "Multiple Select",
                answers:[
                    {
                        id: 1,
                        answerTitle: "Alone"
                    },
                    {
                        id: 2,
                        answerTitle: "Parents"
                    },
                    {
                        id: 3,
                        answerTitle: "Friends/Roommates"
                    },
                    {
                        id: 4,
                        answerTitle: "Children"
                    },
                    {
                        id: 5,
                        answerTitle: "Partner"
                    },
                    {
                        id: 6,
                        answerTitle: "Other"
                    }
                ]
            },
            {
                id: 5,
                title: "How would you rate your mental health over the past 4 weeks?",
                type: "Multiple Choice",
                answers:[
                    {
                        id: 1,
                        answerTitle: "Poor"
                    },
                    {
                        id: 2,
                        answerTitle: "Fair"
                    },
                    {
                        id: 3,
                        answerTitle: "Good"
                    },
                    {
                        id: 4,
                        answerTitle: "Very Good"
                    },
                    {
                        id: 5,
                        answerTitle: "Excellent"
                    }
                ]
            },
            {
                id: 6,
                title: "Are you taking this survey?",
                type: "True/False",
                answers:[
                    {
                        id: 1,
                        answerTitle: "True"
                    },
                    {
                        id: 2,
                        answerTitle: "False"
                    }
                ]
            }
        ]
    };

    const [state, dispatch] = useReducer(surveyReducer, initialState);

    const registerNewSurvey = (surveyDetails) => {
        dispatch({type: REGISTER_NEW_SURVEY, payload: surveyDetails})
    }

    const addQuestion = (question) => {
        dispatch({type: ADD_NEW_QUESTION, payload: question})
    }

    const deleteQuestion = (id) => {
        dispatch({type: DELETE_QUESTION, payload: id})
    }

    const updateQuestion = (question) => {
        dispatch({type: UPDATE_QUESTION, payload: question})
    }
    return (
        <div>
            <SurveyContext.Provider
            value={{
                survey: state,
                registerNewSurvey,
                addQuestion,
                deleteQuestion,
                updateQuestion
            }}>
                {props.children}
            </SurveyContext.Provider>
        </div>
    )
}

export default SurveyState;