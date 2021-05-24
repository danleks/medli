import React from 'react';
import { LogoStyles, EllipseIconStyles, LogoDescStyles } from './Logo.styles';

const Logo = ({ color }) => {
    return (
        <LogoStyles>
            <EllipseIconStyles />
            <LogoDescStyles color={color}>Medli</LogoDescStyles>
        </LogoStyles>
    )
};

export default Logo
