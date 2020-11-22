import React from 'react'

import TextField from '@material-ui/core/TextField';

const FormTextField = ({label, content, id, onContentChange}) => {
    return (
        <TextField label={label} id={id} defaultValue={content} onChange={onContentChange} variant="filled"
        color="primary"/>
    )
}

export default FormTextField;