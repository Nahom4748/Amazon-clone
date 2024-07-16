import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImageData from "./ImageData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero style/HeroPages.css"; // Import the custom CSS

function HeroPages() {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {ImageData.map((Element, index) => {
          return <img key={index} src={Element} alt="" />;
        })}
      </Carousel>
      <div className="carousel-gradient"></div> {/* Gradient overlay */}
    </div>
  );
}

export default HeroPages;
