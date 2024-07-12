import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImageData from "./ImageData";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroPages() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {ImageData.map((Element) => {
          return <img src={Element} alt="" />;
        })}
      </Carousel>
    </div>
  );
}

export default HeroPages;
