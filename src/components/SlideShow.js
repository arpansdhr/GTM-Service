import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css";

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define an array of slide images
  const slideImages = [
    {
      url:
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  const prevButtonStyle = {
    display: "none",
  };

  const NextButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-30px",
    height: "100px",
    width: "100px",
    background: "#FFFFFF",
    color: "#F25235",
    borderRadius: "50%",
    border: "none",
    fontSize: "60px",
    fontWeight: "800",
  };

  const nextButtonStyleMobile = {
    height: "70px",
    width: "70px",
    fontSize: "50px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...prevButtonStyle }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        style={{
          ...NextButtonStyle,
          ...(windowWidth <= 640 && nextButtonStyleMobile),
        }}
      >
        {">"}
      </button>
    ),
  };

  return (
    <div className="slider-container">
      <Slide
        {...properties}
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
