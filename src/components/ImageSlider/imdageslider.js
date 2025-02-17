import React from 'react';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./index.css"
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: 'https://i.pinimg.com/736x/11/75/96/1175960c5477df6f70d906fcf3891ac7.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://img.freepik.com/premium-photo/indian-traditional-wedding-jewellery-bangles-with-huldi-kumkum-white-flowers-selective-focus_466689-47909.jpg?w=996',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?cs=srgb&dl=pexels-manjeet-singh-yadav-462762-1162983.jpg&fm=jpg',
        caption: 'Slide 3'
    },
];
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};
const ImageSlider = () => {
    return (
        <div className="jewell-slide-container" >
           <Zoom {...zoomOutProperties}>
                {slideImages.map((each, index) => (
                    <div className='jewell-image-slide-container'>
                        <img key={index} style={{ width: "100%", height:"500px"}} src={each.url} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default ImageSlider;