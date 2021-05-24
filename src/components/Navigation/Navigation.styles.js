import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const NavigationStyles = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 90%;
    z-index: 1;
    background-color: var(--color-white);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: .4s transform ease;
    @media(min-width: 1109px) {
        display: flex;
        justify-content: flex-end;
        position: unset;
        transform: unset;
        background-color: unset;
    }
`;
export const NavigationWrapperStyles = styled.div`
    ${props => props.type === 'links' && css`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 4.5rem;
        padding-left: 4rem;
        @media(min-width: 1109px) {
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
        }
    `}
    ${props => props.type === 'button' && css`
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding-left: 4rem;
        background-color: var(--color-grey-light-transparent);
        @media(min-width: 1109px) {
            position: initial;
            width: auto;
            background-color: transparent;
            padding-left: 3.6rem;
            height: auto;            
        }
    `}
`;
export const NavigationLinksWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 4.5rem;
    padding-left: 4rem;
    @media(min-width: 1109px) {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0;
    }
`;
export const NavigationButtonWrapperStyles = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10rem;
    padding-left: 4rem;
    background-color: var(--color-grey-light-transparent);
    @media(min-width: 1109px) {
        position: initial;
        width: auto;
        background-color: transparent;
        padding-left: 3.6rem;
        height: auto;
        
    }
`;
export const NavigationLinkStyles = styled(Link)`
    &,
    &:visited {
        position: relative;
        font-size: var(--font-size-s);
        line-height: var(--line-height-s);
        color: var(--color-black);
        text-decoration: none;
        @media(min-width: 1109px) {
            font-size: var(--font-size-l);
            line-height: var(--line-height-l);
        }
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 8px;
        height: 8px;
        transform: translate(0, 100%);
        border-radius: 50%;
        background-color: var(--color-orange);
        opacity: 0;
        transition: .15s opacity ease;
        @media(min-width: 1109px) {
            left: 50%;
            transform: translate(-50%, 100%);
        }
    }
    &:hover::after {
        opacity: 1;
    }
`;