import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageCard(props) {
    return (

        <LazyLoadImage
            className="card card-img-top"
            alt="..."
            effect="blur"
            src={props.imgurl}
            placeholderSrc={props.imgurl}
        />
    )
}
