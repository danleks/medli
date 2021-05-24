import React from 'react';
import { InputStyles } from './Input.styles';

const Input = ({ placeholder, type, required }) => {
    return (
        <InputStyles placeholder={placeholder} type={type} required={required} />
    )
}

export default Input;
