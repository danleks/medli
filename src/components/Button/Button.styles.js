import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const ButtonStyles = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-orange);
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    text-decoration: none;
    cursor: pointer;
    &,
    &:visited {
        color: var(--color-black);

    }
    ${props => props.buttonstyle === 'login' && css`
        width: 12.4rem;
        height: 5rem;
    `}
    ${props => props.buttonstyle === 'cta' && css`
        width: 100%;
        height: 6.2rem;
        @media(min-width: 768px) {
            width: 25.5rem;
            height: 7rem;
        } 
    `}
    ${props => props.buttonstyle === 'submit' && css`
        width: 100%;
        height: 6.2rem;
        border: none;
        @media(min-width: 1109px) {
            height: 100%;
            font-size: var(--font-size-s);
            line-height: var(--line-height-xs);
        }
    `}
`;