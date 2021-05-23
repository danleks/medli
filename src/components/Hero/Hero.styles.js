import styled from 'styled-components';
import HeroImg from '../../assets/images/heroImg.inline.svg';

export const HeroSectionStyles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.2rem;
    padding: 4.8rem 2.4rem 0;
    @media(min-width: 1109px) {
        flex-direction: row-reverse;
        align-items: flex-end;
        gap: 1.8rem;
        padding: 0;
        padding-top: 14.8rem;
    }
`;
export const HeroWrapperStyles = styled.div`
    &:nth-child(1) {
        max-width: 67.7rem;
        @media(min-width: 1109px) {
            max-width: 100%;
            flex: 1 67.7rem;
        }
    }
    &:nth-child(2) {
        max-width: 43rem;
        @media(min-width: 1109px) {
            max-width: 100%;
            flex: 1 44.3rem;
        }
    }
    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`; 
export const HeroImgStyles = styled(HeroImg)`
    max-width: 100%;
    height: auto;
`;
export const HeroTitleStyles = styled.h1`
    font-size: var(--font-size-xxl);
    line-height: var(--line-height-xxl);
    padding-bottom: 1.6rem;
    & > span {
        display: inline-block;
        width: 2.7rem;
        @media(min-width: 768px) {
            width: 4.3rem;
        }
    }
    @media(min-width: 768px) {
        font-size: var(--font-size-xxxl);
        line-height: var(--line-height-xxxl);
    }
`;
export const HeroSubtitleStyles = styled.h3`
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    color: var(--color-black-light);
    padding-bottom: 3rem;
    @media(min-width: 768px) {
        font-size: var(--font-size-l);
        line-height: var(--line-height-l);
        padding-bottom: 3.6rem;
    }
`;