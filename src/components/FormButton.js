import React from 'react'

import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const FormButton = ({type, label, onClick, startIcon, variant}) => {
    return  <Button 
                variant={variant} 
                color={type} 
                startIcon={startIcon} 
                onClick={onClick}>
                <strong>{label}</strong>
            </Button>
}

FormButton.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    startIcon: PropTypes.element,
    variant: PropTypes.string,
}

FormButton.defaultProps = {};
  
export default FormButton;

// Delete - #CE3B40
// Edit - #F2CC8F
// Save - #5D987B