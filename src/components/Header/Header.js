import React from 'react';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { HeaderStyles } from './Header.styles';

const Header = () => {
    return (
        <HeaderStyles>
            <MobileMenu />
            <DesktopMenu />
        </HeaderStyles>
    )
}

export default Header;
