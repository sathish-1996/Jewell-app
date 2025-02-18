import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./index.css"
// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
// }

// const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px'
// }

const slideImages = [
    
   
    {
        url: 'https://media.grtjewels.com/magestore/bannerslider/images/m/a/main_banner_diamond.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://media.grtjewels.com/magestore/bannerslider/images/m/a/main_banner_gold.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://media.grtjewels.com/magestore/bannerslider/images/u/n/uncut_feb_2025_social_media_grt_home_page_1900x660.jpg',
        caption: 'Slide 3'
    },
];

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
    prevArrow: <button style={{ ...buttonStyle }}><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M34 197 c-3 -8 -4 -47 -2 -88 l3 -74 85 0 85 0 0 85 0 85 -83 3 c-63 2 -84 0 -88 -11z m116 -34 c0 -3 -7 -15 -17 -25 -15 -17 -15 -19 2 -38 28 -31 8 -37 -22 -7 l-27 26 24 26 c23 24 40 32 40 18z"/></g></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M44 247 c-2 -7 -3 -56 -2 -108 l3 -94 105 0 105 0 0 105 0 105 -103 3 c-79 2 -104 0 -108 -11z m126 -62 l34 -35 -37 -37 c-43 -44 -64 -37 -22 7 l29 30 -27 28 c-15 15 -27 31 -27 35 0 15 18 5 50 -28z"/></g></svg></button>
};
const ImageSlider = () => {
    return (
        <div className="jewell-slide-container" >
           <Zoom {...zoomOutProperties}>
                {slideImages.map((each, index) => (
                    <div className='jewell-image-slide-container'>
                        <img alt={each.caption} key={index} style={{ width: "100%", height:"500px"}} src={each.url} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default ImageSlider;