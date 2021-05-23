import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { OfferSectionStyles, OfferWrapperStyles, OfferTitleStyles, OfferSubtitleStyles, CardsWrapperStyles, LineBreak } from './Offer.styles';
import Card from '../Card/Card';

const Offer = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allDatoCmsOffer {
                nodes {
                    id
                    image {
                        alt
                        url
                    }
                    description
                    title
                    order
                }
            }
        }
    `);
    const offer = data.allDatoCmsOffer.nodes;
    return (
        <OfferSectionStyles>
            <OfferWrapperStyles>
                <OfferTitleStyles>What you’re getting?</OfferTitleStyles>
                <OfferSubtitleStyles>We bring you personalized development programs that are <LineBreak>backed by research and crafted from the years of experience</LineBreak></OfferSubtitleStyles>
            </OfferWrapperStyles>
            <CardsWrapperStyles>
                {offer
                    .sort((a,b) => a.order - b.order)
                    .map((offerData) => {
                        return (
                            <Card key={offerData.id} {...offerData}/>
                        )
                    })}
            </CardsWrapperStyles>
        </OfferSectionStyles>
    )
}

export default Offer;
