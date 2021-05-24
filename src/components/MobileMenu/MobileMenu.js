import React, { useState, useEffect }  from 'react';
import { MenuContext } from '../../contexts/menu-context';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import { MobileMenuStyles, LinkStyles } from './MobileMenu.styles';

const MobileMenu = () => {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined' || !window.document) {
          return;
        }
      }, []);
    // remove scrolling when menu is open
    const body = document.querySelector('body');
    menu ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll';    
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
