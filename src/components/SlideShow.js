import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css";

const Slider = () => {
  // Define an array of slide images
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <div className="slider-container">
      <Slide
        arrows={true}
        duration={1500}
        canSwipe={false}
        pauseOnHover={true}
        transitionDuration={1500}
        indicators={true}
        easing="ease"
        cssClass="slider"
      >
        {slideImages.map((slide, index) => (
          <div key={index}>
            <img className="slide-image" src={slide.url} alt="" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
