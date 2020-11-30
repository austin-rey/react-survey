import React from 'react'

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
       width: '100%'
      },
  }));

const TemplateTextField = ({label, content, placeholder, id, onContentChange}) => {
    const classes = useStyles();

    return (
        <TextField 
            className={classes.textField} 
            label={label} 
            id={id} 
            value={content} 
            placeholder={placeholder} 
            onChange={onContentChange} 
            multiline
            required
            rowsMax={3}
            margin="normal"
            color="primary"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
        />
    )
}

export default TemplateTextField;