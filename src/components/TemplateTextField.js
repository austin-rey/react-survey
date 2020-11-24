import React from 'react'

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // textField: {
    //    marginLeft: '10px',
    //   },
  }));

const TemplateTextField = ({label, content, placeholder, id, onContentChange}) => {

    const classes = useStyles();

    return (
        <TextField className={classes.textField} label={label} id={id} defaultValue={content} placeholder={placeholder} onChange={onContentChange} 
            multiline
            rows={1}
            margin="normal"
            color="primary"/>
    )
}

export default TemplateTextField;