import React, { useState, useContext }  from 'react';
import { MenuContext } from '../../contexts/menu-context';
import Logo from '../../assets/images/logo.inline.svg';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import { MobileMenuStyles } from './MobileMenu.styles';
import { MENU_LINKS } from '../../utils/MenuLinks';

const MobileMenu = () => {
    const [menu, setMenu] = useState(false);
    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            <MobileMenuStyles>
                <Logo />
                <Hamburger />
                <Navigation open={menu} />
            </MobileMenuStyles>
        </MenuContext.Provider>
    )
}

export default MobileMenu;
