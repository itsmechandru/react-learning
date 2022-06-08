import React from 'react';
import "./ImageList.css";
import ImageCard from './ImageCard';

function ImageList({ imagesListA }) {
    // console.log(imagesListA);
    const images = imagesListA.map(function (image) {
        return (
            <ImageCard key={image.id} imageIL={image}/>
        );
    })
    return (
        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList