import React, { useState } from "react";
import { Rating } from "@mui/material";
import itemscss from "./items style/items.module.css";
import Swal from "sweetalert2";
import Modal from "react-modal";
// import { Modal } from "bootstrap";
import Modale from "./Module";
import CancelIcon from "@mui/icons-material/Cancel";

function RenderItems({ item }) {
  const [op, seto] = useState(false);
  return (
    <div className={itemscss.items}>
      <a href="#">
        <div className={itemscss.itemimge}>
          <img src={item.image} alt="" />
        </div>
        <div className={itemscss.itemtitle}>
          <small>{item.title.substring(0, 40)}</small>
        </div>
        <div>
          <Rating value={item.rating.rate} />
          <span>{item.rating.count}</span>
        </div>
        <div>${item.price}</div>
      </a>
      <div className={itemscss.btn}>
        <Modal isOpen={op} className={itemscss.modal}>
          <CancelIcon onClick={() => seto(false)} className={itemscss.clo} />
          <Modale data={item} />
        </Modal>
        <button onClick={() => seto(true)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default RenderItems;
