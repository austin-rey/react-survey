import {REGISTER_NEW_SURVEY} from './types';

export default (state, {type, payload}) => {
    switch (type) {
        case REGISTER_NEW_SURVEY:
            return {
                name: payload.surveyName,
                description: payload.surveyDescription,
                questions: payload.totalQuestions
            }
            
        default:
            return { state };
    }
};