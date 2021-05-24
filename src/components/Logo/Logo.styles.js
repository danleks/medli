import styled, { css } from 'styled-components';
import EllipseIcon from '../../assets/images/ellipse.inline.svg';

export const LogoStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17.3rem;
`;
export const EllipseIconStyles = styled(EllipseIcon)`
    width: 5.6rem;
    height: auto;
`;
export const LogoDescStyles = styled.span`
    position: relative;
    font-size:  var(--font-size-logo);
    font-family: var(--font-family-heading);
    line-height: var(--line-height-logo);
    ${props => props.color === 'white' && css`
        color: var(--color-white);
    `}
    ${props => props.color === 'black' && css`
        color: var(--color-black);
    `}
    &::after {
        content: '●';
        font-size: 1.8rem;
        position: absolute;
        top: -1.25rem;
        right: 1px;
        color: var(--color-orange);
    }
`;