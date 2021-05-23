import React, { useContext }  from 'react';
import { MenuContext } from '../../contexts/menu-context';
import { MENU_LINKS } from '../../utils/MenuLinks';
import Button from '../Button/Button';
import { NavigationStyles, NavigationWrapperStyles, NavigationInnerWrapperStyles, NavigationLinkStyles } from './Navigation.styles';

const Navigation = () => {
    const [menu] = useContext(MenuContext);
    return (
        <NavigationStyles open={menu}>
            <NavigationWrapperStyles type='links'>
                {MENU_LINKS.map((link, i) => <NavigationLinkStyles key={i} to={link.to}>{link.title}</NavigationLinkStyles>)}
            </NavigationWrapperStyles>
            <NavigationWrapperStyles type='button'>
                <Button style='login' type='link'>Log in</Button>
            </NavigationWrapperStyles>
        </NavigationStyles>
    )
}

export default Navigation;
