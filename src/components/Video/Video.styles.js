import styled from 'styled-components';

export const VideoSectionStyles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 49.7rem;
    padding-top: 6.4rem;
    background-color: var(--color-orange);
    @media(min-width: 1109px) {
        height: 81.1rem;
    }
`;
export const VideoWrapperStyles = styled.div`
    @media(max-width: 370px) {
        width: 100%;
        padding-left: 1.6rem;
    }
    position: relative;
    width: 32.7rem;
    height: 100%;
    padding: 0;
    @media(min-width: 768px) {
        width: inherit;
    }
    @media(min-width: 1109px) {
        width: 100%;
    }
`;
export const VideoTitleStyles = styled.h2`
    font-size: var(--font-size-xxl);
    line-height: var(--line-height-xxl);
    white-space: break-spaces;
    @media(min-width: 768px) {
        text-align: center;
    }
    @media(min-width: 1109px) {
        font-size: var(--font-size-xxxl);
        line-height: var(--line-height-xxxl);
    }
`;
export const VideoDescStyles = styled.h3`
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    padding-top: 3.7rem;
    @media(min-width: 768px) {
        text-align: center;
    }
`;
export const LineBreakStyles = styled.span`
    display: block;
    @media(min-width: 768px) {
        display: ${({ noBreak768 }) => noBreak768 && 'inline'};
    }
`;