import React from 'react'

import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
       width: '100%',
       backgroundColor: '#E6EBE0',
 
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
            variant="standard"
        />
    )
}

TemplateTextField.propTypes = {
    label: PropTypes.string,
    content: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.number,
    onContentChange: PropTypes.func,
}
  
TemplateTextField.defaultProps = {};

export default TemplateTextField;