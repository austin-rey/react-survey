import React from 'react'

import { Button } from '@material-ui/core';

const FormButton = ({type, label, onClick}) => {
    return <Button variant="contained" color={type} onClick={onClick}>{label}</Button>
}

export default FormButton;