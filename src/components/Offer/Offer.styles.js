import styled from 'styled-components';

export const OfferSectionStyles = styled.section`
    padding: 13.7rem 2.4rem 0;
    @media(min-width: 1109px) {
        padding: 0;
        padding-top: 36.3rem;
    }    
`;
export const OfferWrapperStyles = styled.div`
    width: 32.7rem;
    margin: auto;
    @media(min-width: 768px) {
        width: 50rem;
    }
    @media(min-width: 1109px) {
        width: 100%;
        margin: 0;
    }
`;
export const OfferTitleStyles = styled.h2`
    font-size: var(--font-size-xxl);
    line-height: var(--line-height-xxl);
    @media(min-width: 768px) {
        text-align: center;
    }
    @media(min-width: 1109px) {
        font-size: var(--font-size-xxxl);
        line-height: var(--line-height-xxxl);
        text-align: left;
    }
`;
export const OfferSubtitleStyles = styled.h3`
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    padding-top: 3.6rem;
    @media(min-width: 768px) {
        text-align: center;
    }
    @media(min-width: 1109px) {
        text-align: left;
    }
`;
export const CardsWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding-top: 3.6rem;
    @media(min-width: 1109px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0;
    }
`;
export const LineBreak = styled.span`
    @media(min-width: 1109px) {
        display: block;
    }    
`;