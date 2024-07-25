// Modal.js
import itemscss from "./items style/items.module.css";
import React, { useState } from "react";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";
import ReactImageMagnify from "react-image-magnify";

const Module = ({ data }) => {
  const [load, setLoad] = useState(false);
  let img = data.image;

  return (
    <div className={itemscss.item_detail}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: img,
            height: 90,
          },
          largeImage: {
            src: img,
            width: 900,
            height: 900,
          },
          isHintEnabled: true,
        }}
      />
      <div className={itemscss.item_detail_all}>
        <h4>{data.title}</h4>
        <p className={itemscss.description}>{data.description}</p>
        <div className={itemscss.centerdisc}>
          <p className={itemscss.price}>
            <b>Price </b> ${data.price}
          </p>
          <span>Rating</span>
          <Rating value={data.rating.rate} />
          <span className={itemscss.rating}>{data.rating.count}</span>
        </div>
      </div>
    </div>
  );
};

export default Module;
