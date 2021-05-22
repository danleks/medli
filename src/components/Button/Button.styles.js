import styled from 'styled-components';
import { Link } from 'gatsby';

export const ButtonStyles = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.4rem;
    height: 5rem;
    border-radius: 8px;
    background-color: var(--color-orange);
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    text-decoration: none;
    &,
    &:visited {
        color: var(--color-black);
        
    }
`;