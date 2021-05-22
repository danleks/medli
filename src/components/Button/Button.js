import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyles } from './Button.styles';

const Button = ({ children }) => {
    return (
        <ButtonStyles to="#">{ children }</ButtonStyles>
    )
};


Button.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default Button;
