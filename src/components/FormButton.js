import React from 'react'

import { Button } from '@material-ui/core';

const FormButton = ({type, label, onClick, startIcon, variant}) => {
    return  <Button 
                variant={variant} 
                color={type} 
                startIcon={startIcon} 
                onClick={onClick}>
                {label}
            </Button>
}

export default FormButton;