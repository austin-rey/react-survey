import {REGISTER_NEW_SURVEY,ADD_NEW_QUESTION} from './types';

export default (state, {type, payload}) => {
    switch (type) {
        case REGISTER_NEW_SURVEY:
            return {
                name: payload.surveyName,
                description: payload.surveyDescription
            }
        case 'UPDATE_TITLE':
            return {
                ...state,
                questions: [
                    ...state.questions.map((question) => {
                        if(question.id === payload.id) {
                            question.title=payload.title
                        }else{
                            console.log('No match')
                        }
                    })
                ],
            }
        case ADD_NEW_QUESTION:
            return {
                ...state,
                questions: [
                    ...state.questions, payload
                ]
            }
        default:
            return { state };
    }
};