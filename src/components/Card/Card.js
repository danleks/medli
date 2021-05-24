import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}; 

export default Card;
