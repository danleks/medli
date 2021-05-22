import styled from 'styled-components';

export const HamburgerStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: none;
    z-index: ${({ open }) => open ? '1' : '0'};
    background-color: transparent;
    cursor: pointer;
`;
export const HamburgerContentStyles = styled.span`
    position: relative;
    width: 3rem;
    height: ${({ open }) => open ? '0' : '3px'};
    border-radius: 9rem;
    background-color: var(--color-black);
    &::before,
    &::after {
        content: '';
        width: inherit;
        height: 3px;
        position: absolute;
        left: 0;
        background-color: inherit;
        transform-origin: center;
    }
    &::before {
        top: ${({ open }) => open ? 'unset' : '-7px'};
        transform: ${({ open }) => open ? 'rotate(-45deg)' : ''};
    }
    &::after {
        bottom: ${({ open }) => open ? 'unset' : '-7px'};
        transform: ${({ open }) => open ? 'rotate(45deg)' : ''};
    }
`;