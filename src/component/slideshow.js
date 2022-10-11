import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1560849898-d058f7d93b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80",
    "https://images.unsplash.com/photo-1587052655186-7c9fde446293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
];


const SlideShow = () => {
    return (
    <>
        <div className="slide-container">
        <Slide>
            <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span>Slide 1</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <span>Slide 2</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <span>Slide 3</span>
            </div>
            </div>
        </Slide>
        </div>
    </>
    );
};

export default SlideShow;