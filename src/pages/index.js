import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import { ContentWrapperStyles } from '../styles/MainPage.styles';
import Statistics from '../components/Statistics/Statistics';
import Video from '../components/Video/Video';
import Offer from '../components/Offer/Offer';

const index = () => {
  return (
      <main>
        <ContentWrapperStyles>
          <Hero />
          <Statistics />
        </ContentWrapperStyles>
        <Video />
        <ContentWrapperStyles>
          <Offer />
        </ContentWrapperStyles>
      </main>
  )
}

export default index;
