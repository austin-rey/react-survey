// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// @Description
// This container manages selected styles to be applied to a published survey
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React,{useContext}  from 'react'

import { Paper } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

import SurveyContext from '../context/surveys/surveyContext';
import AlertsContext from '../context/alerts/alertsContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '10px',
        marginTop: '10px'
    },
    subText: {},
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

const SurveyAppearance = () => {
    const surveyContext = useContext(SurveyContext);
    const alertsContext = useContext(AlertsContext);

    const {} = alertsContext;
    const {} = surveyContext;

    const classes = useStyles();
    return (
        <div>
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

export default SurveyAppearance