import React from 'react'

import {makeStyles} from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: '10px'
    }
}));

const FormTextField = ({label, content, id, onContentChange}) => {
    const classes = useStyles();

    return (
        <TextField className={classes.textField} label={label} id={id} defaultValue={content} onChange={onContentChange} variant="filled"
        color="primary"/>
    )
}

export default FormTextField;