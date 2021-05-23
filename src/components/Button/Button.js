import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ButtonStyles } from './Button.styles';

const Button = ({style, type, children }) => {
    const CustomTag = type === 'link' ? Link : 'button';
    return (
        <ButtonStyles as={CustomTag} buttonstyle={style} to="#">{ children }</ButtonStyles>
    )
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['link', 'button']).isRequired,
    style: PropTypes.oneOf(['login', 'cta', 'submit']).isRequired,
}; 

export default Button;
