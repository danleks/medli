import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterStyles = styled.footer`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 6.4rem;
    padding-bottom: 5.5rem;
    background-color: var(--color-black);
    @media(min-width: 1109px) {
        align-items: flex-start;
        margin-top: 11.4rem;
    }
`;
export const FooterWrapperStyles = styled.div`
    @media(max-width: 370px) {
        width: 80%;
    }
    position: relative;
    width: 32.6rem;
    @media(min-width: 1109px) {
        display: flex;
        flex-wrap: wrap;
        row-gap: 5.1rem;
        width: 111rem;
        border-bottom: 1px solid var(--color-white-transparent);
        padding-bottom: 8rem;
    }
`;
export const InnerWrapperStyles = styled.div`
    &:nth-child(1) {
        padding-top: 6.4rem;
        @media(min-width: 1109px) {
            order: 1;
            flex: 1 100%;
            padding-top: 8.9rem;
        }
    }
    &:nth-child(2) {
        padding-top: 5.6rem;
        @media(min-width: 1109px) {
            order: 3;
            flex: 1 34.5rem;
            padding: 0;
        }
    }
    &:nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 3.1rem;
        padding-top: 6.3rem;
        @media(min-width: 1109px) {
            order: 2;
            flex-direction: row;
            flex: 1 76rem;
            gap: 0;
            padding: 0;
        }
    }
    &:nth-child(4) {
        display: none;
        color: var(--color-grey-light-transparent);
        @media(min-width: 1109px) {
            display: block;
            position: absolute;
            bottom: -3.1rem;
            right: 0;
        }
    }
`;
export const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @media(min-width: 1109px) {
        flex-direction: row;
        height: 5rem;
        padding: 8px 8px 8px 1.6rem;
        border: 1px solid var(--color-grey);
        border-radius: 8px;
        & > label {
            flex: 1 100%;
        }
        & > input {
            flex: 1 21.3rem;
            border: none;
            border-radius: 0;
        }
        & > button {
            flex: 1 11.3rem;
        }
    }
`;
export const FormTitleStyles = styled.h4`
    padding-bottom: 1.6rem;
    font-size: var(--font-size-s);
    line-height: var(--line-height-xs);
    color: var(--color-grey);
    font-weight: var(--font-weight-400);
`;
export const FooterSectionStyles = styled.div`
    @media(min-width: 1109px) {
        &:nth-child(2) {
            padding: 0 11.8rem 0 5.8rem;
        }
    }
`;
export const FooterSectionTitleStyles = styled.h4`
    font-size: var(--font-size-s);
    line-height: var(--line-height-xs);
    color: var(--color-grey);
    font-weight: var(--font-weight-400);
`;
export const FooterSectionWrapperStyles = styled.ul`
    padding-top: 1.9rem;
`;
export const FooterSectionItemStyles = styled.li`
    font-size: var(--font-size-s);
    line-height: var(--line-height-xs);
    color: var(--color-grey-light);
`;
export const LinkStyles = styled(Link)`
    &,
    &:visited {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;
export const LinkTermsStyles = styled(LinkStyles)`
    font-size: 1rem;
    line-height: 1.5rem;
`;