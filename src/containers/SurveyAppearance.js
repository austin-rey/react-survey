import React,{useContext}  from 'react'

import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

import StepperBar from '../components/StepperBar'

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '10px',
        marginTop: '10px'
    },
    subText: {
        // borderBottom: '1px solid #efefef'
    },
    appearanceItem: {},
    itemHeading: {
        marginLeft: '5px',
        position: 'relative',
        width: '93%',
        '&::after': {
            position: 'absolute',
            content: "",
            height: '2px',
            backgroundColor: '#242424',
            width: '50%',
            marginLeft: '15px',
            top: '50%',
        }
    },
}));

const SurveyAppearance = props => {
    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {} = alertsContext;
    const {} = surveyContext;

    const classes = useStyles();

    return (
        <div>
             <StepperBar step={2}/> 
            <Paper className={classes.paper}>
                <div className={classes.appearanceItem}>
                    <h2 className={classes.itemHeading}>Type Faces (Font)</h2>
                    <p className={classes.subText}><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa quos, illum harum eveniet omnis officiis nemo eaque asperiores amet temporibus quas blanditiis quidem maxime, atque doloribus, voluptatem optio! Repudiandae?</i></p>
                </div>
                <div className={classes.appearanceItem}>
                    <h2 className={classes.itemHeading}>Color Pallet</h2>
                    <p className={classes.subText}><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa quos, illum harum eveniet omnis officiis nemo eaque asperiores amet temporibus quas blanditiis quidem maxime, atque doloribus, voluptatem optio! Repudiandae?</i></p>
                </div>
                <div className={classes.appearanceItem}>
                    <h2 className={classes.itemHeading}>Style</h2>
                    <p className={classes.subText}><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa quos, illum harum eveniet omnis officiis nemo eaque asperiores amet temporibus quas blanditiis quidem maxime, atque doloribus, voluptatem optio! Repudiandae?</i></p>
                </div>
                <div className={classes.appearanceItem}>
                    <h2 className={classes.itemHeading}>Animations</h2>
                    <p className={classes.subText}><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsa quos, illum harum eveniet omnis officiis nemo eaque asperiores amet temporibus quas blanditiis quidem maxime, atque doloribus, voluptatem optio! Repudiandae?</i></p>
                </div>
            </Paper>
        </div>
    )
}

SurveyAppearance.propTypes = {

}

export default SurveyAppearance

// Survey Design Elements: 
// Type faces, Color Palette, Style (minimal, elevated), Animations