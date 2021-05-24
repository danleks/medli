import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { DesktopMenuStyles, LinkStyles } from './DesktopMenu.styles';

const DesktopMenu = () => {
    return (
        <DesktopMenuStyles>
            <LinkStyles to='/'>
                <Logo color='black' />
            </LinkStyles>
            <Navigation />
        </DesktopMenuStyles>
    )
}

export default DesktopMenu;
