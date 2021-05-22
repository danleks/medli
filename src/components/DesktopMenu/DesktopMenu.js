import React from 'react';
import Logo from '../../assets/images/logo.inline.svg';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import { DesktopMenuStyles } from './DesktopMenu.styles';

const DesktopMenu = () => {
    return (
        <DesktopMenuStyles>
            <Logo />
            <Navigation />
        </DesktopMenuStyles>
    )
}

export default DesktopMenu;
