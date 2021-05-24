import React, { useState }  from 'react';
import { document } from 'browser-monads';
import { MenuContext } from '../../contexts/menu-context';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import { MobileMenuStyles, LinkStyles } from './MobileMenu.styles';

const MobileMenu = () => {
    const [menu, setMenu] = useState(false);
    // remove scrolling when menu is open
    if (typeof document !== 'undefined') {
        menu ? document.querySelector('body').style.overflow = 'hidden' : document.querySelector('body').style.overflow = 'scroll'; 
    }       
    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            <MobileMenuStyles>
                <LinkStyles to='/'>
                    <Logo color='black' />
                </LinkStyles>
                <Hamburger />
                <Navigation open={menu} />
            </MobileMenuStyles>
        </MenuContext.Provider>
    )
}

export default MobileMenu;
