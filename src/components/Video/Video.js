import React from 'react';
import Player from '../Player/Player';
import { VideoSectionStyles, VideoWrapperStyles, VideoTitleStyles, VideoDescStyles, LineBreakStyles } from './Video.styles';

const Video = () => {
    return (
        <VideoSectionStyles>
            <VideoWrapperStyles>
                <VideoTitleStyles>What our <LineBreakStyles noBreak768>community</LineBreakStyles><LineBreakStyles>is saying</LineBreakStyles></VideoTitleStyles>
                <VideoDescStyles>A mission-driven company that invest <LineBreakStyles>in and builds healthier living</LineBreakStyles></VideoDescStyles>
                <Player />
            </VideoWrapperStyles>
        </VideoSectionStyles>
    )
}

export default Video;
