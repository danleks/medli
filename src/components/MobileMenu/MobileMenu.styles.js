import styled from 'styled-components';
import { Link } from 'gatsby';

export const MobileMenuStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(min-width: 1109px) {
        display: none;
    }
`;
export const LinkStyles = styled(Link)`
    &,
    &:visited {
        text-decoration: none;
        cursor: pointer;
    }
`;