import React, { useContext, useState } from "react";
import { Rating } from "@mui/material";
import itemscss from "./items style/items.module.css";
import Swal from "sweetalert2";
import Modal from "react-modal";
import Modale from "./Module";
import CancelIcon from "@mui/icons-material/Cancel";
import { DataContext } from "../DataPrivider/DataProvider";
import { Type } from "../../utility/Action.type";

function RenderItems({ item }) {
  const { id, title, price, category, description, image, rating } = item;
  const [op, seto] = useState(false);
  const [TotaAmunt, SetTotalAmount] = useState(0);
  const [state, dispatch] = useContext(DataContext);

  const addTocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      payload: {
        id,
        title,
        price,
        category,
        description,
        image,
        rating,
      },
    });
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className={itemscss.items}>
      <div onClick={() => seto(true)} className={itemscss.all_item_description}>
        <div className={itemscss.itemimge}>
          <img src={image} alt="" />
        </div>
        <div className={itemscss.itemtitle}>
          <small>{title.substring(0, 40)}</small>
        </div>
        <div>
          <Rating value={rating?.rate} />
          <span>{rating?.count}</span>
        </div>
        <div>${price}</div>
      </div>
      <div className={itemscss.btn}>
        <Modal isOpen={op} className={itemscss.modal}>
          <CancelIcon onClick={() => seto(false)} className={itemscss.clo} />
          <Modale data={item} />
        </Modal>
        <button onClick={addTocart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default RenderItems;
