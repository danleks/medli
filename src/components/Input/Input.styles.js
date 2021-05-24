import styled from 'styled-components';

export const InputStyles = styled.input`
    width: 100%;
    height: 100%;
    padding: 1.6rem 0 1.6rem 1.5rem;
    border: 1px solid var(--color-grey);
    border-radius: 8px;
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    color: var(--color-grey);
    background-color: transparent;
    @media(min-width: 1109px) {
        padding: 0;
        font-size: var(--font-size-s);
        line-height: var(--font-size-xs);
    }
`;