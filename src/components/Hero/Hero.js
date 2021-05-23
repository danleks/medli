import React from 'react';
import Button from '../Button/Button';
import Ellipse from '../../assets/images/ellipse.inline.svg';
import { HeroSectionStyles, HeroWrapperStyles, HeroImgStyles, HeroTitleStyles, HeroSubtitleStyles } from './Hero.styles';

const Hero = () => {
    return (
        <HeroSectionStyles>
            <HeroWrapperStyles>
                <HeroImgStyles />
            </HeroWrapperStyles>
            <HeroWrapperStyles>
                <HeroTitleStyles>Check y<span><Ellipse /></span>ur well-being</HeroTitleStyles>
                <HeroSubtitleStyles>We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way.</HeroSubtitleStyles>
                <Button>Get started</Button>
            </HeroWrapperStyles>
        </HeroSectionStyles>
    )
}

export default Hero;
