import styled from 'styled-components';

export const StatisticsSectionStyles = styled.section`
    padding: 6.4rem 0;
    @media(min-width: 1109px) {
        padding-top: 22.2rem;
        padding-bottom: 21.9rem;
    }
`;
export const StatisticsWrapperStyles = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10.8rem;
    @media(min-width: 768px) {
        flex-direction: row;
        gap: 4.5rem;
        align-items: flex-start;
    }
    @media(min-width: 1109px) {
        gap: 15.3rem;
    }
`;
export const StatisticsItemStyles = styled.li`
    text-align: center;
    &:nth-child(1) > span {
        display: inline-block;
        width: 15rem;
    }
    &:nth-child(2) > span {
        @media(min-width: 768px) {
            display: inline-block;
            width: 20rem;
        }
    }
`;
export const StatisticsTitleStyles = styled.h2`
    font-size: var(--font-size-xxxl);
    line-height: var(--line-height-xxxl);
    color: var(--color-orange);
    @media(min-width: 768px) {
        font-size: var(--font-size-xxxl-secondary);
    }
    @media(min-width: 1109px) {
        font-size: var(--font-size-xxxl);
    }
`;
export const StatisticsDescStyles = styled.span`
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    @media(min-width: 1109px) {
        font-size: var(--font-size-l);
        line-height: var(--line-height-l);
    }
`;