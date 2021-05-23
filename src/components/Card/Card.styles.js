import styled from 'styled-components';

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 55rem;
    height: 43.9rem;
    padding-top: 4.2rem;
    padding-bottom: 4.5rem;
    border-radius: 8px;
    background-color: var(--color-white);
    @media(min-width: 768px) {
        width: 55rem;
        height: 37rem;
    }
    @media(min-width: 1109px) {
        max-width: 35rem;
        width: 100%;
        height: 100%;
    }
`;
export const CardWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
`;
export const CardImgStyles = styled.img`
    width: 100%;
    height: 17.3rem;
`;
export const CardTitleStyles = styled.h2`
    padding-top: 8.1rem;
    font-size: var(--font-size-l);
    line-height: var(--line-height-s);
    text-align: center;
    @media(min-width: 768px) {
        padding-top: 2rem;
    }
    @media(min-width: 1109px) {
        padding-top: 8.1rem;
    }
`;
export const CardDescStyles = styled.span`
    display: inline-block;
    padding-top: 1.6rem;
    font-size: var(--font-size-s);
    line-height: var(--line-height-xs);
    text-align: center;
`;