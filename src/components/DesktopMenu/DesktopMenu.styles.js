import styled from 'styled-components';
import { Link } from 'gatsby';

export const DesktopMenuStyles = styled.div`
    display: none;
    @media(min-width: 1109px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;