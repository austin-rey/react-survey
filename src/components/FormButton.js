import React from 'react'

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

export default FormButton;

// Delete - #CE3B40
// Edit - #F2CC8F
// Save - #5D987B