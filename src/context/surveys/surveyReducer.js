import {REGISTER_NEW_SURVEY,ADD_NEW_QUESTION,DELETE_QUESTION,UPDATE_QUESTION} from './types';

export default (state, {type, payload}) => {
    switch (type) {
        case REGISTER_NEW_SURVEY:
            return {
                name: payload.surveyName,
                description: payload.surveyDescription
            }

        case ADD_NEW_QUESTION:
            return {
                ...state,
                questions: [
                    ...state.questions, payload
                ]
            }

        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(
                (question) => question.id !== payload
                ),
            };

        case UPDATE_QUESTION: 
            return {
                ...state,
                questions: state.questions.map((question) =>
                question.id === payload.id ? payload : question
                ),
            }

        default:
            return { state };
    }
};