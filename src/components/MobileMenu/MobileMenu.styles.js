import styled from 'styled-components';

export const MobileMenuStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(min-width: 1109px) {
        display: none;
    }
`;