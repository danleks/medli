import styled from 'styled-components';
import Img from "gatsby-image";
import PlayIcon from '../../assets/images/play.inline.svg';

export const PlayerSectionStyles = styled.div`
    width: 100%;
    max-width: 120.4rem;
    position: absolute;
    bottom: -7.3rem;
    left: 50%;
    transform: translate(-50%);
    @media(min-width: 1109px) {
        bottom: -21.2rem;
    }
`;
export const ImgStyles = styled(Img)`
    width: 100%;
    border-radius: 8px;
`;
export const PlayerControls = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7.8rem;
    height: 7.8rem;
    border-radius: 50%;
    background-color: var(--primary-background-color-transparent);
    cursor: pointer;
`;
export const PlayIconStyles = styled(PlayIcon)`
    width: 3.48rem;
    @media(min-width: 1109px) {
        width: 5.8rem;
    }
`;