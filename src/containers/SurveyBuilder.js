// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container manages the flow of building a survey, controlling which UI components will show by interacting with the stepper bar.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {useContext, useState} from 'react'

import SurveyQuestions from './SurveyQuestionCards';
import SurveyFlow from './SurveyFlow';
import SurveyAppearance from './SurveyAppearance';
import StepperBar from '../components/StepperBar';

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const SurveyBuilder = () => {

    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {} = alertsContext;
    const {} = surveyContext;

    const [currentStep, setCurrentStep] = useState(1)

    console.log(currentStep);

    const decreaseStep = () => setCurrentStep(currentStep-1);
    const increaseStep = () => setCurrentStep(currentStep+1);


    const ShowContainerByStep = () => {
        switch(currentStep) {
            case 1: return <SurveyQuestions/>
            case 2: return <SurveyFlow/>
            case 3: return <SurveyAppearance/>
            default: return;
        }
    }

    return (
        <div>
            <StepperBar step={currentStep} increaseStep={increaseStep} decreaseStep={decreaseStep}/>
            <ShowContainerByStep/>
        </div>
    )
}

export default SurveyBuilder