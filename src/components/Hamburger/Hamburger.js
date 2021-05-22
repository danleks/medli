import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/menu-context';
import { HamburgerStyles, HamburgerContentStyles } from './Hamburger.styles';

const Hamburger = () => {
    const [menu, setMenu] = useContext(MenuContext);
    return (
        <HamburgerStyles onClick={() => {setMenu(!menu)}} open={menu}>
            <HamburgerContentStyles open={menu} />
        </HamburgerStyles>
    )
}

export default Hamburger;
