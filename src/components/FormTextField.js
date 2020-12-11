import React from 'react'

import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: '25px'
    }
}));

const FormTextField = ({label, content, id, onContentChange}) => {
    const classes = useStyles();

    return (
        <TextField className={classes.textField} label={label} id={id} defaultValue={content} onChange={onContentChange} variant="filled"
        color="primary"/>
    )
}

FormTextField.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string,
    onContentChange: PropTypes.func,
    id: PropTypes.number
}

FormTextField.defaultProps = {};

export default FormTextField;