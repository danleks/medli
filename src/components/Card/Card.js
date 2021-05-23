import React from 'react';
import { CardStyles, CardWrapperStyles, CardImgStyles, CardTitleStyles, CardDescStyles } from './Card.styles';

const Card = ({ image, title, description }) => {
    return (
        <CardStyles>
            <CardWrapperStyles>
                <CardImgStyles src={image.url} alt={image.alt}/>
                <CardTitleStyles>{title}</CardTitleStyles>
                <CardDescStyles>{description}</CardDescStyles>
            </CardWrapperStyles>
        </CardStyles>
    )
};

export default Card;
